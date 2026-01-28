import { redirect } from 'next/navigation';
import Booking from '@/components/Booking';

export const metadata = {
  title: 'Book a Meeting | Leonardo Marussig',
  description: 'Schedule a meeting with Leonardo Marussig',
};

export default function BookingPage() {
  if (process.env['NEXT_PUBLIC_ENABLE_BOOKING'] !== 'true') {
    redirect('/');
  }

  return <Booking />;
}
