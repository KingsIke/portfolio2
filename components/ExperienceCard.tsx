import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const ExperienceCard = ({ }: Props) => {
    return (
        <article className='flex flex-col rounded-lg item-center space-y-7 flex-shrink-0 w-[200px] sm:w-[100px] md:w-[250px] xl:w-[400px] snap-center bg-[#421f6f]   hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden sm:h-100 '>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{
                    opacity: 1, y: 0
                }}
                viewport={{ once: true }}
                src="https://avatars1.githubusercontent.com/u/54376835?s=200&v=4"
                className='w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center bg-[#27c64c]' alt="" />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'> Junior Fullstack Dev</h4>
                <p className='font-bold text-2xl mt-1'>Decagon</p>
                <div className='flex space-x-2 my-2'>
                    <img src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" className="h-10 w-10 rounded-full" />

                    <img src="https://icon2.cleanpng.com/20180614/aqp/kisspng-node-js-javascript-express-js-mongodb-github-node-js-5b224f659ba591.6085517515289752056375.jpg" alt="" className="h-10 w-10 rounded-full" />

                    <img src="https://icon-library.com/images/html5-icon-png/html5-icon-png-8.jpg" alt="" className="h-10 w-10 rounded-full" />

                    <img src="https://icon-library.com/images/mit-icon/mit-icon-25.jpg" alt="" className="h-10 w-10 rounded-full" />

                    {/* <Tech used />
                    <Tech used />
                    <Tech used /> */}

                </div>
                <p className='uppercase py-5 text-gray-300'>Started work... - Ended ...</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary Points</li>
                    <li>Summary PointsSummary Points</li>
                    <li>Summary PointsSummary Points</li>
                    <li>Summary PointsSummary Points</li>
                    <li>Summary PointsSummary Points</li>
                </ul>
            </div>
        </article>
    )
}
export default ExperienceCard