import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"
import { prisma } from "@/prisma/db"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"

export async function POST(request: Request) {
  const data = await request.json()
  const res = await fetch(`https://lexica.art/api/v1/search?q=${data}`)
  const images = await res.json()
  images.images
    .splice(0, 9)
    .map((img: { src: string }) => img.src)
    .map(async (img: string) => {
      const imageRes = await fetch(img)
      const imgToBlob = await imageRes.blob()
      const imgData = Buffer.from(await imgToBlob.arrayBuffer())
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
      fs.writeFileSync(`${filePath}.png`, imgData)
    })
  return NextResponse.json({ message: images.images })
}
