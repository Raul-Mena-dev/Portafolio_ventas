export default function ServiceVisual({position="tl",label}){return <div className={`service-visual sprite-${position}`} role="img" aria-label={label}><span>{label}</span></div>}
