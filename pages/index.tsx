import Head from 'next/head'
import type { NextPage } from 'next'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'


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

      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      {/* <section id=></section> */}

      {/* Skill */}



      {/* Projects */}

      {/* Contact Me */}
    </div >
  )
}
export default Home
