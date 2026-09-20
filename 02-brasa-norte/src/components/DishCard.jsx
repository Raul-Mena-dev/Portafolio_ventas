import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Picture from "./Picture";
import { money } from "../data/menu";
export default function DishCard({ dish, number }) {
  return (
    <Link
      to={`/menu?categoria=${encodeURIComponent(dish.category)}#${dish.id}`}
      className="dish-card"
    >
      <div className="dish-photo">
        <Picture name={dish.image} alt={dish.name} />
        <span className="dish-index">0{number}</span>
        <span className="dish-arrow">
          <ArrowUpRight size={21} />
        </span>
      </div>
      <div className="dish-card-heading">
        <h3>{dish.name}</h3>
        <span>{money(dish.price)}</span>
      </div>
      <p>{dish.description}</p>
    </Link>
  );
}
