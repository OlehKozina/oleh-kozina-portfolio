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

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) setHidden(true);
      else setHidden(false);
      lastScrollY = currentY;
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
        "px-2 top-0 left-0 w-full py-4 z-10 sticky transition-all",
        hidden && "-translate-y-full"
      )}
    >
      <div
        className={clsx(
          "container transition-all rounded-3xl p-4 flex justify-between"
        )}
        style={{
          background: "linear-gradient(to right, #A1C4FD, #C2E9FB)",
        }}
      >
        <div className="flex gap-16">
          <a href="#" className="z-cover relative">
            <Image src="/logo.svg" alt="logo" width={100} height={24} />
          </a>
          <Navigation
            navigation={navigation}
            activeSection={activeSection}
            isHeader
            classNames={{
              root: "hidden md:flex text-white list-none gap-16 justify-center text-lg lg:text-xl font-extrabold",
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
