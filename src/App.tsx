import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Now } from "./pages/Now";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          {/* <Route path="blog" element={<Blog />} /> */}
          <Route path="resume" element={<Resume />} />
          {/* <Route path="uses" element={<Uses />} /> */}
          <Route path="now" element={<Now />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
