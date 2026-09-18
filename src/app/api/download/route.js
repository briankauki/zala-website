import { NextResponse } from 'next/server';
import { apkConfig } from '@/lib/config';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const baseUrl = `${url.protocol}//${url.host}`;

    const fileUrl = apkConfig.downloadUrl.startsWith('http')
      ? apkConfig.downloadUrl
      : `${baseUrl}${apkConfig.downloadUrl}`;

    const response = await fetch(fileUrl, { redirect: 'follow' });

    if (!response.ok) {
      return NextResponse.json({ error: 'Download failed' }, { status: 502 });
    }

    const headers = new Headers();
    headers.set('Content-Type', 'application/zip');
    headers.set(
      'Content-Disposition',
      `attachment; filename="${apkConfig.filename}"`
    );
    headers.set('Cache-Control', 'public, max-age=3600');

    return new NextResponse(response.body, { status: 200, headers });
  } catch (error) {
    return NextResponse.json(
      { error: 'Unable to start the download. Please try again.' },
      { status: 500 }
    );
  }
}