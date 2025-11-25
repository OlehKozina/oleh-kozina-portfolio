"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function MarqueeWithText({
  projects,
}: {
  projects?: { image?: string; link?: string }[];
}) {
  if (!projects) return null;
  return (
    <section className="my-10">
      <Marquee gradient={false} speed={50} className="py-10">
        {!!projects?.length &&
          projects.map((item, i) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className="flex items-center mr-8 hover:scale-105 transition-transform border-button bg-button p-4 rounded-3xl overflow-hidden bg-opacity-80"
            >
              <Image
                className="h-full rounded-3xl"
                src={item?.image || ""}
                width={400}
                height={400}
                style={{ objectFit: "contain" }}
                alt="logo"
              />
            </a>
          ))}
      </Marquee>
    </section>
  );
}

export default MarqueeWithText;
