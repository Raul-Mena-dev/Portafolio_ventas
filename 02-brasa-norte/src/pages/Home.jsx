import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowDown,
  Flame,
  Wheat,
  UtensilsCrossed,
} from "lucide-react";
import Picture from "../components/Picture";
import DishCard from "../components/DishCard";
import { ReservationCTA } from "../components/Layout";
import { featured } from "../data/menu";
export default function Home() {
  return (
    <>
      <section className="hero">
        <Picture
          name="hero"
          alt="Corte de res a la parrilla, dorado por fuera y rebanado sobre una tabla de madera"
          className="hero-background"
          eager
        />
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <span className="eyebrow">
            <span className="short-rule" /> COCINA HONESTA. FUEGO REAL.
          </span>
          <h1>
            FUEGO, SABOR
            <br />Y <span>BUENA MESA.</span>
          </h1>
          <p>
            El sabor de las brasas. El gusto de compartir.
            <br />
            Una mesa en el norte, un lugar para quedarse.
          </p>
          <div className="hero-actions">
            <Link className="button button-red" to="/menu">
              Explorar el menú <ArrowUpRight size={19} />
            </Link>
            <Link className="hero-reserve" to="/reservations">
              Reservar mesa <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-stamp">
          <Flame size={27} />
          <span>
            AL CARBÓN
            <br />
            SABE MEJOR
          </span>
          <small>DESDE 2018</small>
        </div>
        <div className="wrap hero-bottom">
          <span>MONTERREY, NUEVO LEÓN</span>
          <a href="#especialidades">
            EL ANTOJO EMPIEZA AQUÍ <ArrowDown size={15} />
          </a>
        </div>
      </section>
      <div className="flavor-strip" aria-label="Nuestra cocina">
        <span>FUEGO LENTO</span>
        <Flame />
        <span>INGREDIENTES DE ORIGEN</span>
        <Flame />
        <span>SOBREMESAS LARGAS</span>
        <Flame />
        <span>BUENA COMPAÑÍA</span>
      </div>
      <section className="wrap specialties section" id="especialidades">
        <div className="section-heading">
          <div>
            <span className="eyebrow red">DIRECTO DE NUESTRAS BRASAS</span>
            <h2>
              LOS QUE SIEMPRE
              <br />
              TE HACEN VOLVER.
            </h2>
          </div>
          <div>
            <p>
              Cortes en su punto. Recetas con carácter.
              <br />
              Estos son los favoritos de nuestra mesa.
            </p>
            <Link className="text-link" to="/menu">
              Conoce todo el menú <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="dish-grid">
          {featured.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} number={i + 1} />
          ))}
        </div>
        <p className="menu-fine-print">
          Precios ilustrativos en MXN · Fotografías de referencia · El antojo sí
          es real.
        </p>
      </section>
      <section className="manifesto">
        <div className="wrap manifesto-grid">
          <div className="manifesto-visual">
            <Picture
              name="grill"
              alt="Carne dorándose sobre una parrilla encendida"
            />
            <span className="image-label">SIN ATAJOS. SIN PRISAS.</span>
          </div>
          <div className="manifesto-copy">
            <span className="eyebrow">
              NUESTRO INGREDIENTE SECRETO ES EL TIEMPO
            </span>
            <h2>
              NO SOLO
              <br />
              COCINAMOS.
              <br />
              <span>
                AVIVAMOS
                <br />
                TRADICIONES.
              </span>
            </h2>
            <p>
              Todo empezó con una parrilla, un patio y la costumbre de reunir a
              los nuestros. Hoy, esa misma idea sigue encendida en cada plato.
            </p>
            <p>
              Creemos en el carbón de verdad, los ingredientes de cerca y las
              recetas que no necesitan disfraz. Lo demás sucede alrededor de la
              mesa.
            </p>
            <div className="chef-signature">
              <span>Julián Aranda</span>
              <small>CHEF & FUNDADOR · PERSONAJE FICTICIO</small>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap values">
        <div>
          <Flame />
          <h3>FUEGO CON OFICIO</h3>
          <p>
            Dominamos la brasa para que cada corte llegue en su mejor punto.
          </p>
        </div>
        <div>
          <Wheat />
          <h3>ORIGEN QUE IMPORTA</h3>
          <p>Ingredientes de temporada y recetas que respetan lo que somos.</p>
        </div>
        <div>
          <UtensilsCrossed />
          <h3>MESA PARA TODOS</h3>
          <p>Para celebrar algo grande o simplemente un martes bien comido.</p>
        </div>
      </section>
      <section className="atmosphere wrap section">
        <div className="atmosphere-heading">
          <span className="eyebrow red">QUÉDATE UN RATO MÁS</span>
          <h2>
            AQUÍ LA SOBREMESA
            <br />
            TAMBIÉN SE DISFRUTA.
          </h2>
          <p>
            Madera, luz cálida y el aroma de la leña.
            <br />
            Un espacio para bajar el ritmo y subir las copas.
          </p>
          <Link className="text-link" to="/contact">
            Conoce dónde estamos <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="atmosphere-photo">
          <Picture
            name="restaurant"
            alt="Comedor de restaurante con mesas de madera y una atmósfera acogedora"
          />
          <span>LA MEJOR MESA ES LA QUE COMPARTES.</span>
        </div>
      </section>
      <section className="quote-section wrap">
        <span className="quote-mark">“</span>
        <blockquote>
          Hay lugares a los que vas a comer.
          <br />Y lugares a los que quieres volver.
        </blockquote>
        <p>Eso es lo que queremos ser para ti.</p>
        <span className="eyebrow">LA FILOSOFÍA DE BRASA NORTE</span>
      </section>
      <ReservationCTA />
    </>
  );
}
