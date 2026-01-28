import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const SLOT_DURATION_MINUTES = 30;

function getOAuth2Client() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  return oauth2Client;
}

interface BookingRequest {
  name: string;
  email: string;
  slot: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingRequest = await request.json();
    const { name, email, slot, message } = body;

    if (!name || !email || !slot) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and slot are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const slotDate = new Date(slot);
    if (isNaN(slotDate.getTime())) {
      return NextResponse.json(
        { error: 'Invalid slot date format' },
        { status: 400 }
      );
    }

    if (slotDate < new Date()) {
      return NextResponse.json(
        { error: 'Cannot book a slot in the past' },
        { status: 400 }
      );
    }

    if (!process.env.GOOGLE_REFRESH_TOKEN) {
      return NextResponse.json(
        { error: 'Calendar not configured' },
        { status: 503 }
      );
    }

    const oauth2Client = getOAuth2Client();
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const endTime = new Date(
      slotDate.getTime() + SLOT_DURATION_MINUTES * 60 * 1000
    );

    const event = {
      summary: `Meeting with ${name}`,
      description: message
        ? `Booking request from portfolio.\n\nMessage: ${message}\n\nContact: ${email}`
        : `Booking request from portfolio.\n\nContact: ${email}`,
      start: {
        dateTime: slotDate.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      attendees: [{ email }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 30 },
        ],
      },
    };

    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      requestBody: event,
      sendUpdates: 'all',
    });

    return NextResponse.json({
      success: true,
      message: 'Booking confirmed! You will receive a calendar invite shortly.',
      eventId: response.data.id,
      eventLink: response.data.htmlLink,
    });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}
