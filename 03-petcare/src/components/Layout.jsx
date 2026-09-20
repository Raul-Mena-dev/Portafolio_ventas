import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  PawPrint,
  Menu,
  X,
  ArrowUpRight,
  CalendarDays,
  Heart,
  MapPin,
} from "lucide-react";
export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="PetCare+, inicio">
      <span>
        <PawPrint size={24} fill="currentColor" />
      </span>
      PetCare<b>+</b>
    </Link>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  return (
    <header className="header wrap">
      <Brand />
      <button
        className="menu-toggle"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-controls="navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="navigation"
        className={open ? "navigation open" : "navigation"}
        aria-label="Navegación principal"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
            document.querySelector(".menu-toggle").focus();
          }
        }}
      >
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/services">Servicios</NavLink>
        <NavLink to="/team">Nuestro equipo</NavLink>
        <NavLink className="pet-nav" to="/my-pet">
          <PawPrint size={15} />
          Mi mascota
        </NavLink>
        <NavLink className="button small" to="/appointments">
          <CalendarDays size={16} />
          Agendar cita
        </NavLink>
      </nav>
    </header>
  );
}
export function CTA() {
  return (
    <section className="wrap cta">
      <div>
        <span className="eyebrow">PARA QUIEN SIEMPRE ESTÁ A TU LADO</span>
        <h2>
          Su próxima visita,
          <br />
          un poquito más fácil.
        </h2>
        <p>Elige el servicio, conoce al equipo y encuentra su horario.</p>
        <Link className="button" to="/appointments">
          Agendar una cita <ArrowUpRight size={18} />
        </Link>
      </div>
      <div className="cta-paw" aria-hidden="true">
        <PawPrint />
        <Heart />
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Brand />
          <p>
            Cuidamos a quienes hacen
            <br />
            tu vida más bonita.
          </p>
          <span className="footer-heart">
            <Heart size={14} />
            Con cariño, en cada visita.
          </span>
        </div>
        <div>
          <h3>Conócenos</h3>
          <Link to="/services">Nuestros servicios</Link>
          <Link to="/team">Equipo veterinario</Link>
          <Link to="/appointments">Agendar una cita</Link>
          <Link to="/my-pet">Mi mascota</Link>
        </div>
        <div>
          <h3>Ven a visitarnos</h3>
          <p>
            <MapPin size={14} />
            Av. de los Sauces 126
            <br />
            Col. Jardín Serena, Guadalajara
            <br />
            <small>Dirección ficticia</small>
          </p>
          <p>hola@petcare.example</p>
        </div>
        <div>
          <h3>Siempre cerca</h3>
          <p>
            Lunes a viernes · 9:00 a 18:00
            <br />
            Sábados · 9:00 a 14:00
            <br />
            Domingos · Descanso
          </p>
          <span className="demo-badge">Clínica de demostración</span>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} PetCare+</span>
        <span>Proyecto demostrativo — Los datos mostrados son ficticios.</span>
        <span>Hecho para cuidar.</span>
      </div>
    </footer>
  );
}
