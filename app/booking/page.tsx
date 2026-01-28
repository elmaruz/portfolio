'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import Booking from '@/components/Booking';

export default function BookingPage() {
  const [modal, setModal] = useState(false);

  function mobile(): void {
    setModal(!modal);
  }

  return (
    <>
      <Navbar mobile={mobile} modal={modal} />
      {modal && <Menu mobile={mobile} modal={modal} />}
      <Booking />
    </>
  );
}
