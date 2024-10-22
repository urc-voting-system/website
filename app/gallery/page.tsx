import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="hero_banner relative overflow-hidden h-[300px]">
        <Image
          src="/projectbanner.png"
          alt="Event Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Gallery</h1>
            <span className="text-sm md:text-lg">URC Memories</span>
          </div>
        </div>
      </div>

        <div>
          
        </div>
    </div>
  );
};

export default Gallery;
