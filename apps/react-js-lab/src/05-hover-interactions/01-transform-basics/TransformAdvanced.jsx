
import { motion } from "motion/react";

const items = [
    { title: "Scale X", hover: { scaleX: 1.2 } },
    { title: "Scale Y", hover: { scaleY: 1.2 } },
    { title: "Skew", hover: { skewX: -10 } },
    { title: "Rotate X", hover: { rotateX: 25 } },
    { title: "Rotate Y", hover: { rotateY: 25 } },
    {
        title: "Transform origin",
        hover: { rotate: 15 },
        style: { originX: 0, originY: 1 },
    },
];

export default function TransformAdvanced() {
    return (
        <main
            style={{
                padding: 32,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 24,
                background: "#101010",
                color: "white",
            }}
        >
            {items.map((item) => (
                <motion.div
                    key={item.title}
                    whileHover={item.hover}
                    whil
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    style={{
                        ...item.style,
                        minHeight: 140,
                        padding: 20,
                        border: "1px solid #b8f34a",
                        borderRadius: 16,
                        background: "#202020",
                        display: "grid",
                        placeItems: "center",
                        transformPerspective: 600,
                    }}
                >
                    {item.title}
                </motion.div>
            ))}
        </main>
    );
}
