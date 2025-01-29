"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Love to learn",
    description:
      "Embodies a curious and passionate mindset. Embracing learning opens doors to growth, creativity, and discovery. It fuels resilience, enriches perspectives, and leads to boundless opportunities in life.",
    content: (
      <Image
          src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
    ),
  },
  {
    title: "Changes in Your Life Through Mentoring",
    description:
      "Mentoring transforms lives by fostering growth, clarity, and confidence. It provides real-time guidance, helping you navigate challenges, embrace opportunities, and achieve your goals. Experience the power of mentorship to evolve and succeed.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Personalized Growth",
    description:
      "Mentoring offers tailored advice and strategies to address your unique challenges, accelerating your personal and professional development",
    content: (
      <Image
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
    ),
  },

];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 w-full h-full">
      <StickyScroll content={content} />
    </div>
  );
}
