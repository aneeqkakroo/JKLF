import { useState } from "react";

import {
  Check,
  Link2,
  Share2,
} from "lucide-react";

import SocialIcon from "../SocialIcon";

const SITE_URL = "https://www.jklf.org";

export default function ShareArticle({ title, slug }) {
  const [copied, setCopied] = useState(false);

  const url = `${SITE_URL}/news/${slug}`;
  const text = encodeURIComponent(title);
  const link = encodeURIComponent(url);

  const targets = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${text}%20${link}`,
    },
    {
      name: "X",
      icon: "x",
      href: `https://x.com/intent/post?text=${text}&url=${link}`,
    },
    {
      name: "Facebook",
      icon: "facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${link}`,
    },
  ];

  const canNativeShare =
    typeof navigator !== "undefined" && Boolean(navigator.share);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link:", url);
    }
  }

  async function nativeShare() {
    try {
      await navigator.share({ title, url });
    } catch {
      // The reader closed the share sheet; nothing to do.
    }
  }

  return (
    <div className="news-share">
      <span className="news-share__label">
        Share
      </span>

      <div className="news-share__buttons">
        {canNativeShare && (
          <button
            type="button"
            className="news-share__button news-share__button--native"
            onClick={nativeShare}
            aria-label="Share this article"
          >
            <Share2 size={17} />
          </button>
        )}

        {targets.map((target) => (
          <a
            key={target.name}
            href={target.href}
            target="_blank"
            rel="noopener noreferrer"
            className="news-share__button"
            aria-label={`Share on ${target.name}`}
            title={`Share on ${target.name}`}
          >
            {target.icon ? (
              <SocialIcon id={target.icon} size={16} />
            ) : (
              <WhatsAppIcon />
            )}
          </a>
        ))}

        <button
          type="button"
          className="news-share__button"
          onClick={copyLink}
          aria-label="Copy link"
          title="Copy link"
        >
          {copied ? <Check size={17} /> : <Link2 size={17} />}
        </button>
      </div>

      <span
        className="news-share__copied"
        role="status"
      >
        {copied ? "Link copied" : ""}
      </span>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2a9.9 9.9 0 0 0-8.53 14.94L2 22l5.2-1.47A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.09.87.83-3.01-.2-.31a8.2 8.2 0 1 1 6.94 3.78Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.79.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.44.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.47a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.06s.88 2.38 1 2.55c.12.16 1.74 2.65 4.21 3.72 1.56.67 2.17.73 2.95.62.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}
