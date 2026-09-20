import { useCounter } from "../hooks/useCounter";
export default function Metric({ value, suffix, label }) {
  const { ref, value: count } = useCounter(value);
  return (
    <div ref={ref} className="metric">
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}
