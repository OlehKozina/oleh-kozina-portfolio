"use client";
import React from "react";
import { NavigationType } from "@/types";
import SocialLinks from "./SocialLinks";

function Footer({ footer }: { footer?: NavigationType }) {
  if (!footer) return null;

  return (
    <footer className="relative text-center mt-10 bg-brand-orange py-2 bg-cover bg-center bg-no-repeat md:text-left transition-all">
      <SocialLinks socialLinks={footer.socialLinks} />
      <p className="text-center mb-0 mt-2 text-white">Oleh Kozina 2025</p>
    </footer>
  );
}

export default Footer;
