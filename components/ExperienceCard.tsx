import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const ExperienceCard = ({ }: Props) => {
    return (
        <article className=' mt-24 h-2/3 w-fit space-y-1 sm:mt-0 sm:flex sm:flex-col  rounded-lg item-center sm:space-y-7 flex-shrink-0 sm:w-[400px] sm:h-fit  md:w-[500px] md:h-fit xl:w-[600px] xl:h-fit  xl:space-y-1 snap-center bg-[#421f6f]   hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
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
                className='w-10 h-10 mt-1  sm:w-20 sm:h-20 sm:ml-40 sm:mt-3 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center bg-[#27c64c]' alt="" />

            <div className='px-0 pl-1 sm:pl-3 md:px-10'>
                <h4 className='text-xl sm:text-4xl font-light'> Junior Fullstack Dev</h4>
                <p className='mt-0 text-md sm:font-bold sm:text-2xl sm:mt-1'>Decagon</p>
                <div className='flex space-x-2 my-2'>
                    <img src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" className="h-5 w-5 sm:h-10 sm:w-10 rounded-full" />

                    <img src="https://icon2.cleanpng.com/20180614/aqp/kisspng-node-js-javascript-express-js-mongodb-github-node-js-5b224f659ba591.6085517515289752056375.jpg" alt="" className="h-5 w-5 sm:h-10 sm:w-10 rounded-full" />

                    <img src="https://icon-library.com/images/html5-icon-png/html5-icon-png-8.jpg" alt="" className="h-5 w-5 sm:h-10 sm:w-10 rounded-full" />

                    <img src="https://icon-library.com/images/mit-icon/mit-icon-25.jpg" alt="" className="h-5 w-5 sm:h-10 sm:w-10 rounded-full" />

                    {/* <Tech used />
                    <Tech used />
                    <Tech used /> */}

                </div>
                <p className='uppercase py-1 sm:py-5 text-gray-300'>Started work... - Ended ...</p>

                <ul className=' space-y-0 text-xs sm:text-sm sm:space-y-0 list-disc  xl:space-y-4 ml-5 xl:text-md'>
                    <li>Summary PointsSummary  PointsSummary Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga est ratione assumenda optio corrupti vel ipsam doloremque quas magni illu Points</li>
                    <li>Summary PointsSummary PointsSummary Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga est ratione assumenda optio corrupti vel ipsam doloremque quas magni illu Points</li>
                    <li>Summary PointsSummary PointsSummary Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga est ratione assumenda optio corrupti vel ipsam doloremque quas magni illu Points</li>
                    <li>Summary PointsSummary PointsSummary  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga est ratione assumenda optio corrupti vel ipsam doloremque quas magni illuPoints</li>
                    <li>Summary PointsSummary PointsSummary Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga est ratione assumenda optio corrupti vel ipsam doloremque quas magni illu Points</li>
                </ul>
            </div>
        </article>
    )
}
export default ExperienceCard