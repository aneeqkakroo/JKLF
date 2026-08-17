import "./history.css";

export default function HistoryTimeline({
  periods,
  selectedId,
  onSelect,
}) {
  return (
    <div className="history-main-timeline">

      <div className="history-main-timeline__line" />

      {periods.map((period, index) => {
        const active =
          period.id === selectedId;

        return (
          <button
            type="button"
            key={period.id}
            onClick={() =>
              onSelect(period.id)
            }
            className={
              active
                ? "history-timeline-item history-timeline-item--active"
                : "history-timeline-item"
            }
          >

            <div className="history-timeline-item__marker">
              <span />
            </div>

            <span className="history-timeline-item__number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>
              {period.label}
            </strong>

            <small>
              {period.title}
            </small>

          </button>
        );
      })}

    </div>
  );
}