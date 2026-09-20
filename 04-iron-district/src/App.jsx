import { useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Membership from "./pages/Membership";
export default function App() {
  const location = useLocation();
  useEffect(() => {
    document.title = `${{ "/": "No excuses. Just progress.", "/classes": "Clases", "/membership": "Planes y objetivo" }[location.pathname] || "Página no encontrada"} — Iron District`;
    if (location.hash)
      requestAnimationFrame(() =>
        document.getElementById(location.hash.slice(1))?.scrollIntoView(),
      );
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/membership" element={<Membership />} />
          <Route
            path="*"
            element={
              <section className="wrap not-found">
                <span className="kicker">ERROR 404 · REPETICIÓN FALLIDA</span>
                <h1>
                  ESTA RUTA
                  <br />
                  <em>NO CUENTA.</em>
                </h1>
                <Link className="acid-button" to="/">
                  VOLVER AL INICIO
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
