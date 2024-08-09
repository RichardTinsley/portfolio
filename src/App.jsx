import Header from "./Components/Header/Header";
import Hero from  "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

import "./App.css";

export default function App() {

  return (
    <>
      <div id="main-container">
        <Header />
        <Hero />
        <Contact />
      </div>
        <Projects />
    </>
  )
}


