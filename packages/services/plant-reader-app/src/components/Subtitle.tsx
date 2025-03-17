import React from "react";

export default function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="subtitle flex items-center justify-center align-center gap-4">
      <h2 className="hero-text text-center text-[2rem] font-medium tracking-tight sm:text-[2rem] md:text-[2rem]">
        {children}
      </h2>
    </div>
  );
}
