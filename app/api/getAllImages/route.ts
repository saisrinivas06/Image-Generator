import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: Request) {
  const images: string[] = []
  const imagesPath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "..",
    "public"
  )
  fs.readdirSync(imagesPath).forEach(file => images.push(file))
  return NextResponse.json({ message: images })
}
