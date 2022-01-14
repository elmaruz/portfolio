import React, { useState } from 'react';
import s from '../css_modules/App.module.css';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Menu from '../components/Menu';

function App() {
  let [modal, setModal] = useState<boolean>(false);

  function mobile(): void {
    setModal(!modal);
  }

  return (
    <div className={`${s.main}`}>
      <Navbar mobile={mobile} modal={modal} />
      <div className={`${s.sections}`}>
        {modal ? <Menu mobile={mobile} modal={modal} /> : ''}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
