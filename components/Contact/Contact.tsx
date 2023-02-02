import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

type Props = {}

const Contact = ({ }: Props) => {
    return (
        <div className=' h-screen flex relative flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
            <h3 className=' absolute top-24 uppercase tracking-[20px] text-gold-500 text-2xl pb-10'>Contact</h3>

            <div className='flex flex-col space-y-10 pt-10' >

                <h4 className='text-4xl font-semibold text-center leading-10'>You can contact me ☎️
                    <span className='decoration-[#F7AB0A]/50 underline inline-block align-middle'>Don't Forget I Might be the Right Person</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center '>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />

                        <p className='text-2xl'>+2347031313872</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center '>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />

                        <p className='text-2xl'>Ogbonnayakingsike@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center '>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />

                        <p className='text-2xl'>Nö 2 Olanrewaju Kingdom-Hall Lekki-Epe Express</p>
                    </div>


                </div>

                <form action="" className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input className='contactInput' type="text" />
                        <input className='contactInput' type="text" />
                    </div>
                    <input className='contactInput' type="text" />

                    <textarea className='contactInput' />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact

// border-dashed border-5 border-sky-500