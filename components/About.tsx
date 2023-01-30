import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = ({ }: Props) => {
    return (
        <motion.div initial={{
            opacity: 0
        }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                }}
                src='https://res.cloudinary.com/logistics-kingsike/image/upload/v1675108473/FOOD/headshot_qsu0y2.jpg' alt=""
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]" />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a {''}<span className="underline decoration-[#F7AB0A]/50">Little </span>{" "} Background
                </h4>
                <p className="text-base">

                    I'm Kingsley. 👑 Am also known as KINGS=IKE! a Junior Full Stack Developer. Here's a little  bit of info about me...
                    I've been coding for over 3-4 years now. As a Full Stack developer, I've worked on-site and remotely both as an Internships, Stack Rep, and junior Dev with startups and large companies to help build & scale their vision and mission. Along my journey, I realized my passion existed in helping others excel and pursue their dreams as upcoming developers. 🎖 With this passion, I  know that am going to make an impact in my community and across the globe at large.
                    In addition to my technical skills, I have training in soft skills on Agile methodology using scrum,  jira, etc  for  such as effective communication, teamwork, and emotional intelligence. I understand the importance of these skills in fostering a positive and productive work environment. Also not forgetting am a programmer with passion for bodybuilding, fashion design, swimming, and music. These hobbies allow me to showcase my creativity, maintain a healthy lifestyle, and unwind from the demands of my work🥇.
                </p>
            </div>
        </motion.div>
    );
};

export default About;
