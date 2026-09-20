import { useEffect,useState } from "react";
import { Link,NavLink,Outlet,useLocation } from "react-router-dom";
import { ArrowRight, Clock3, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import Brand from "./Brand";
export default function PublicLayout(){
  const [open,setOpen]=useState(false); const location=useLocation();
  useEffect(()=>setOpen(false),[location]);
  return <>
    <a className="skip-link" href="#main">Saltar al contenido</a>
    <div className="topbar"><span><Phone/> 81 8080 2424</span><span><Clock3/> Lun–Vie 8:00–20:00 · Sáb 9:00–14:00</span><Link to="/admin/login">Acceso administrativo</Link></div>
    <header className="public-header"><Brand/><button className="menu-button" onClick={()=>setOpen(!open)} aria-label={open?"Cerrar menú":"Abrir menú"} aria-expanded={open}>{open?<X/>:<Menu/>}</button><nav className={open?"public-nav open":"public-nav"} aria-label="Navegación principal"><NavLink to="/" end>Inicio</NavLink><NavLink to="/treatments">Tratamientos</NavLink><NavLink to="/doctors">Especialistas</NavLink><NavLink className="nav-appointment" to="/appointments">Agenda una cita <ArrowRight/></NavLink></nav></header>
    <main id="main"><Outlet/></main>
    <footer className="public-footer"><div className="shell footer-grid"><div><Brand/><p>Atención dental integral con diagnósticos claros, tecnología precisa y trato humano.</p></div><div><h3>Clínica</h3><Link to="/treatments">Tratamientos</Link><Link to="/doctors">Especialistas</Link><Link to="/appointments">Citas</Link></div><div><h3>Visítanos</h3><p><MapPin/>Av. del Cobalto 218<br/>Col. Valle Azul, Monterrey<br/><small>Dirección ficticia</small></p><p><Mail/>hola@novadent.demo</p></div><div className="footer-call"><span>¿Necesitas una valoración?</span><strong>81 8080 2424</strong><Link to="/appointments">Reservar ahora <ArrowRight/></Link></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} NovaDent</span><span>Proyecto demostrativo — Los datos mostrados son ficticios.</span></div></footer>
  </>;
}
