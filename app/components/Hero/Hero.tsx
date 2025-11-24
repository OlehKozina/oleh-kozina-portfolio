"use client";
import React from "react";
import Heading from "../Heading";
import { PortableText } from "next-sanity";
import Illustration from "../MediaWithText/Illustration";
import { HeroType } from "@/types/Hero";

const Hero = ({ hero }: { hero: HeroType }) => {
  if (!hero) return null;

  const { heading, content, image, jobName } = hero;
  return (
    <section
      className="relative flex items-center overflow-hidden mt-[10rem] text-base md:text-xl"
      id="hero"
    >
      <div className="container flex justify-center gap-10 h-full items-center bg-button p-6 rounded-3xl text-white">
        <div className="max-w-[35rem] lg:max-w-[40rem] flex flex-col gap-4">
          <p className="border-brand-orange border-2 p-2 rounded-xl w-min whitespace-nowrap">
            {jobName}
          </p>
          <Heading heading={heading} className="whitespace-pre-line" />
          {content && (
            <div className="opacity-50">
              <PortableText value={content} />
            </div>
          )}
          <a href="#about-me">
            <button className="border-brand-orange bg-brand-orange border-2 p-2 rounded-xl hover:shadow-2xl transition-all hover:scale-105">
              Learn More
            </button>
          </a>
        </div>
        <div className="max-w-[18rem] w-full hidden md:block !h-full">
          <Illustration
            image={image}
            className="rounded-t-full"
            width={250}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
