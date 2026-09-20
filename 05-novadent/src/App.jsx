import { useEffect } from "react";
import { Link,Navigate,Route,Routes,useLocation } from "react-router-dom";
import PublicLayout from "./components/PublicLayout";
import AdminLayout from "./components/AdminLayout";
import Home from "./pages/Home";
import Treatments from "./pages/Treatments";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import AppointmentsAdmin from "./pages/admin/AppointmentsAdmin";
import Patients from "./pages/admin/Patients";
import Directory from "./pages/admin/Directory";
import Settings from "./pages/admin/Settings";
function Protected(){return localStorage.getItem("novadent_admin_session")==="demo"?<AdminLayout/>:<Navigate to="/admin/login" replace/>}
function NotFound(){return <main className="not-found"><span>404</span><h1>Esta página no está en agenda.</h1><p>La ruta que buscas no existe en esta demostración.</p><Link className="primary-button" to="/">Volver al inicio</Link></main>}
export default function App(){const location=useLocation();useEffect(()=>{const names={"/":"Odontología humana y precisa","/treatments":"Tratamientos","/doctors":"Especialistas","/appointments":"Agenda una cita","/admin/login":"Acceso administrativo","/admin":"Dashboard","/admin/appointments":"Gestión de citas","/admin/patients":"Pacientes","/admin/treatments":"Tratamientos","/admin/doctors":"Doctores","/admin/settings":"Configuración"};document.title=`${names[location.pathname]||"Página no encontrada"} — NovaDent`;if(!location.hash)window.scrollTo({top:0,behavior:"instant"})},[location]);return <Routes><Route element={<PublicLayout/>}><Route path="/" element={<Home/>}/><Route path="/treatments" element={<Treatments/>}/><Route path="/doctors" element={<Doctors/>}/><Route path="/appointments" element={<Appointments/>}/></Route><Route path="/admin/login" element={<Login/>}/><Route path="/admin" element={<Protected/>}><Route index element={<Dashboard/>}/><Route path="appointments" element={<AppointmentsAdmin/>}/><Route path="patients" element={<Patients/>}/><Route path="treatments" element={<Directory type="treatments"/>}/><Route path="doctors" element={<Directory type="doctors"/>}/><Route path="settings" element={<Settings/>}/></Route><Route path="*" element={<NotFound/>}/></Routes>}
