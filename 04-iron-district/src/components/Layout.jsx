import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  Instagram,
  Youtube,
  MapPin,
} from "lucide-react";
export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Iron District, inicio">
      <span>IRON</span>
      <b>DISTRICT</b>
      <small>STRENGTH & CONDITIONING</small>
    </Link>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  return (
    <header className="header">
      <Brand />
      <button
        className="menu-toggle"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="nav"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="nav"
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
        <NavLink to="/classes">Clases</NavLink>
        <NavLink to="/membership">Planes</NavLink>
        <Link to="/#coaches">Entrenadores</Link>
        <NavLink className="join-link" to="/membership">
          Únete ahora
          <ArrowUpRight size={17} />
        </NavLink>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-watermark" aria-hidden="true">
        NO EXCUSES
      </div>
      <div className="wrap footer-grid">
        <div>
          <Brand />
          <p>
            Fuerza. Disciplina. Comunidad.
            <br />
            El progreso se construye aquí.
          </p>
        </div>
        <div>
          <h3>ENTRENA</h3>
          <Link to="/classes">Clases</Link>
          <Link to="/membership">Planes</Link>
          <Link to="/#coaches">Entrenadores</Link>
        </div>
        <div>
          <h3>ENCUÉNTRANOS</h3>
          <p>
            <MapPin size={14} />
            Av. Fundidora 404
            <br />
            Distrito Industrial, Monterrey
            <br />
            <small>Dirección ficticia</small>
          </p>
          <p>
            Lun – Vie · 05:30 a 23:00
            <br />
            Sáb – Dom · 07:00 a 18:00
          </p>
        </div>
        <div>
          <h3>SIGUE EL MOVIMIENTO</h3>
          <span className="socials" aria-label="Redes sociales de demostración">
            <span title="Instagram"><Instagram aria-hidden="true" /></span>
            <span title="YouTube"><Youtube aria-hidden="true" /></span>
          </span>
          <p className="demo-label">PROYECTO DEMOSTRATIVO</p>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Iron District</span>
        <span>Los datos y perfiles mostrados son ficticios.</span>
        <span>BUILT, NOT GIVEN.</span>
      </div>
    </footer>
  );
}
