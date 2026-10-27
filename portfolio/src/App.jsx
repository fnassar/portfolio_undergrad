import { lazy, Suspense } from "react";
import Cursor from "./animations/Cursor.jsx";
import Nav from "./components/Nav.jsx";
import About from "./sections/about/About.jsx";
import Contact from "./sections/contact/Contact.jsx";
import ExperienceSection from "./sections/experience/ExperienceSection.jsx";
import Hero from "./sections/hero/Hero.jsx";
import ProjectsSection from "./sections/projects/ProjectsSection.jsx";

const Background = lazy(() => import("./animations/Background.jsx"));

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <About />
        <Contact />
      </main>
    </>
  );
}
