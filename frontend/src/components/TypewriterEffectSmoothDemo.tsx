"use client";
import { useRouter } from "next/navigation";
import SectionHeading from "./Heading";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Take",
    },
    {
      text: "Advice From",
    },
    {
      text: "Us",
    },
    {
      text: "with",
    },
    {
      text: "Insight Circle",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <SectionHeading title="Connect with Us"></SectionHeading>
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
        onClick={() => {
          router.push('/services')
        }}
        className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button 
        onClick={() => {
          router.push('/auth/signup')
        }} className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
