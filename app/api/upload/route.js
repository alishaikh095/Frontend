import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  const data = await request.formData();
  const file = data.get('image');
  const extension = file.name.split('.').pop();
  const fileName = `${crypto.randomUUID()}.${extension}`;
  const filePath = path.join(process.cwd(), 'public/images', fileName);

  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filePath, buffer);

  return NextResponse.json({ url: `/images/${fileName}` });
}