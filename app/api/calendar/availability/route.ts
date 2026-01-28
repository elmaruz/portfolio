import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const SLOT_DURATION_MINUTES = 30;
const WORKING_HOURS_START = 9;
const WORKING_HOURS_END = 17;
const DAYS_AHEAD = 14;

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

function generateTimeSlots(date: Date): Date[] {
  const slots: Date[] = [];
  const start = new Date(date);
  start.setHours(WORKING_HOURS_START, 0, 0, 0);

  const end = new Date(date);
  end.setHours(WORKING_HOURS_END, 0, 0, 0);

  let current = new Date(start);
  while (current < end) {
    slots.push(new Date(current));
    current = new Date(current.getTime() + SLOT_DURATION_MINUTES * 60 * 1000);
  }

  return slots;
}

function isSlotAvailable(
  slot: Date,
  busyPeriods: Array<{ start: string; end: string }>
): boolean {
  const slotEnd = new Date(slot.getTime() + SLOT_DURATION_MINUTES * 60 * 1000);

  for (const busy of busyPeriods) {
    const busyStart = new Date(busy.start);
    const busyEnd = new Date(busy.end);

    if (slot < busyEnd && slotEnd > busyStart) {
      return false;
    }
  }

  return true;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const dateParam = searchParams.get('date');

    if (!process.env.GOOGLE_REFRESH_TOKEN) {
      return NextResponse.json(
        { error: 'Calendar not configured' },
        { status: 503 }
      );
    }

    const oauth2Client = getOAuth2Client();
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const now = new Date();
    const timeMin = dateParam ? new Date(dateParam) : now;
    timeMin.setHours(0, 0, 0, 0);

    const timeMax = new Date(timeMin);
    timeMax.setDate(timeMax.getDate() + (dateParam ? 1 : DAYS_AHEAD));
    timeMax.setHours(23, 59, 59, 999);

    const freeBusyResponse = await calendar.freebusy.query({
      requestBody: {
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
        items: [{ id: process.env.GOOGLE_CALENDAR_ID || 'primary' }],
      },
    });

    const busyPeriods =
      freeBusyResponse.data.calendars?.[
        process.env.GOOGLE_CALENDAR_ID || 'primary'
      ]?.busy || [];

    const availability: Record<string, string[]> = {};

    const currentDate = new Date(timeMin);
    while (currentDate < timeMax) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const dateKey = currentDate.toISOString().split('T')[0];
        const slots = generateTimeSlots(currentDate);

        const availableSlots = slots
          .filter((slot) => {
            if (slot < now) return false;
            return isSlotAvailable(slot, busyPeriods as Array<{ start: string; end: string }>);
          })
          .map((slot) => slot.toISOString());

        if (availableSlots.length > 0) {
          availability[dateKey] = availableSlots;
        }
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return NextResponse.json({
      availability,
      slotDurationMinutes: SLOT_DURATION_MINUTES,
      workingHours: {
        start: WORKING_HOURS_START,
        end: WORKING_HOURS_END,
      },
    });
  } catch (error) {
    console.error('Availability error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch availability' },
      { status: 500 }
    );
  }
}
