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
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-4 uppercase tracking-[10px] text-red-500 text-2xl mb-10'>Work Experience</h3>
            <div className='w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory'>
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