import { useEffect,useState } from "react";
import { NavLink,Outlet,useLocation,useNavigate } from "react-router-dom";
import { CalendarDays,ChevronLeft,LayoutDashboard,LogOut,Menu,Settings,Stethoscope,UserRound,UsersRound,X } from "lucide-react";
import Brand from "./Brand";
const links=[
  ["/admin",LayoutDashboard,"Dashboard",true],["/admin/appointments",CalendarDays,"Citas"],["/admin/patients",UsersRound,"Pacientes"],["/admin/treatments",Stethoscope,"Tratamientos"],["/admin/doctors",UserRound,"Doctores"],["/admin/settings",Settings,"Configuración"]
];
export default function AdminLayout(){const [open,setOpen]=useState(false);const location=useLocation();const navigate=useNavigate();useEffect(()=>setOpen(false),[location]);const logout=()=>{localStorage.removeItem("novadent_admin_session");navigate("/admin/login")};return <div className="admin-shell"><button className="admin-mobile-menu" onClick={()=>setOpen(!open)} aria-label={open?"Cerrar menú":"Abrir menú"}>{open?<X/>:<Menu/>}</button><aside className={open?"admin-sidebar open":"admin-sidebar"}><Brand compact/><div className="admin-profile"><span>AV</span><div><strong>Ana Villarreal</strong><small>Administradora</small></div></div><nav aria-label="Administración">{links.map(([to,Icon,label,end])=><NavLink key={to} to={to} end={end}><Icon/>{label}</NavLink>)}</nav><div className="sidebar-bottom"><NavLink to="/"><ChevronLeft/> Ver sitio público</NavLink><button onClick={logout}><LogOut/> Cerrar sesión</button><small>PROYECTO DEMOSTRATIVO</small></div></aside><div className="admin-main"><Outlet/></div></div>}
