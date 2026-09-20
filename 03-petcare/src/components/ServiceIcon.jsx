import {
  Stethoscope,
  Syringe,
  Scissors,
  HeartPulse,
  Microscope,
  Sparkles,
} from "lucide-react";
const icons = {
  Stethoscope,
  Syringe,
  Scissors,
  HeartPulse,
  Microscope,
  Sparkles,
};
export default function ServiceIcon({ service }) {
  const Icon = icons[service.icon];
  return (
    <span className={`service-icon ${service.color}`}>
      <Icon size={26} strokeWidth={1.7} />
    </span>
  );
}
