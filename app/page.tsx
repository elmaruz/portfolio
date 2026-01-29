'use client';

import { useState } from 'react';
import s from '@/styles/App.module.css';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Menu from '@/components/Menu';

export default function Page() {
  const [modal, setModal] = useState<boolean>(false);

  function mobile(): void {
    setModal(!modal);
  }

  return (
    <div className={s.main}>
      <Navbar mobile={mobile} modal={modal} />
      <div className={s.sections}>
        {modal ? <Menu mobile={mobile} modal={modal} /> : null}
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
