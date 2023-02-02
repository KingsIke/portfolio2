import Head from 'next/head'
import type { NextPage } from 'next'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact/Contact'



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
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skill */}

      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects />

      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-center'>
        <Contact />
      </section>
    </div >
  )
}
export default Home
