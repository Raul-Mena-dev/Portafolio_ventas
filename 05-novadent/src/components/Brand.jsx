import { Link } from "react-router-dom";
export default function Brand({ compact=false }) {
  return <Link className={`brand ${compact?"brand-compact":""}`} to="/" aria-label="NovaDent, inicio"><span className="brand-mark" aria-hidden="true"><i/><i/></span><span><b>nova</b>dent<small>CLÍNICA DENTAL</small></span></Link>;
}
