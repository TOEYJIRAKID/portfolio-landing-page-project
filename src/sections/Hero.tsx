"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import grainImage from "@/assets/images/grain.jpg";
import { TypeAnimation } from 'react-type-animation';
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Download from "@/assets/icons/download.svg";
import memojiImage from "@/assets/images/memoji-computer.png";

export const HeroSection = () => {

  const [isActive] = useState(true);

  const handleEmailClick = () => {
    window.location.href = "mailto:jirakid2002@gmail.com";
  };

  return (
    <section id="home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})`, }}></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind laptop" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className={`${isActive ? "bg-green-500" : "bg-red-500"} size-2.5 rounded-full relative`}>
              <div className={`${isActive ? "bg-green-500 animate-ping-large" : "bg-red-500 animate-ping-large"} absolute inset-0 rounded-full`}></div>
            </div>
            <div className="text-sm font-medium">{isActive ? "Available for new projects" : "Not available for new projects"}</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="text-center mt-8">
            <TypeAnimation
              className="font-orbitron text-3xl md:text-5xl tracking-wide"
              sequence={[
                "Hello, World!",
                1800,
                "I'm Toey",
                () => { },
                2500,
                "I'm Developer",
                () => { },
                2500,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={40}
              deletionSpeed={35}
            />
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">I specialize in developing practical and high-performance web applications. Let’s discuss your next project.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="https://drive.google.com/file/d/15q-qOtlov-qq69oddgraGPTsVgem1QO6/view?usp=sharing"
            target="_blank"
            rel="CV Links"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Download CV</span>
            <Download className="size-4" />
          </a>
          <button onClick={handleEmailClick} className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};
