"use client";
import { div } from "motion/react-client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import SectionHeading from "./Heading";

const words = `Mentorship is the gentle hand that guides you through the darkness, counseling the whispers of wisdom that ignite your inner light. Together, they nurture growth, transforming challenges into stepping stones and turning dreams into the reality of a fuller life.
`;

export function TextGenerateEffectDemo() {
  return <div className="flex justify-center items-center flex-col">
    <SectionHeading title="Motivation"></SectionHeading>
    <TextGenerateEffect words={words} className="w-[900px] h-[11rem]"/>;
  </div>
}
