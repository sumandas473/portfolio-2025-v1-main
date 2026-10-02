import { cn } from "@/lib/utils";
import {
  IconDeviceMobile,
  IconLayoutDashboard,
  IconServer,
  IconTools,
} from "@tabler/icons-react";
import { Cover } from "./ui/cover";

export function Services() {
  const features = [
    {
      title: "Mobile",
      description:
        "React Native, TypeScript, Redux, Context API, Firebase/Firestore, REST APIs, Google Play Console",
      icon: <IconDeviceMobile className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Frontend",
      description:
        "React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Vite",
      icon: <IconLayoutDashboard className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Backend & Database",
      description:
        "Node.js, Express.js, Prisma ORM, SQL, MongoDB, AWS, Hostinger",
      icon: <IconServer className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Tools",
      description:
        "Git, GitHub, Postman, Figma, Vercel, Netlify, VS Code",
      icon: <IconTools className="w-8 h-8 text-emerald-400" />,
    },
  ];

  return (
    <div className="mt-[150px] flex flex-col" id="skills">
      <div className="px-8 flex flex-col justify-center items-center">
        <h2 className="mx-auto text-white text-xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>My Skills</Cover>
        </h2>
        <p className="max-w-xl text-[1rem] text-center md:text-lg text-neutral-700 dark:text-neutral-400 my-4">
          A versatile blend of mobile, frontend, backend, and DevOps expertise—equipped to build fast, modern, and scalable applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature dark:border-neutral-800",
        "border-b last:border-b-0 md:border-b-0",
        "lg:border-r",
        index === 0 && "lg:border-l dark:border-neutral-800",
        (index === 0 || index === 2) && "md:border-l dark:border-neutral-800",
        (index === 1 || index === 3) && "md:border-r dark:border-neutral-800",
        index < 2 && "md:border-b dark:border-neutral-800",
        "lg:border-b-0"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
