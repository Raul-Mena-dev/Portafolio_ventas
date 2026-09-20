import { Check, ArrowUpRight } from "lucide-react";
import { currency } from "../data/gym";
export default function PlanCard({ plan, onChoose }) {
  return (
    <article className={`plan-card ${plan.featured ? "featured" : ""}`}>
      <span className="plan-tag">{plan.tag}</span>
      <h3>{plan.name}</h3>
      <p>{plan.description}</p>
      <div className="plan-price">
        <strong>{currency(plan.price)}</strong>
        <span>MXN / mes</span>
      </div>
      <ul>
        {plan.features.map((item) => (
          <li key={item}>
            <Check size={15} />
            {item}
          </li>
        ))}
      </ul>
      <button className="plan-button" onClick={() => onChoose(plan)}>
        {plan.cta}
        <ArrowUpRight size={17} />
      </button>
    </article>
  );
}
