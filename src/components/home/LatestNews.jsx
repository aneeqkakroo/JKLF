import { ArrowRight } from "lucide-react";

import useNews from "../../data/useNews";

import {
  Button,
  Container,
  Section,
  SectionHeader,
} from "../ui";

import {
  StoryCard,
  StoryCardSkeleton,
} from "../news/NewsCards";

import "./home.css";

export default function LatestNews() {
  const { news, status } = useNews();

  // Nothing to show yet (or the request failed): leave the section out.
  if (status !== "loading" && news.length === 0) {
    return null;
  }

  return (
    <Section variant="soft">
      <Container>

        <div className="latest-heading">

          <SectionHeader
            eyebrow="Newsroom"
            title="Latest News & Statements"
            description="Statements, announcements and updates from the Liberation Front."
          />

          <Button
            to="/news"
            variant="outline"
          >
            View All
            <ArrowRight size={17} />
          </Button>

        </div>

        <div className="news-grid">
          {status === "loading"
            ? [1, 2, 3].map((key) => <StoryCardSkeleton key={key} />)
            : news.slice(0, 3).map((article) => (
                <StoryCard
                  key={article.id}
                  article={article}
                />
              ))}
        </div>

      </Container>
    </Section>
  );
}
