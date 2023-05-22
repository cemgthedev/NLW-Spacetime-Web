import { cookies } from 'next/headers'

import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { SingIn } from '@/components/SingIn'
import { Profile } from '@/components/Profile'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}

      <section className="bg-cover relative flex flex-col items-start justify-between border-r border-white/10 bg-[url(../assets/bg-stars.svg)] px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* Sign In */}
        {isAuthenticated ? <Profile /> : <SingIn />}

        {/* Hero */}
        <Hero />

        {/* Copyright */}
        <Copyright />
      </section>

      {/* Right */}
      <section className="bg-cover flex flex-col bg-[url(../assets/bg-stars.svg)] p-16">
        <EmptyMemories />
      </section>
    </main>
  )
}
