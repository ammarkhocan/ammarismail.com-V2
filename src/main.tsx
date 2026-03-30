import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./routes/about.tsx";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./components/layout/navbar.tsx";
import { Footer } from "./components/layout/footer.tsx";
import Project from "./routes/projects.tsx";
import Contact from "./routes/contact.tsx";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </HelmetProvider>,
);
