import { useEffect, useState } from "react";

import { fetchPublicNews } from "../lib/publicNews.js";

// One request per visit, shared by the home page and the news pages.
let cache = null;

function loadNews() {
  if (!cache) {
    cache = fetchPublicNews({ env: import.meta.env }).catch((error) => {
      cache = null; // allow a retry on the next page that needs news
      throw error;
    });
  }

  return cache;
}

// status: "loading" | "ready" | "error"
export default function useNews() {
  const [state, setState] = useState({ status: "loading", news: [] });

  useEffect(() => {
    let active = true;

    loadNews()
      .then((news) => active && setState({ status: "ready", news }))
      .catch(() => active && setState({ status: "error", news: [] }));

    return () => {
      active = false;
    };
  }, []);

  return state;
}
