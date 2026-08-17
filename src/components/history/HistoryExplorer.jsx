import { useState } from "react";

import {
  Landmark,
  Flag,
} from "lucide-react";

import {
  kashmirHistoryPeriods,
  jklfHistoryPeriods,
} from "../../data/history";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import PeriodNavigation from "./PeriodNavigation";
import HistoryTimeline from "./HistoryTimeline";

import "./history.css";

export default function HistoryExplorer() {
  const [mode, setMode] = useState("kashmir");

  const periods =
    mode === "kashmir"
      ? kashmirHistoryPeriods
      : jklfHistoryPeriods;

  const [selectedId, setSelectedId] =
    useState(periods[0].id);

  function switchMode(nextMode) {
    setMode(nextMode);

    const nextPeriods =
      nextMode === "kashmir"
        ? kashmirHistoryPeriods
        : jklfHistoryPeriods;

    setSelectedId(nextPeriods[0].id);
  }

  const selectedPeriod =
    periods.find(
      (period) =>
        period.id === selectedId
    ) || periods[0];

  return (
    <Section
      variant="soft"
      className="history-explorer-section"
    >
      <Container>

        <SectionHeader
          eyebrow="Explore History"
          title="Choose a Historical Track"
          description="Move between the wider history of Jammu Kashmir and the organisational history of JKLF."
        />

        <div className="history-mode-switch">

          <button
            type="button"
            className={
              mode === "kashmir"
                ? "history-mode history-mode--active"
                : "history-mode"
            }
            onClick={() =>
              switchMode("kashmir")
            }
          >
            <Landmark size={21} />

            <div>
              <strong>
                History of Jammu Kashmir
              </strong>

              <span>
                Political & regional history
              </span>
            </div>
          </button>

          <button
            type="button"
            className={
              mode === "jklf"
                ? "history-mode history-mode--active"
                : "history-mode"
            }
            onClick={() =>
              switchMode("jklf")
            }
          >
            <Flag size={21} />

            <div>
              <strong>
                History of JKLF
              </strong>

              <span>
                Organisational history
              </span>
            </div>
          </button>

        </div>

        <PeriodNavigation
          periods={periods}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <div className="history-selected-period">

          <div className="history-selected-period__date">
            {selectedPeriod.period}
          </div>

          <div className="history-selected-period__content">

            <span>
              Featured Period
            </span>

            <h3>
              {selectedPeriod.title}
            </h3>

            <p>
              {selectedPeriod.summary}
            </p>

          </div>

          <div className="history-selected-period__actions">
            <button type="button">
              Explore this period →
            </button>
          </div>

        </div>

        <HistoryTimeline
          periods={periods}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

      </Container>
    </Section>
  );
}