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
      className="relative flex items-center overflow-hidden mt-[10rem]"
      id="hero"
    >
      <div className="container flex justify-center gap-10 h-full items-center">
        <div className="max-w-[35rem] lg:max-w-[40rem]">
          <p className="text-brand-default">{jobName}</p>
          <Heading
            heading={heading}
            className="mb-6 mx-auto text-center md:mb-10 whitespace-pre-line"
          />
          {content && (
            <div className="mb-5 opacity-50">
              <PortableText value={content} />
            </div>
          )}
          <button className="border-black border-2 p-2 rounded-xl hover:opacity-60 transition-all">
            Learn More
          </button>
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
