'use client'
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/Heading";
import { ImagesSliderDemo } from "@/components/ImageSlider";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { LampDemo } from "@/components/LampDemo";
import { PlaceholdersAndVanishInputDemo } from "@/components/PlaceholdersAndVanishInputDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import { TextGenerateEffectDemo } from "@/components/TextGenerateEffectDemo";
import { TextRevealCardPreview } from "@/components/TextRevealCardPreview";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmoothDemo";

export default function Home() {
  return (
    <>
      <ImagesSliderDemo></ImagesSliderDemo>
      <SectionHeading title="What we offer"></SectionHeading>
      <StickyScrollRevealDemo></StickyScrollRevealDemo>
      <SectionHeading title="Our Mentors"></SectionHeading>
      <AnimatedTestimonialsDemo></AnimatedTestimonialsDemo>
      <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
      {/* <LampDemo></LampDemo> */}
      <PlaceholdersAndVanishInputDemo></PlaceholdersAndVanishInputDemo>
      <TextGenerateEffectDemo></TextGenerateEffectDemo>
      <TextRevealCardPreview></TextRevealCardPreview>
      <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo>
      <CardHoverEffectDemo></CardHoverEffectDemo>
    </>
  );
}
