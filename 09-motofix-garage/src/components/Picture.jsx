import{useState}from"react";
export default function Picture({src,alt,className=""}){const[failed,setFailed]=useState(false);return failed?<div className={`image-fallback ${className}`} role="img" aria-label={alt}><span>MF</span><small>Imagen no disponible</small></div>:<img className={className} src={src} alt={alt} onError={()=>setFailed(true)}/>}
