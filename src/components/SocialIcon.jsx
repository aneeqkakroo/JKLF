// Brand marks for the official social accounts (lucide-react ships no brand icons).
const icons = {
  facebook: (
    <path d="M9.1 23.7v-8H6.6V12h2.5v-1.6c0-4.1 1.8-6 5.9-6 .8 0 2.1.2 2.6.3v3.3c-.3 0-.8-.1-1.4-.1-2 0-2.7.7-2.7 2.6V12h3.9l-.7 3.7h-3.2V24C19.4 23.2 24 18.2 24 12 24 5.4 18.6 0 12 0S0 5.4 0 12c0 5.6 3.9 10.4 9.1 11.7Z" />
  ),
  instagram: (
    <>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <circle
        cx="12"
        cy="12"
        r="4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <circle cx="17.6" cy="6.4" r="1.4" />
    </>
  ),
  x: (
    <path d="M18.9 1.2h3.7l-8 9.1L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9Zm-1.3 19.5h2L6.5 3.2H4.3l13.3 17.5Z" />
  ),
  youtube: (
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
  ),
  tiktok: (
    <path d="M12.5 0h3.9c.1 1.5.6 3.1 1.8 4.2 1.1 1.1 2.7 1.6 4.2 1.8V10c-1.4-.1-2.9-.4-4.2-1-.6-.3-1.1-.6-1.6-.9v8.7c-.1 1.4-.5 2.8-1.4 3.9-1.3 1.9-3.6 3.2-5.9 3.2-1.4.1-2.9-.3-4.1-1-2-1.2-3.4-3.4-3.6-5.7v-1.5c.2-1.9 1.1-3.7 2.6-5 1.7-1.4 4-2.1 6.2-1.7v4.4c-1-.3-2.2-.2-3 .4-.6.4-1.1 1-1.4 1.8-.2.5-.1 1.1-.1 1.6.2 1.6 1.8 3 3.5 2.9 1.1 0 2.2-.7 2.8-1.6.2-.3.4-.7.4-1.1.1-1.8.1-3.6.1-5.4V0Z" />
  ),
};

export default function SocialIcon({ id, size = 20 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {icons[id]}
    </svg>
  );
}
