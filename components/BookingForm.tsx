'use client';

import { useState, useEffect } from 'react';
import s from '@/styles/Booking.module.css';

interface AvailabilityResponse {
  availability: Record<string, string[]>;
  slotDurationMinutes: number;
  workingHours: {
    start: number;
    end: number;
  };
}

interface BookingFormProps {
  onSuccess: () => void;
}

export default function BookingForm({ onSuccess }: BookingFormProps) {
  const [availability, setAvailability] = useState<Record<string, string[]>>(
    {},
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchAvailability();
  }, []);

  async function fetchAvailability() {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/calendar/availability');

      if (!response.ok) {
        if (response.status === 503) {
          setError('Calendar not configured yet.');
          return;
        }
        throw new Error('Failed to fetch availability');
      }

      const data: AvailabilityResponse = await response.json();
      setAvailability(data.availability);

      const dates = Object.keys(data.availability);
      if (dates.length > 0) {
        setSelectedDate(dates[0]);
      }
    } catch (err) {
      setError('Unable to load available times. Please try again later.');
      console.error('Fetch availability error:', err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!selectedSlot || !name || !email) {
      setError('Please fill in all required fields and select a time slot.');
      return;
    }

    try {
      setSubmitting(true);
      setError(null);

      const response = await fetch('/api/calendar/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          slot: selectedSlot,
          message: message || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to book meeting');
      }

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to book meeting');
    } finally {
      setSubmitting(false);
    }
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  }

  function formatTime(isoString: string): string {
    const date = new Date(isoString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  }

  if (loading) {
    return <div className={s.loading}>Loading available times...</div>;
  }

  if (error === 'Calendar not configured yet.') {
    return (
      <div className={s.not_configured}>
        <h3>Booking Coming Soon</h3>
        <p>
          The booking system is being set up. Please check back later or use the
          contact links below.
        </p>
      </div>
    );
  }

  const dates = Object.keys(availability);

  if (dates.length === 0) {
    return (
      <div className={s.no_slots}>
        <p>No available slots at the moment. Please check back later.</p>
      </div>
    );
  }

  const slots = selectedDate ? availability[selectedDate] || [] : [];

  return (
    <div className={s.booking_content}>
      {error && <div className={s.error}>{error}</div>}

      <div className={s.date_picker}>
        {dates.map((date) => (
          <button
            key={date}
            className={`${s.date_btn} ${selectedDate === date ? s.date_btn_selected : ''}`}
            onClick={() => {
              setSelectedDate(date);
              setSelectedSlot(null);
            }}>
            {formatDate(date)}
          </button>
        ))}
      </div>

      {selectedDate && (
        <>
          {slots.length > 0 ? (
            <div className={s.slots_container}>
              {slots.map((slot) => (
                <button
                  key={slot}
                  className={`${s.slot_btn} ${selectedSlot === slot ? s.slot_btn_selected : ''}`}
                  onClick={() => setSelectedSlot(slot)}>
                  {formatTime(slot)}
                </button>
              ))}
            </div>
          ) : (
            <div className={s.no_slots}>
              <p>No available slots for this date.</p>
            </div>
          )}
        </>
      )}

      {selectedSlot && (
        <>
          <div className={s.selected_info}>
            Selected: {formatDate(selectedDate!)} at {formatTime(selectedSlot)}
          </div>

          <form className={s.form} onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Your Name *'
              className={s.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type='email'
              placeholder='Your Email *'
              className={s.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder='Message (optional)'
              className={`${s.input} ${s.textarea}`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type='submit'
              className={s.submit_btn}
              disabled={submitting}>
              {submitting ? 'Booking...' : 'Submit'}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
