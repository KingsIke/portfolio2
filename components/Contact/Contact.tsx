import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    example: string,
    exampleRequired: string,
};



const Contact = ({ }: Props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <div className=' h-screen flex relative flex-col md:text-left md:flex-row max-w-7xl  justify-evenly mx-auto items-center sm: text-xs '>
            <h3 className='  absolute top-14 uppercase tracking-[20px]  text-yellow-600 text-2xl '>Contact</h3>

            <div className='flex flex-col space-y-10 pt-10 ' >

                <h4 className='text-xl sm:text-4xl font-semibold text-center leading-10'>You can contact me ☎️ <br />
                    <span className='decoration-[#F7AB0A]/50 underline inline-block align-middle'> Don't Forget I Might be the Right Person</span>
                </h4>

                <div className='space-y-4 sm:space-y-10'>
                    <div className='flex items-center space-x-1 sm:space-x-5 justify-center '>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />

                        <p className='text-xl sm:text-2xl'>+2347031313872</p>
                    </div>

                    <div className='flex items-center space-x-1 sm:space-x-5 justify-center '>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-xl sm:text-2xl'>Ogbonnayakingsike@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-1 sm:space-x-5 justify-center '>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />

                        <p className='text-xl sm:text-2xl'>Nö 2 Olanrewaju Kingdom-Hall Lekki-Epe Express</p>
                    </div>


                </div>
                {/* <form className='block sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col'> */}
                <form className=' flex space-y-2 w-fit mx-auto text-green-500 sm:text-yellow-600 sm:space-y-2 sm:flex flex-col  md:text-blue-600 lg:text-yellow-500 xl:text-yellow-600 '>
                    <div className='space-x-1 sm:flex sm:space-x-2 '>Name
                        <input className='contactInput' type="text" placeholder='Name' />
                        <input className='contactInput' type="email" placeholder='Email' />
                    </div>
                    <input className='contactInput py-0 sm:px-1 sm:py-1' type="text" placeholder='Subject' />


                    <textarea className='contactInput ' placeholder='Message' />
                    <button type='submit' className='bg-[#F7AB0A] py-4 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>


    )
}
export default Contact

// border-dashed border-5 border-sky-500