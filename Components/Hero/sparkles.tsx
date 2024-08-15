import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Hero from "./Hero";

export function SparklesPreview() {
  return (
    <div className="h-screen max-md:h-auto relative w-full bg-[#03346E] flex flex-col items-center justify-center pb-10">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#ffffff"
        />
      </div>
      <h1 className="text-white relative z-10 w-full h-full ">
        <Hero />
      </h1>
    </div>
  );
}
