import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);
  return (
    <header className="header">
      <Link className="wordmark" to="/" aria-label="Lúmina Studio, inicio">
        LÚMINA<span>STUDIO</span>
      </Link>
      <button
        className="menu-toggle"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="navigation"
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
        <NavLink to="/projects">Proyectos</NavLink>
        <Link to="/#estudio">El estudio</Link>
        <NavLink to="/contact" className="nav-contact">
          Hablemos <ArrowUpRight size={15} />
        </NavLink>
      </nav>
    </header>
  );
}
export function ContactCTA() {
  return (
    <section className="contact-cta wrap">
      <span className="eyebrow">EL SIGUIENTE ESPACIO PODRÍA SER EL TUYO</span>
      <Link to="/contact">
        Demos forma a tu idea.
        <ArrowUpRight strokeWidth={1} />
      </Link>
      <p>Todo gran proyecto comienza con una conversación.</p>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer wrap">
      <div className="footer-top">
        <Link to="/" className="wordmark">
          LÚMINA<span>STUDIO</span>
        </Link>
        <p>
          Arquitectura con intención.
          <br />
          Espacios con identidad.
        </p>
        <div>
          <Link to="/projects">Nuestros proyectos ↗</Link>
          <Link to="/contact">Iniciar una conversación ↗</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Lúmina Studio</span>
        <span>Proyecto demostrativo — Todos los datos son ficticios.</span>
        <span>Hecho para habitar.</span>
      </div>
    </footer>
  );
}
