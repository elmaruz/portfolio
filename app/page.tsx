'use client';

import { useState } from 'react';
import s from '@/styles/App.module.css';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Menu from '@/components/Menu';

const showBooking = process.env['NEXT_PUBLIC_ENABLE_BOOKING'] === 'true';

export default function Page() {
  const [modal, setModal] = useState<boolean>(false);

  function mobile(): void {
    setModal(!modal);
  }

  return (
    <div className={s.main}>
      <Navbar mobile={mobile} modal={modal} showBooking={showBooking} />
      <div className={s.sections}>
        {modal ? (
          <Menu mobile={mobile} modal={modal} showBooking={showBooking} />
        ) : null}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
