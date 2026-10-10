# 🎬 Web Animation Lab

**Exploring the art of motion across the web — one experiment at a time.**

Web Animation Lab is my hands-on journey into modern web animations, interactive UI effects, and motion-driven experiences. This repository is where I experiment with animation libraries, learn new techniques, build reusable components, and document what I discover along the way.

The goal is not just to make interfaces move, but to understand how thoughtful animation can make digital experiences more intuitive, engaging, accessible, and polished.

## ✨ What I'm Exploring

* **Motion for React (formerly Framer Motion)** — Component animations, transitions, variants, and gestures.
* **GSAP** — Timelines, precise sequencing, and complex motion effects.
* **Scroll Animations** — Scroll-triggered reveals, pinned sections, and scroll-based storytelling.
* **Page Transitions** — Smooth transitions between views and routes.
* **Micro-interactions** — Animated buttons, hover effects, navigation indicators, and interactive UI components.
* **Text Animations** — Text reveals, staggered typography, and kinetic text effects.
* **Creative Experiments** — Combining animation techniques to explore new interaction patterns.
* **Cross-framework Animations** — Exploring how animation concepts can be implemented across different development environments.

## 🛠️ Technologies

### Currently Using

* React
* JavaScript
* Vite
* HTML5 and CSS3
* Motion for React

### Exploring as the Lab Grows

* TypeScript
* GSAP and ScrollTrigger
* Next.js
* React Native
* Advanced CSS and SVG animations

Technologies will be added to the active stack as I begin using them in actual experiments.

## 📂 Repository Structure

This repository is organized to support multiple framework-specific projects while keeping learning resources and documentation in one place.

```text
web-animation-lab/
├── apps/
│   └── react-js-lab/
│       ├── public/
│       ├── src/
│       │   ├── 01-framer-motion/
│       │   ├── 02-gsap-basics/
│       │   ├── 03-scroll-animations/
│       │   ├── 04-page-transitions/
│       │   ├── 05-hover-interactions/
│       │   ├── 06-text-animations/
│       │   ├── 07-creative-experiments/
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   └── index.css
│       ├── index.html
│       ├── package.json
│       ├── package-lock.json
│       ├── vite.config.js
│       └── eslint.config.js
├── LEARNING-ROADMAP.md
├── README.md
└── .gitignore
```

*The structure above represents the current React JavaScript setup. File names may vary slightly depending on the existing Vite configuration.*

### Why This Structure?

* **`apps/`** — Contains independent projects built with different frameworks or environments.
* **`react-js-lab/`** — The current Vite and React JavaScript learning project.
* **`Numbered animation folders`** — Organize experiments by topic for easy navigation.
* **`LEARNING-ROADMAP.md`** — Tracks learning goals, completed experiments, and future topics.
* **`README.md`** — Documents the repository and links to important experiments.

### Future Expansion

As I explore more technologies, I plan to add independent projects such as:

| Project                  | Purpose                                        |
| ------------------------ | ---------------------------------------------- |
| `apps/react-ts-lab/`     | React with TypeScript                          |
| `apps/nextjs-lab/`       | Animation experiments in Next.js               |
| `apps/react-native-lab/` | Mobile animation experiments                   |
| `apps/vanilla-js-lab/`   | CSS, JavaScript, and browser-native animations |

These projects will be added as I begin working with them. Each will have its own dependencies and configuration where necessary.

Not every animation will be recreated in every framework. I'll compare implementations when doing so provides a useful learning experience.

## 🚀 Getting Started

### Prerequisites

* Node.js — preferably a supported LTS version
* npm
* Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Tonysunny0201/web-animation-lab.git
   ```

2. Navigate to the current React JavaScript app:

   ```bash
   cd web-animation-lab/apps/react-js-lab
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

### Working on an Experiment

Choose the appropriate topic folder inside `apps/react-js-lab/src/` and create your component and supporting styles there.

For example:

```text
src/
└── 01-framer-motion/
    ├── BasicEntrance.jsx
    ├── basic-entrance.css
    ├── HoverCard.jsx
    └── hover-card.css
```

Import the experiment you're currently developing into `App.jsx` to preview it.

Each experiment should ideally include working code, a clear name, and a short explanation of the technique. Screenshots and live demos can be added as the collection grows.

## 🧪 Experiments

This table provides an overview of the topics in the lab. Detailed entries and demos will be added as experiments are completed.

| #  | Topic                | Focus                                                    |
| -- | -------------------- | -------------------------------------------------------- |
| 01 | Motion for React     | Entrance animations, transitions, variants, and gestures |
| 02 | GSAP Basics          | Tweens, timelines, and easing                            |
| 03 | Scroll Animations    | Scroll-triggered reveals, pinned sections, and parallax  |
| 04 | Page Transitions     | Transitions between views and routes                     |
| 05 | Hover Interactions   | Interactive cards, buttons, and links                    |
| 06 | Text Animations      | Text reveals and staggered typography                    |
| 07 | Creative Experiments | Original combinations and motion concepts                |

> This is an evolving collection. A topic folder may exist before its experiments are completed.

## 🎯 Learning Goals

* Understand timing, easing, sequencing, and core animation principles.
* Build reusable animation components and configurations.
* Learn when to use CSS, Motion for React, or GSAP.
* Create responsive and accessible motion experiences.
* Explore scroll-driven effects and advanced transitions.
* Understand animation differences across React, Next.js, and React Native.
* Apply the techniques to practical websites and portfolio projects.
* Document experiments so the code can be reused and improved later.

## 🗺️ Learning Roadmap

Follow the learning journey in [LEARNING-ROADMAP.md](./LEARNING-ROADMAP.md).

The roadmap covers animation fundamentals, Motion for React, GSAP, scroll interactions, page transitions, text animations, accessibility, performance, and portfolio-ready experiments.

## 📈 Learning in Public

I'm documenting this journey to reinforce what I learn, track my progress, and build a practical reference for future projects.

As I complete experiments, I'll share selected demos, implementation notes, and lessons learned on professional and social platforms.

## 🤝 Feedback & Suggestions

Have an interesting animation technique, a useful resource, or an idea for a future experiment?

Feel free to open an issue or share feedback. Suggestions involving performance, accessibility, maintainability, and real-world usability are especially welcome.

## 📚 Resources

* [Motion for React Documentation](https://motion.dev/docs/react)
* [GSAP Documentation](https://gsap.com/docs/v3/)
* [GSAP ScrollTrigger Documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
* [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)
* [MDN Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

---

**Built with curiosity, code, and a love for creative web experiences.** ✨

*This is a personal learning project. The experiments, documentation, and technology stack will evolve as I progress.*
