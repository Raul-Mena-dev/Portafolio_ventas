import { useState } from "react";
import { PawPrint } from "lucide-react";
export default function Picture({ name, alt, className = "", eager = false }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div
      className={`picture-fallback ${className}`}
      role="img"
      aria-label={alt}
    >
      <PawPrint />
      <span>Un cuidado con cariño</span>
    </div>
  ) : (
    <img
      src={`/images/${name}.jpg`}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
