import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Believe",
    description: "A collection of quotes to inspire belief in yourself and your potential.",
    link: "https://www.brainyquote.com/topics/believe-quotes",
  },
  {
    title: "Success",
    description: "Inspirational quotes to motivate you to achieve success in life and work.",
    link: "https://www.success.com/17-motivational-quotes-to-inspire-you-to-be-successful/",
  },
  {
    title: "Perseverance",
    description: "Encouraging words to remind you of the power of persistence.",
    link: "https://www.keepinspiring.me/perseverance-quotes/",
  },
  {
    title: "Courage",
    description: "Quotes that inspire courage and strength to face life’s challenges.",
    link: "https://www.goodreads.com/quotes/tag/courage",
  },
  {
    title: "Dreams",
    description: "Motivational quotes to encourage you to chase your dreams fearlessly.",
    link: "https://www.wow4u.com/dreamquotes/",
  },
  {
    title: "Growth",
    description: "Powerful quotes to fuel your journey of personal and professional growth.",
    link: "https://www.developgoodhabits.com/personal-growth-quotes/",
  },
];

