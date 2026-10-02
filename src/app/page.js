
import React from "react";

import HeroSection from "@/components/HeroSection";
import { Services } from "@/components/Services";
import { TimelineSection } from "@/components/TimelineSection";
import { Projects } from "@/components/Projects";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";


export default function Home() {



  return (
    <>
    <Navbar />
     <HeroSection />
     <Services />
     <Projects />
     <TimelineSection />
     <MacbookScroll 
       src="/screenshot.png"
       title="My Portfolio Project"
       showGradient={true}
       
     />
     <Contact  />
     
     


     
     
    </>



  );
}
