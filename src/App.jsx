import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import Sponsors from "./pages/Sponsors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout wraps all these routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> {/* 'index' means the default path / */}
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="publications" element={<Publications />} />
          <Route path="sponsors" element={<Sponsors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;