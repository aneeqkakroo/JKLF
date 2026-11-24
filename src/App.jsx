import VerifyMembership from "./pages/VerifyMembership";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Position from "./pages/Position";
import History from "./pages/History";
import Leadership from "./pages/Leadership";
import News from "./pages/News";
import Contact from "./pages/Contact";
import PositionDetail from "./pages/PositionDetails";
import LeadershipDetail from "./pages/LeadershipDetail";
import NewsDetail from "./pages/NewsDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="/verify-membership" element={<VerifyMembership />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/position"
            element={<Position />}
          />

          <Route
            path="/position/:slug"
            element={<PositionDetail />}
          />

          <Route
            path="/history"
            element={<History />}
          />

          <Route
            path="/leadership"
            element={<Leadership />}
          />

          <Route
            path="/leadership/:slug"
            element={<LeadershipDetail />}
          />

          <Route
            path="/news"
            element={<News />}
          />

          <Route
            path="/news/:slug"
            element={<NewsDetail />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Unknown or removed addresses (e.g. old /documents links) go home */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Route>

      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}