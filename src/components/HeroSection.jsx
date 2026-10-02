import React from 'react'
import image1 from "../../public/image1.jpg";
import logo from "../../public/images.png"
import { Cover } from "@/components/ui/cover";
// import { Skills } from "@/components/Skills";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Link from "next/link";
import Image from "next/image";
// import styles from "./page.module.css";


function HeroSection() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px] select-none">

      <div className="max-w-[600px] w-[90%] mx-auto ">
        <Link href="/" className="font-bold text-amber-50"> <Image src={logo} width={120} height={80} className="max-h-[80px] h-full object-contain object-center" alt="logo" /></Link>
        {/* left side content  */}
        <div className="flex flex-col justify-center h-[80%]">
          <span className="text-blue-400 text-sm md:text-lg ">Its me</span>
          <h2 className="bg-clip-text text-transparent  text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-8 relative z-20 font-bold lg:font-semibold tracking-tight">
            Suman Das, <br /> Web & App <Cover> Developer</Cover>
          </h2>

          <Link href="#contact" className=" z-30 text-white  border-[#525252] border-b hover:p-[10px] hover:bg-[#5070ff2f] mr-auto text-start ease-in-out duration-200 py-2 hover:px-5 hover:rounded-full cursor-pointer">
            Contact Me &rarr;
          </Link>
        </div>

      </div>

      <div className="w-full h-full flex  bg-black mt-12 lg:mt-0">
        <Image src={image1} width={800} height={1200} className="w-full max-h-[100vh] object-contain " alt="model" />
      </div>


      {/* right side content */}

      <div className="w-[90%] mx-auto  flex flex-col items-center z-3 pt-8">
        <Link href="#contact" className="max-w-32 w-full h-[35px] flex justify-center items-center  border-1 border-[#525252] mx-auto pb-1 rounded-4xl hover:bg-neutral-800 transition">Hire me</Link>


        <h2 className=" my-4 md:my-1  bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          About me
        </h2>
        <div className="max-w-xl mx-auto text-sm md:text-base text-neutral-700 dark:text-neutral-300 text-center lg:text-start space-y-3 leading-relaxed">
          <p>
            I am a results-driven <span className="font-semibold text-neutral-900 dark:text-white">Full Stack & Mobile App Developer</span> with industry experience at <span className="text-blue-400 font-medium">Neox Info Tech</span>, specializing in creating high-performance web applications and cross-platform mobile apps.
          </p>
          <p>
            On the frontend and mobile tier, I build with <span className="font-medium text-neutral-900 dark:text-white">React Native, React.js, Next.js, TypeScript, Redux, and Tailwind CSS</span>. On the backend, I design reliable server architectures using <span className="font-medium text-neutral-900 dark:text-white">Node.js, Express.js, Prisma ORM, SQL, and MongoDB</span>.
          </p>
          <p>
            My portfolio includes production-grade solutions ranging from complex <span className="text-neutral-900 dark:text-white font-medium">Hospital Management Systems</span> and <span className="text-neutral-900 dark:text-white font-medium">Multi-Vendor Automotive Marketplaces</span> to <span className="text-neutral-900 dark:text-white font-medium">Retail POS software</span> and <span className="text-neutral-900 dark:text-white font-medium">E-commerce platforms</span>. I focus on clean architecture, scalable APIs, and delivering seamless user experiences from code to deployment on <span className="font-medium text-neutral-900 dark:text-white">AWS, Hostinger, Vercel</span>, and the <span className="font-medium text-neutral-900 dark:text-white">Google Play Console</span>.
          </p>
        </div>

        {/* <a href="" className="  mt-4 border-1 border-[#525252] mx-auto px-4 py-2 rounded-full">Download Resume</a> */}
        <div className="relative group w-fit mx-auto mt-12 mb-4">
          <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50 group-hover:opacity-100 transition duration-300 blur-sm"></div>
          <a download
            target="_blank"
            rel="noopener noreferrer"

            href="/resume.pdf"
            className="relative z-10 px-6 py-2 rounded-full  text-white bg-black transition duration-300 group-hover:border-transparent"
          >
            Download Resume
          </a>
        </div>


        {/* <Skills /> */}

      </div>

      <ShootingStars className="-z-1" />
      <StarsBackground className="-z-2" />

    </div>
  )
}

export default HeroSection