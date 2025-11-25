"use client";
import React, { useState, useEffect } from "react";
import { NavigationType } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Navigation from "../Navigation";
import SocialLinks from "../Footer/SocialLinks";

const Header = ({ header }: { header: NavigationType }) => {
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) setHidden(true);
      else setHidden(false);
      lastScrollY = currentY;
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            if (id === "hero") {
              setActiveSection(null);
            } else setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  if (!header) return null;
  const { navigation } = header;

  return (
    <header
      className={clsx(
        "top-0 left-0 w-full z-10 sticky transition-all bg-brand-orange",
        hidden && "-translate-y-full",
        scrolled && "!shadow-lg"
      )}
    >
      <div
        className={clsx("container transition-all p-2 flex justify-between")}
      >
        <div className="flex gap-8 md:gap-16">
          <a
            href="#"
            className="z-cover relative p-2 rounded-xl transition-all hover:shadow-lg hover:scale-105"
          >
            <Image src="/logo.svg" alt="logo" width={100} height={24} />
          </a>
          <Navigation
            navigation={navigation}
            activeSection={activeSection}
            isHeader
            classNames={{
              root: "hidden sm:flex text-white list-none gap-8 md:gap-16 justify-center text-lg lg:text-xl font-extrabold",
            }}
          />
        </div>

        <SocialLinks
          socialLinks={header.socialLinks}
          classNames={{ link: "text-white" }}
        />
      </div>
    </header>
  );
};

export default Header;
