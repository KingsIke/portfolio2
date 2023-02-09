import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {}

const Header = ({ }: Props) => {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-10 xl:items-center'>

            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.3
                }}

                className='flex flex-row items-center'>
                {/* social  Icons */}
                <SocialIcon url="https://twitter.com/jaketrent"
                    fgColor='gray'
                    bgColor='transparent'
                />
                {/* social  Icons */}
                <SocialIcon url="https://twitter.com/jaketrent"
                    fgColor='gray'
                    bgColor='transparent'
                />
                {/* social  Icons */}
                <SocialIcon url="https://twitter.com/jaketrent"
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.2
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer '>
                {/* social  Icons */}
                <SocialIcon className='cursor-pointer'
                    url="#contact"
                    fgColor='gray'
                    network='email'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400 ' ><a href='#contact'>Get In Touch</a> </p>
            </motion.div>
        </header>
    )
}

export default Header