import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Position from "./pages/Position";
import History from "./pages/History";
import Leadership from "./pages/Leadership";
import News from "./pages/News";
import Documents from "./pages/Documents";
import HumanRights from "./pages/HumanRights";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import PositionDetail from "./pages/PositionDetails";
import LeadershipDetail from "./pages/LeadershipDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route index element={<Home />} />

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
            path="/documents"
            element={<Documents />}
          />

          <Route
            path="/human-rights"
            element={<HumanRights />}
          />

          <Route
            path="/media"
            element={<Media />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}