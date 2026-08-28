import About from "./components/About";
import AiCollaboration from "./components/AiCollaboration";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AiCollaboration />
        <Education />
        <Contact />
      </main>
      <footer className="px-6 pb-10 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} 조현우. All rights reserved.
      </footer>
    </div>
  );
}
