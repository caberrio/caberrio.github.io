import { h } from "preact";
import Header from "./components/header";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";
import "./app.css";

export function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
