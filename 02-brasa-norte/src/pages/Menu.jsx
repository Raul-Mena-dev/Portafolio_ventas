import { useSearchParams, Link } from "react-router-dom";
import { Flame, ArrowUpRight, Leaf } from "lucide-react";
import { categories, dishes, money } from "../data/menu";
import Picture from "../components/Picture";
import { ReservationCTA } from "../components/Layout";
export default function Menu() {
  const [params, setParams] = useSearchParams();
  const category = categories.includes(params.get("categoria"))
    ? params.get("categoria")
    : "Entradas";
  const items = dishes.filter((d) => d.category === category);
  return (
    <>
      <section className="menu-heading wrap">
        <div>
          <span className="eyebrow red">
            HECHO AL MOMENTO. HECHO CON CARÁCTER.
          </span>
          <h1>
            EL ANTOJO
            <br />
            TIENE <span>MENÚ.</span>
          </h1>
          <p>
            De la primera entrada al último bocado.
            <br />
            Encuentra tu favorito y hazle espacio a uno nuevo.
          </p>
        </div>
        <div className="menu-seal">
          <Flame size={32} />
          <strong>
            BUEN FUEGO.
            <br />
            BUENA COMIDA.
          </strong>
          <span>COCINA DE ORIGEN</span>
        </div>
      </section>
      <section className="menu-catalog wrap">
        <div className="category-bar" aria-label="Categorías del menú">
          {categories.map((c) => (
            <button
              key={c}
              className={c === category ? "selected" : ""}
              aria-pressed={c === category}
              onClick={() =>
                setParams({ categoria: c }, { preventScrollReset: true })
              }
            >
              {c}
              <span>{dishes.filter((d) => d.category === c).length}</span>
            </button>
          ))}
        </div>
        <div className="menu-content">
          <div className="menu-list">
            <div className="menu-category-heading">
              <h2>{category.toUpperCase()}</h2>
              <span aria-live="polite">{items.length} opciones · MXN</span>
            </div>
            {items.map((d) => (
              <article className="menu-item" key={d.id} id={d.id}>
                <div className="menu-item-heading">
                  <h3>{d.name}</h3>
                  <span>{money(d.price)}</span>
                </div>
                <p>{d.description}</p>
                {d.tag && (
                  <span
                    className={`dish-tag ${d.tag === "Vegetariano" ? "vegetarian" : ""}`}
                  >
                    {d.tag === "Vegetariano" ? (
                      <Leaf size={12} />
                    ) : (
                      <Flame size={12} />
                    )}{" "}
                    {d.tag}
                  </span>
                )}
              </article>
            ))}
            <p className="allergy-note">
              ¿Alguna alergia o restricción? En una visita real, consulta los
              ingredientes con el personal. Los platillos y precios de esta demo
              son ilustrativos.
            </p>
          </div>
          <aside className="menu-feature">
            <Picture
              name={
                category === "Postres"
                  ? "dessert"
                  : category === "Bebidas"
                    ? "drinks"
                    : category === "Hamburguesas"
                      ? "burger"
                      : "steak"
              }
              alt={
                category === "Postres"
                  ? "Postre de chocolate"
                  : category === "Bebidas"
                    ? "Bebida preparada"
                    : category === "Hamburguesas"
                      ? "Hamburguesa con queso"
                      : "Corte de res servido a la parrilla"
              }
              eager
            />
            <div>
              <span className="eyebrow">EL PLAN YA ESTÁ HECHO</span>
              <h3>
                TÚ PON LA COMPAÑÍA.
                <br />
                NOSOTROS, EL FUEGO.
              </h3>
              <Link className="text-link" to="/reservations">
                Reserva una mesa <ArrowUpRight size={17} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <ReservationCTA />
    </>
  );
}
