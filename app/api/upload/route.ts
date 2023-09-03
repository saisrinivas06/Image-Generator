import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(request: NextRequest) {
  const data = await request.formData()
  const file: File = data.get("file") as unknown as File
  if (!file) {
    return NextResponse.json({ message: "No File" })
  }
  const buffer = Buffer.from(await file.arrayBuffer())
  const filePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "..",
    "public",
    Date.now().toString()
  )
  fs.writeFileSync(`${filePath}.png`, buffer)
  return NextResponse.json({ message: `${filePath}` })
}
