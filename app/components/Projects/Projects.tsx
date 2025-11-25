"use client";
import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import { PortableText, PortableTextBlock } from "@portabletext/react";

const Projects = ({
  heading,
  projectCards,
}: {
  heading?: string;
  projectCards?: {
    name?: string;
    link?: string;
    image?: string;
    content?: PortableTextBlock;
  }[];
}) => {
  return (
    <section className="py-10 px-6" id="web-projects">
      <div className="container bg-button rounded-3xl bg-opacity-80 py-10">
        <Heading
          heading={heading}
          className="mb-6 mx-auto text-center md:mb-10 whitespace-pre-line"
        />
        <div className="xs:grid-cols-2 grid grid-cols-1 gap-5 md:grid-cols-3">
          {projectCards?.length &&
            projectCards?.map((card) => (
              <a
                href={card.link}
                className="hover:scale-105 transition-transform shadow-lg rounded-xl flex h-full w-full flex-col overflow-hidden bg-button text-white"
                key={card.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {card.image && (
                  <Image
                    src={card.image}
                    width={300}
                    height={150}
                    alt="projectImage"
                    className="relative aspect-[5/3] w-full shrink-0 grow-0 basis-auto rounded-t-xl sm:aspect-1 overflow-hidden border-8 border-button md:aspect-[5/3]"
                  />
                )}
                <div className="flex flex-col h-full px-2 py-2 sm:px-3 md:py-3 justify-between">
                  <div className="flex flex-col flex-nowrap gap-2 px-2 py-2 sm:px-3 md:py-3">
                    <h3 className="text-xl"> {card.name}</h3>
                    {card.content && <PortableText value={card.content} />}
                  </div>
                  {card.link && (
                    <button className="text-left border-brand-orange bg-brand-orange border-2 p-2 rounded-xl hover:shadow-2xl transition-all hover:scale-105 w-min whitespace-nowrap">
                      Go to website
                    </button>
                  )}
                </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
