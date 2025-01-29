"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";
import SectionHeading from "./Heading";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl ">
      <TextRevealCard
        text="My Life too hard"
        revealText="Live it, Don't Leave it"
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Life is not too hard just sometime we need to comperate with it.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
