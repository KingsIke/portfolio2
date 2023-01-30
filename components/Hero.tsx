import Link from "next/link";
// import Link from "next/dist/client/link";
// 1,10
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle/BackgroundCircle";

type Props = {};

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, Am a Software Engineer ",
            "My motto: A Little Coding",
            "A Better Tomorrow",
        ],
        loop: true,
        delaySpeed: 1700,
    });
    return (
        <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircle />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover "
                src="https://res.cloudinary.com/logistics-kingsike/image/upload/v1675074000/FOOD/WhatsApp_Image_2023-01-30_at_10.57.35_AM_tsfess.jpg"
                alt="Kings=Ike"
            />
            <div className="z-20 ">
                <h2 className=" uppercase text-gray-500 pb-2 tracking-[15px] text-l font-bold ">
                    {" "}
                    OGBONNAYA KINGSLEY
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>

                    <Link href='#experience'>
                        <button className="heroButton">Experience</button>
                    </Link>

                    <Link href='#skill'>
                        <button className="heroButton">Skills</button>
                    </Link>

                    <Link href='project'>
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
