"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import {socket} from "@/socket"
import { useRouter } from "next/navigation";

interface propTypes  {
    id: string;
    name: string;
    bio: string;
    expertIn: string;
    image: string;    
}

export function ThreeDCardDemo({id, name, bio, expertIn, image}: propTypes) {

  const router = useRouter()

  useEffect(() => {
    socket.on("user-joined", (userId) => {
      console.log(userId)
    })
  }, [])

  function handleJoinUser() {
    socket.emit("join-user", id)
    router.push(`/${id}`)
  }

  return (
    <CardContainer className="inter-var">

      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {bio}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {expertIn}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            onClick={handleJoinUser}
          >
            Chat
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
