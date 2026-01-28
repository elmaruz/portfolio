'use client';

import { useState } from 'react';
import s from '@/styles/Booking.module.css';
import BookingForm from './BookingForm';

export default function Booking() {
  const [booked, setBooked] = useState(false);

  function handleSuccess() {
    setBooked(true);
  }

  function handleReset() {
    setBooked(false);
  }

  return (
    <div id="booking" className={s.booking}>
      <div className={s.booking_cont}>
        <h1>Book a Meeting</h1>

        {booked ? (
          <div className={s.booking_content}>
            <div className={s.success}>
              <h3>Booking Confirmed!</h3>
              <p>
                You will receive a calendar invite at your email shortly.
                Looking forward to our meeting!
              </p>
              <button className={s.reset_btn} onClick={handleReset}>
                Book Another Time
              </button>
            </div>
          </div>
        ) : (
          <BookingForm onSuccess={handleSuccess} />
        )}
      </div>
    </div>
  );
}
