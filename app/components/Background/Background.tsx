"use client";
import React from "react";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden -mt-[--header-height]">
      <div
        className="fixed inset-0 z-under bg-gradient-to-b from-[#f4faff] to-[#e5f2ff]
"
      />
      {children}
    </div>
  );
}
