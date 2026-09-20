import {ArrowUpRight, Mail, Phone} from 'lucide-react';

export default function ContactLinks() {
  return <div className="ms-contact-links" aria-label="Contacto directo y servicios de impresión 3D">
    <a href="tel:+523334681329"><Phone size={16}/><span>33 3468 1329</span></a>
    <a href="mailto:raulmenadev@gmail.com"><Mail size={16}/><span>raulmenadev@gmail.com</span></a>
    <a href="https://impresion3d.mechastationlab.com/" target="_blank" rel="noopener noreferrer" aria-label="Impresión 3D — abre en una nueva pestaña"><ArrowUpRight size={16}/><span>Conoce nuestros servicios de impresión 3D</span></a>
  </div>;
}
