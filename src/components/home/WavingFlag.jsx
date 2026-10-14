import { useEffect, useState } from "react";

// Outlines for the two wave phases; the path morphs between them.
const WAVE_A =
  "M0 0 Q125 -22 250 0 T500 0 L500 300 Q375 322 250 300 T0 300 Z";
const WAVE_B =
  "M0 0 Q125 22 250 0 T500 0 L500 300 Q375 278 250 300 T0 300 Z";

function usePrefersReducedMotion() {
  const query = "(prefers-reduced-motion: reduce)";

  const [reduced, setReduced] = useState(
    () => window.matchMedia?.(query).matches ?? false
  );

  useEffect(() => {
    const media = window.matchMedia?.(query);

    if (!media) {
      return undefined;
    }

    const update = () => setReduced(media.matches);

    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

// The JKLF flag (Article 18), gently waving.
export default function WavingFlag({ className = "" }) {
  const reduced = usePrefersReducedMotion();

  return (
    <svg
      className={className}
      viewBox="-30 -40 560 420"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="flag-wave">
          <path d={WAVE_A}>
            {!reduced && (
              <animate
                attributeName="d"
                dur="4s"
                repeatCount="indefinite"
                values={`${WAVE_A};${WAVE_B};${WAVE_A}`}
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            )}
          </path>
        </clipPath>

        {/* Light and shade bands that travel along the cloth */}
        <linearGradient
          id="flag-folds"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="250"
          y2="0"
          spreadMethod="repeat"
        >
          <stop offset="0" stopColor="#000" stopOpacity="0.16" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.12" />
          <stop offset="1" stopColor="#000" stopOpacity="0.16" />

          {!reduced && (
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="0 0"
              to="250 0"
              dur="4s"
              repeatCount="indefinite"
            />
          )}
        </linearGradient>
      </defs>

      {/* Flagpole */}
      <rect
        x="-14"
        y="-34"
        width="8"
        height="414"
        rx="4"
        fill="rgba(255, 255, 255, 0.55)"
      />

      <g clipPath="url(#flag-wave)">
        <rect x="0" y="-30" width="500" height="180" fill="#0b6b3a" />
        <rect x="0" y="150" width="500" height="180" fill="#b52025" />
        <path d="M0 -30 L125 150 L0 330 Z" fill="#ffffff" />
        <rect x="0" y="-30" width="500" height="360" fill="url(#flag-folds)" />
      </g>
    </svg>
  );
}
