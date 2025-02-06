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
import { socket } from "../socket";
import { useEffect, useState } from "react";

export default function Home() {

  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

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
