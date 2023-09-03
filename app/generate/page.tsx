"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Page() {
  const [text, setText] = useState("")
  const [images, setImages] = useState([])
  async function handleFormSubmit(e: React.FocusEvent<HTMLFormElement>) {
    e.preventDefault()
    const res = await fetch("/api/generate", {
      next: {
        revalidate: 0,
      },
      method: "POST",
      body: JSON.stringify(text),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.json()
    setImages(data.message.splice(0, 9))
  }

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className='flex gap-4 mt-4 items-center justify-center'>
        <input
          type='text'
          value={text}
          className='my-4 rounded-lg h-8 w-[30%] placeholder:pl-2 '
          placeholder='Enter prompt: '
          onChange={e => setText(e.target.value)}
        />
        <button className='hover:bg-white hover:text-zinc-950 px-2 py-1 rounded-md hover:opacity-100'>
          Generate
        </button>
      </form>
      <div className='grid grid-cols-3 gap-4 mx-16'>
        {images.map((image: ImageProp) => (
          <Image
            key={image.id}
            src={image.src}
            className='h-80 w-80'
            alt='image'
            width={320}
            height={320}
          />
        ))}
      </div>
    </>
  )
}
