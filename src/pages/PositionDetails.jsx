import {
  Navigate,
  useParams,
} from "react-router-dom";

import {
  positionTopics,
} from "../data/positions";

import {
  Container,
  Section,
} from "../components/ui";

export default function PositionDetail() {
  const { slug } = useParams();

  const position = positionTopics.find(
    (item) => item.id === slug
  );

  if (!position) {
    return <Navigate to="/position" replace />;
  }

  return (
    <Section>
      <Container narrow>

        <span className="ui-eyebrow">
          {position.category}
        </span>

        <h1>
          {position.title}
        </h1>

        <p>
          {position.description}
        </p>

        <p>
          Full position page coming later.
        </p>

      </Container>
    </Section>
  );
}