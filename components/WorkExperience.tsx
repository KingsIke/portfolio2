import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

const WorkExperience = ({ }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen block sm:flex relative sm:overflow-hidden sm:flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-2 text-1xl sm:top-4 uppercase tracking-[10px] text-yellow-500 sm:text-2xl mb-10'>Work Experience</h3>
            <div className='w-full pt-2 space-x-1 flex sm:space-x-5 overflow-x-scroll sm:p-5 snap-mandatory snap-x '>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                {/* h3=top-14 tracking-[20px] */}
            </div>

        </motion.div>
    )
}

export default WorkExperience