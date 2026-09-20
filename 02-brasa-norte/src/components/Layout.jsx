import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Flame, Menu, X, ArrowUpRight, MapPin, Clock } from "lucide-react";
import { restaurant } from "../data/restaurant";
export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Brasa Norte, inicio">
      <Flame strokeWidth={1.5} />
      <span>
        BRASA NORTE<small>PARRILLA & BUENA MESA</small>
      </span>
    </Link>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  return (
    <>
      <div className="topbar">
        LEÑA, TIEMPO Y BUENOS INGREDIENTES.
        <span>MONTERREY, N.L. · EST. 2018</span>
      </div>
      <header className="header">
        <Brand />
        <button
          className="menu-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-nav"
          aria-label="Navegación principal"
          className={open ? "navigation is-open" : "navigation"}
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
          <NavLink to="/menu">El menú</NavLink>
          <NavLink to="/contact">Visítanos</NavLink>
          <NavLink to="/reservations" className="button button-red">
            Reservar mesa <ArrowUpRight size={17} />
          </NavLink>
        </nav>
      </header>
    </>
  );
}
export function ReservationCTA() {
  return (
    <section className="reservation-cta">
      <div className="wrap">
        <span className="eyebrow">
          LAS MEJORES HISTORIAS EMPIEZAN EN LA MESA
        </span>
        <h2>
          EL FUEGO ESTÁ LISTO.
          <br />
          SOLO FALTAS TÚ.
        </h2>
        <Link className="button button-cream" to="/reservations">
          Reserva tu mesa <ArrowUpRight size={18} />
        </Link>
        <p>Buena comida. Buena compañía. Sin prisa.</p>
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
            El norte en el origen.
            <br />
            El fuego en el corazón.
          </p>
        </div>
        <div>
          <h3>VEN CON HAMBRE</h3>
          <p>
            <MapPin size={14} />
            {restaurant.address}
            <br />
            {restaurant.city}
            <br />
            <small>Dirección ficticia</small>
          </p>
          <Link to="/contact">
            Conoce el espacio <ArrowUpRight size={14} />
          </Link>
        </div>
        <div>
          <h3>PRENDEMOS EL FUEGO</h3>
          <p>
            <Clock size={14} />
            Mar – Jue · 13:00 a 22:00
            <br />
            Vie – Sáb · 13:00 a 23:00
            <br />
            Dom · 13:00 a 20:00
          </p>
          <span className="closed-note">Lunes descansamos.</span>
        </div>
        <div>
          <h3>SIEMPRE HAY LUGAR</h3>
          <Link to="/menu">Explora el menú</Link>
          <Link to="/reservations">Reserva una mesa</Link>
          <Link to="/contact">Hablemos</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Brasa Norte.</span>
        <span>Proyecto demostrativo — Los datos mostrados son ficticios.</span>
        <span>HECHO A FUEGO LENTO.</span>
      </div>
    </footer>
  );
}
