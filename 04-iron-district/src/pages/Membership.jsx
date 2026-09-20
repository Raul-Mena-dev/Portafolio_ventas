import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Target,
  Dumbbell,
  Activity,
  Zap,
  Check,
  ArrowUpRight,
} from "lucide-react";
import PlanCard from "../components/PlanCard";
import JoinModal from "../components/JoinModal";
import { plans, recommendations } from "../data/gym";
const goalIcons = {
  "Perder grasa": Activity,
  "Ganar músculo": Dumbbell,
  "Mejorar condición": Zap,
  Fuerza: Target,
};
const levels = [
  "Estoy empezando",
  "Entreno ocasionalmente",
  "Entreno con constancia",
];
const frequencies = ["2 días", "3–4 días", "5+ días"];
const priorities = [
  "Clases y comunidad",
  "Programa y seguimiento",
  "Máximo acompañamiento",
];
export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [answers, setAnswers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("iron-district-quiz-v1")) || {};
    } catch {
      return {};
    }
  });
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    if (location.hash === "#quiz")
      requestAnimationFrame(() =>
        document.getElementById("quiz")?.scrollIntoView(),
      );
  }, []);
  function choose(key, value) {
    const next = { ...answers, [key]: value };
    setAnswers(next);
    setError("");
    try {
      localStorage.setItem("iron-district-quiz-v1", JSON.stringify(next));
    } catch {}
  }
  function next() {
    const keys = ["goal", "level", "frequency", "priority"];
    const key = keys[step];
    if (!answers[key]) {
      setError("Elige una opción para continuar.");
      return;
    }
    if (step < 3) setStep(step + 1);
    else {
      let planId = recommendations[answers.goal].planId;
      if (
        answers.priority === "Máximo acompañamiento" ||
        (answers.frequency === "5+ días" && answers.goal === "Ganar músculo")
      )
        planId = "unlimited";
      if (
        answers.frequency === "2 días" &&
        answers.level === "Estoy empezando" &&
        answers.priority === "Clases y comunidad"
      )
        planId = "basic";
      setResult({ ...recommendations[answers.goal], planId });
    }
  }
  function reset() {
    setAnswers({});
    setStep(0);
    setResult(null);
    setError("");
    localStorage.removeItem("iron-district-quiz-v1");
  }
  const questions = [
    [
      "¿CUÁL ES TU OBJETIVO?",
      "No hay una respuesta correcta. Solo la que importa para ti.",
      "goal",
      Object.keys(recommendations),
    ],
    [
      "¿DÓNDE ESTÁS HOY?",
      "La intensidad se adapta. La honestidad acelera el progreso.",
      "level",
      levels,
    ],
    [
      "¿CUÁNTO PUEDES ENTRENAR?",
      "El mejor plan es el que cabe en tu semana.",
      "frequency",
      frequencies,
    ],
    [
      "¿QUÉ VALORAS MÁS?",
      "Esto afina la recomendación según el tipo de apoyo que buscas.",
      "priority",
      priorities,
    ],
  ];
  const [q, desc, key, options] = questions[step];
  const recommended = result && plans.find((p) => p.id === result.planId);
  return (
    <>
      <section className="membership-heading wrap">
        <span className="kicker">MEMBRESÍAS SIN LETRA PEQUEÑA</span>
        <h1>
          ELIGE TU NIVEL.
          <br />
          <em>HAZLO TUYO.</em>
        </h1>
        <p>
          Sin contratos productivos ni cobros. Todos los planes y precios son
          parte de esta demostración.
        </p>
      </section>
      <section className="wrap plans-grid membership-plans">
        {plans.map((p) => (
          <PlanCard key={p.id} plan={p} onChoose={setSelectedPlan} />
        ))}
      </section>
      <section className="comparison wrap">
        <span className="kicker">QUÉ INCLUYE CADA PLAN</span>
        <div className="comparison-table">
          <div>
            <strong>BENEFICIO</strong>
            <strong>BASIC</strong>
            <strong>PERFORMANCE</strong>
            <strong>UNLIMITED</strong>
          </div>
          {[
            ["Acceso fin de semana", false, true, true],
            ["Clases ilimitadas", false, true, true],
            ["Programa individual", false, true, true],
            ["Sesiones semi privadas", false, false, true],
            ["Recovery Zone", false, false, true],
          ].map((row) => (
            <div key={row[0]}>
              <span>{row[0]}</span>
              {row.slice(1).map((value, i) => (
                <span key={i}>
                  {value ? <Check aria-label="Incluido" /> : "—"}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="quiz-section" id="quiz">
        <div className="wrap quiz-grid">
          <div className="quiz-intro">
            <span className="section-number">01</span>
            <span className="kicker">PLAN FINDER · LÓGICA LOCAL</span>
            <h2>
              ENTRENA PARA
              <br />
              LO QUE <em>IMPORTA.</em>
            </h2>
            <p>
              Responde cuatro preguntas y recibe una recomendación basada en
              reglas locales. No usamos IA, no enviamos información y puedes
              restablecerla cuando quieras.
            </p>
            <div className="quiz-progress">
              <span style={{ width: `${result ? 100 : (step + 1) * 25}%` }} />
              <small>
                {result ? "RESULTADO" : `PREGUNTA ${step + 1} DE 4`}
              </small>
            </div>
          </div>
          <div className="quiz-card">
            {result ? (
              <div className="quiz-result">
                <span className="result-label">TU PLAN RECOMENDADO</span>
                <h3>{recommended.name}</h3>
                <p>{result.reason}</p>
                <div className="recommended-programs">
                  <span>EMPIEZA CON</span>
                  {result.programs.map((name) => (
                    <strong key={name}>{name}</strong>
                  ))}
                </div>
                <button
                  className="acid-button"
                  onClick={() => setSelectedPlan(recommended)}
                >
                  ELEGIR {recommended.name.toUpperCase()}
                  <ArrowUpRight />
                </button>
                <button className="reset-quiz" onClick={reset}>
                  <RotateCcw />
                  REINICIAR CUESTIONARIO
                </button>
              </div>
            ) : (
              <>
                <span className="question-count">0{step + 1}</span>
                <h3>{q}</h3>
                <p>{desc}</p>
                <div className="answer-grid">
                  {options.map((option) => {
                    const Icon = key === "goal" ? goalIcons[option] : null;
                    return (
                      <button
                        key={option}
                        className={answers[key] === option ? "selected" : ""}
                        aria-pressed={answers[key] === option}
                        onClick={() => choose(key, option)}
                      >
                        {Icon && <Icon />}
                        <span>{option}</span>
                        {answers[key] === option && <Check />}
                      </button>
                    );
                  })}
                </div>
                {error && (
                  <p className="quiz-error" role="alert">
                    {error}
                  </p>
                )}
                <div className="quiz-actions">
                  {step > 0 ? (
                    <button
                      onClick={() => {
                        setStep(step - 1);
                        setError("");
                      }}
                    >
                      <ArrowLeft />
                      ATRÁS
                    </button>
                  ) : (
                    <span />
                  )}
                  <button className="acid-button" onClick={next}>
                    {step === 3 ? "VER MI PLAN" : "SIGUIENTE"}
                    <ArrowRight />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <section className="faq wrap section">
        <div>
          <span className="section-number">02</span>
          <span className="kicker">SIN RODEOS</span>
          <h2>
            PREGUNTAS
            <br />
            <em>FRECUENTES.</em>
          </h2>
        </div>
        <div>
          {[
            [
              "¿Puedo probar antes de elegir?",
              "En una operación real podrías solicitar una visita. En esta demo puedes explorar las clases, responder el cuestionario y simular la elección de cualquier plan.",
            ],
            [
              "¿Se realiza algún cobro?",
              "No. Los precios son ficticios y ningún botón conecta con pagos, contratos o servicios externos.",
            ],
            [
              "¿El cuestionario usa IA?",
              "No. La recomendación se calcula con reglas locales según el objetivo, nivel, frecuencia y tipo de apoyo seleccionado.",
            ],
            [
              "¿Se guardan mis respuestas?",
              "Solo en localStorage de este navegador para que puedas continuar. Al reiniciar el cuestionario se eliminan.",
            ],
          ].map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      {selectedPlan && (
        <JoinModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
      )}
    </>
  );
}
