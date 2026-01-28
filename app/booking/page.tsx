'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import Booking from '@/components/Booking';

const showBooking = process.env['NEXT_PUBLIC_ENABLE_BOOKING'] === 'true';

export default function BookingPage() {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!showBooking) {
      router.replace('/');
    }
  }, [router]);

  if (!showBooking) {
    return null;
  }

  function mobile(): void {
    setModal(!modal);
  }

  return (
    <>
      <Navbar mobile={mobile} modal={modal} showBooking={showBooking} />
      {modal && <Menu mobile={mobile} modal={modal} showBooking={showBooking} />}
      <Booking />
    </>
  );
}
