"use client";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import React from "react";
import Heading from "../Heading";
import Illustration from "./Illustration";

interface MediaWithTextProps {
  _id?: string;
  heading?: string;
  content?: PortableTextBlock;
  image?: string;
  horizontalImage?: string;
  skills?: string[];
  pdf?: string;
}

function MediaWithText({
  heading,
  content,
  skills,
  image,
  pdf,
}: MediaWithTextProps) {
  console.log("pdf", pdf);
  return (
    <section
      className="my-10 md:my-20 text-sm md:text-base relative overflow-hidden scroll-mt-10 max-md:scroll-mt-16 px-6"
      id="about-me"
    >
      <div className="container relative bg-button rounded-3xl bg-opacity-80 py-10 text-white">
        <div className="flex flex-col md:flex-row items-start max-md:items-center justify-center gap-10 md:gap-0 md:space-x-10 text-base md:text-xl">
          <div className="max-w-[35rem] lg:max-w-[40rem] flex flex-col gap-4">
            <Heading
              heading={heading}
              className="mb-6 mx-auto text-center md:mb-10 whitespace-pre-line"
            />
            <div className="[&>p>a]:underline [&>p>a]:transition-colors [&>p>a:hover]:text-brand-orange">
              {content && <PortableText value={content} />}
            </div>

            {pdf && (
              <a
                href={pdf}
                download
                className="border-brand-orange bg-brand-orange border-2 p-2 rounded-xl hover:shadow-2xl transition-all hover:scale-105 w-min whitespace-nowrap"
              >
                Download CV
              </a>
            )}
            <div>
              <p>My skills:</p>
              <div className="flex gap-2 flex-wrap">
                {!!skills?.length &&
                  skills.map((skill) => (
                    <div
                      key={skill}
                      className="border-brand-orange border-2 p-2 rounded-xl text-lg"
                    >
                      {skill}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="max-w-[25rem] w-full hidden md:block">
            <Illustration
              image={image}
              className="rounded-3xl"
              width={450}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaWithText;
