import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";
export default function App() {
  const location = useLocation();
  useEffect(() => {
    document.title = `${{ "/": "Fuego, sabor y buena mesa", "/menu": "El menú", "/reservations": "Reserva tu mesa", "/contact": "Visítanos" }[location.pathname] || "Página no encontrada"} — Brasa Norte`;
    if (!location.hash) window.scrollTo({ top: 0, behavior: "instant" });
    else
      requestAnimationFrame(() =>
        document
          .getElementById(decodeURIComponent(location.hash.slice(1)))
          ?.scrollIntoView(),
      );
  }, [location.pathname, location.hash]);
  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="wrap not-found">
                <span className="eyebrow">404 · AQUÍ NO HAY BRASAS</span>
                <h1>
                  ESTE PLATILLO
                  <br />
                  NO ESTÁ EN EL MENÚ.
                </h1>
                <Link to="/" className="button button-red">
                  Volver al inicio ↗
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
