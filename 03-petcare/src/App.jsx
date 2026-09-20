import { useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import { ClinicProvider } from "./hooks/useClinic";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Appointments from "./pages/Appointments";
import MyPet from "./pages/MyPet";
export default function App() {
  const location = useLocation();
  useEffect(() => {
    document.title = `${{ "/": "Un cuidado con cariño", "/services": "Nuestros servicios", "/team": "Nuestro equipo", "/appointments": "Agendar cita", "/my-pet": "Mi mascota" }[location.pathname] || "Página no encontrada"} — PetCare+`;
    if (location.hash)
      requestAnimationFrame(() =>
        document.getElementById(location.hash.slice(1))?.scrollIntoView(),
      );
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);
  return (
    <ClinicProvider>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/my-pet" element={<MyPet />} />
          <Route
            path="*"
            element={
              <section className="wrap not-found">
                <span className="eyebrow">
                  404 · UNA HUELLA FUERA DEL CAMINO
                </span>
                <h1>
                  Parece que nos
                  <br />
                  desviamos un poquito.
                </h1>
                <Link to="/" className="button">
                  Volver a casa
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </ClinicProvider>
  );
}
