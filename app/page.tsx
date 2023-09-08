"use client"

import { useState } from "react"

export default function Page() {
  return (
    <main className='text-center mt-4'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Turn your ideas into images
      </h1>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        Describe your thoughts and it will generate for you on the fly.
      </p>
      <p>-------------------------------------------------------------------------</p>
      <div>
        <p className='text-xl' >
          Sample images
        </p>
        <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        <div className = ' grid grid-cols-3 gap-6'>
        <img className='   mx-16 h-72 mb-6 cursor-pointer' src= '/1692369079441.png' />
        <img className='  mx-16 h-72 mt-10 mb-6 cursor-pointer' src= '/1692629883452.png' />
        <img className='  mx-16 h-72 mb-6 w-72 cursor-pointer' src= '/man2.png' />
        <img className='  mx-16 h-72  mb-6 w-72 cursor-pointer' src= '/sunset.png' />
        <img className='  mx-16 h-72 mb-6 w-72 cursor-pointer ' src= '/him.png' />
        <img className='  mx-16 h-72  w-72 cursor-pointer' src= '/man.png' />
        <img className='  mx-16 h-72  w-72 cursor-pointer' src= '/si.png' />
        <img className='  mx-16 h-72  w-72 cursor-pointer' src= '/child.jpg' />
        <img className='  mx-16 h-72  w-72 cursor-pointer' src= '/flying birds.jpg' />

        

      </div>
      </div>
    </main>
  )
}
