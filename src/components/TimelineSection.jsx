import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import { Cover } from "./ui/cover";

export function TimelineSection() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1rem] lg:text-[1.8rem] font-[600]">
              <Cover>Full Stack Developer</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">
              Neox Info Tech — Mecheda </span><br />
            <span className="text-blue-400 my-[10px]"> Aug 2024 – Present </span>

            <ul className="mb-8 mt-2 space-y-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              <li>• Developed cross-platform mobile apps using React Native and responsive web applications with React.js, HTML5, CSS3, and JavaScript.</li>
              <li>• Collaborated with design and backend teams to build scalable, user-friendly mobile and web solutions.</li>
              <li>• Wrote clean, reusable code using React Native, React, Next.js, and Git, following best development practices.</li>
              <li>• Integrated REST APIs and managed application state, gaining hands-on experience in component-based application development.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1rem] lg:text-[1.8rem] font-[600]">
              <Cover>Sister Nivedita University</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">Sept 2022 - July 2024</span>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Master of Computer Applications
            </p>
          </div>

          <div>
            <h4 className="text-[#f4f4f4] text-[1rem] lg:text-[1.8rem] font-[600]">
              <Cover>Calcutta University </Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">Aug 2019 - Nov 2022</span>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Bachelor of Science
            </p>
          </div>

          <div>
            <h4 className="text-[#f4f4f4] text-[1rem] lg:text-[1.8rem] font-[600]">
              <Cover>Chatra Kunja Rani Bani Bhawan</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">2017 - 2019</span>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Class 12th
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip" id="timeline">
      <Timeline data={data} />
    </div>
  );
}
