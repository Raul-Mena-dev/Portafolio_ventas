import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import { projects } from "./data/projects";
export function NotFound() {
  return (
    <section className="wrap not-found">
      <span className="eyebrow">404 — UN ESPACIO POR ENCONTRAR</span>
      <h1>
        Este camino no lleva
        <br />a ningún proyecto.
      </h1>
      <Link className="button" to="/projects">
        Explorar proyectos ↗
      </Link>
    </section>
  );
}
export default function App() {
  const location = useLocation();
  useEffect(() => {
    const project = projects.find(
      (p) => location.pathname === `/projects/${p.id}`,
    );
    document.title = `${project?.name || { "/": "Arquitectura e interiores", "/projects": "Proyectos", "/contact": "Hablemos" }[location.pathname] || "Página no encontrada"} — Lúmina Studio`;
    if (location.hash)
      requestAnimationFrame(() =>
        document
          .getElementById(location.hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main
        id="main"
        tabIndex={-1}
        key={location.pathname}
        className="page-enter"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
