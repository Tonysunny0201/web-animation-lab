
import { motion } from "motion/react";
import "./transform-basics.css";

const experiments = [
  {
    id: 1,
    title: "Lift",
    description: "Move upward",
    hover: { y: -12 },
  },
  {
    id: 2,
    title: "Scale",
    description: "Grow smoothly",
    hover: { scale: 1.08 },
  },
  {
    id: 3,
    title: "Rotate",
    description: "Tilt slightly",
    hover: { rotate: 6 },
  },
  {
    id: 4,
    title: "Slide",
    description: "Move sideways",
    hover: { x: 12 },
  },
  {
    id: 5,
    title: "Combined",
    description: "Lift, grow and rotate",
    hover: { y: -8, scale: 1.06, rotate: 2 },
  },
];

export default function TransformBasics() {
  return (
    <main className="transform-lab">
      <header className="transform-lab__header">
        <p className="transform-lab__eyebrow">
          WEB ANIMATION LAB / 01
        </p>

        <h1>Transform Basics</h1>

        <p>
          Hover over each card to explore a different
          movement technique.
        </p>
      </header>

      <section className="transform-lab__grid">
        {experiments.map((experiment) => (
          <motion.article
            key={experiment.id}
            className="transform-card"
            whileHover={experiment.hover}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
          >
            <span className="transform-card__number">
              {String(experiment.id).padStart(2, "0")}
            </span>

            <div>
              <h2>{experiment.title}</h2>
              <p>{experiment.description}</p>
            </div>

            <span className="transform-card__arrow">
              ↗
            </span>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
