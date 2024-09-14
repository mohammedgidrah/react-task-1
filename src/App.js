import "./App.css";
import React from 'react';
import Head from './components/Head';
import Headers from './components/Header'; 
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import FigmaProjects from "./components/FigmaProjects";
import WebProjects from "./components/WebProjects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
    <Head />
      <Headers />
      <HeroSection />
      <About />
      <Experience />
      <FigmaProjects />
      <WebProjects />
      <ContactMe />

    </>
  );
}

export default App;
