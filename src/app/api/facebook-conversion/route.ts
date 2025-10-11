import { NextRequest, NextResponse } from 'next/server';

const FACEBOOK_PIXEL_ID = '309625491765915';
const ACCESS_TOKEN = 'EAAFisViCn60BPtRaGEZAhsNVHPkFbzsPTyDvaZCM60dgD8OyQ5ZCZBmdhVxIEf94tJuoCMDr4SBVi45ey37ek6CHtnPEZArhPuCCZBDWbjupebvNN513ZAyqNd8ZBZBfoJEZCiw7Ly8LLcuzI5ZBtXVG3CjX2KpUXjeRdBJZBD9bIICcRtzm0xbmIuMhsV6ihoYXsAZDZD';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventName, userData, customData } = body;

    // Dados do evento para o Facebook Conversions API
    const eventData = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          user_data: {
            em: userData?.email ? [userData.email.toLowerCase()] : undefined,
            ph: userData?.phone ? [userData.phone.replace(/\D/g, '')] : undefined,
            client_ip_address: request.ip || request.headers.get('x-forwarded-for') || '127.0.0.1',
            client_user_agent: request.headers.get('user-agent') || '',
            fbc: userData?.fbc || undefined,
            fbp: userData?.fbp || undefined,
          },
          custom_data: customData || {},
          event_source_url: request.headers.get('referer') || 'https://agnaldotomsic.com.br',
        }
      ],
      access_token: ACCESS_TOKEN,
    };

    // Enviar evento para o Facebook Conversions API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${FACEBOOK_PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error('Facebook API Error:', result);
      return NextResponse.json(
        { error: 'Failed to send event to Facebook' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Error sending Facebook conversion event:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}