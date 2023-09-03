"use client"

import { useEffect, useState } from "react"

export default function Page() {
  const [imagesList, setImagesList] = useState<string[]>([])

  useEffect(() => {
    async function getAllImages() {
      const res = await fetch("/api/getAllImages", {
        next: {
          revalidate: 0,
        },
      })
      const data = await res.json()
      console.log("data", data.message)
      setImagesList(data.message)
    }
    getAllImages()
  }, [])

  return (
    <>
      <h1 className='ml-[45%] font-bold text-xl mt-4 mb-4 '>
        Generated Image  Samples
      </h1>
      <div className='grid grid-cols-3 gap-6 mx-16'>
        {imagesList.reverse().map(img => (
          <>
            <img
              src={`/${img}`}
              className='rounded-2xl hover:opacity-50 cursor-pointer'
            />
          </>
        ))}
      </div>
    </>
  )
}
