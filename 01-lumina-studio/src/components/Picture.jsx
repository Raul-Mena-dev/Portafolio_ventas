import { useState } from "react";
export default function Picture({ name, alt, className = "", eager = false }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={`image-fallback ${className}`} role="img" aria-label={alt}>
      <span>
        LÚMINA
        <br />
        <small>Arquitectura e interiores</small>
      </span>
    </div>
  ) : (
    <img
      className={className}
      src={`/images/${name}.jpg`}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
