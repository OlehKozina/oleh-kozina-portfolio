"use client";
import React from "react";
import { NavigationType } from "@/types";
import SocialLinks from "./SocialLinks";

function Footer({ footer }: { footer?: NavigationType }) {
  if (!footer) return null;

  return (
    <footer className="relative text-center mt-[20rem] py-2 bg-cover bg-opacity-20 bg-center bg-no-repeat md:text-left transition-all">
      <SocialLinks socialLinks={footer.socialLinks} />
      <p className="text-center mt-2">Oleh Kozina 2025</p>
    </footer>
  );
}

export default Footer;
