import { useState } from "react";
export default function Picture({src,alt,className=""}) {
  const [failed,setFailed]=useState(false);
  if(failed) return <div className={`picture-fallback ${className}`} role="img" aria-label={alt}><span>ND</span></div>;
  return <img className={className} src={src} alt={alt} onError={()=>setFailed(true)}/>;
}
