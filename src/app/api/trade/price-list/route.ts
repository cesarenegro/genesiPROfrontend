import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const session = await auth();
  if (!session.userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const filePath = path.join(process.cwd(), 'private-docs', 'genesi-price-list-2026-v2.pdf');
  if (!fs.existsSync(filePath)) {
    return new NextResponse('File not found', { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="genesi-price-list-2026.pdf"',
      'Content-Length': fileBuffer.length.toString(),
      'Cache-Control': 'private, no-cache, no-store, must-revalidate',
    },
  });
}
