"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { signOut, signIn } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'

const AuthUser = () => {
  const { data: sessionData } = useSession()

  return ( 
    <div className='flex gap-2 items-center'>
      <Image src={sessionData?.user?.image || ""} width={42} height={42} alt='Profile Picture' className='rounded-full cursor-pointer'/> 
      <Button className='bg-white text-black hover:bg-zinc-950 hover:text-white' onClick={() => signOut()}>Sign Out</Button>
    </div>
  ) 
}

export default function Navbar() {
  const { data: sessionData } = useSession()
  const currentLocation = usePathname()

  return (
    <nav>
      <div className='flex items-center justify-between px-4 py-3 w-[80%] mx-auto'>
        <div className='cursor-pointer font-extrabold tracking-tight text-xl'><Link href="/">Image Generator</Link></div>
        <div className='flex items-center gap-6'>
          <Link href='/' className={`hover:bg-white hover:text-zinc-950 px-2 py-1 rounded-md hover:opacity-100 ${currentLocation === '/' ? 'opacity-100 underline underline-offset-4' : 'opacity-70'}`}>Home</Link>
          <Link href="/generate"className={`hover:bg-white hover:text-zinc-950 px-2 py-1 rounded-md opacity-70 hover:opacity-100 ${currentLocation === '/generate' ? 'opacity-100 underline underline-offset-4': 'opacity-70' }`}>Generate</Link>
          <Link href="/your-images"className={`hover:bg-white hover:text-zinc-950 px-2 py-1 rounded-md opacity-70 hover:opacity-100 ${currentLocation === '/your-images' ? 'opacity-100 underline underline-offset-4': 'opacity-70' }`}>Your Images</Link>
        </div>
        <div>
          {sessionData?.user !== undefined ? <AuthUser /> : <Button className='bg-white text-zinc-950 hover:bg-zinc-950 hover:text-white' onClick={() => signIn()}>Sign In</Button>}
        </div>
      </div>
    </nav>
  )
}
