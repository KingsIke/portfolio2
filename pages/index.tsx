import Head from 'next/head'
import type { NextPage } from 'next'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'


// const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(21,21,21)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Kings=Ike Portfolio</title>

      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}

      <section id="hero" className='snap-center'>
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skill */}

      <h1 className="p-10 text-red-500">Hy is Kingsike</h1>
      <h1 className="text-3xl font-bold underline">Kingsike</h1>

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}
export default Home
