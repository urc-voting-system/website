import { galleryData } from "@/data/data";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div>
      {/* Hero banner */}
      <div className="hero_banner relative overflow-hidden h-[300px]">
        <Image
          src="/projectbanner.png"
          alt="Event Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Gallery</h1>
          <span className="text-sm md:text-lg">URC Memories</span>
        </div>
      </div>

      {/* Dynamic gallery sections */}
      <div className="container max-w-screen-lg mx-auto px-4 py-8">
        {galleryData.map((section, index) => (
          <section key={index} className="mb-12">
            {/* Section title */}
            <h2 className="text-lg md:text-xl font-semibold mb-6">
              {section.title}
            </h2>

            {/* Section images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.images.map((image, idx) => (
                <article
                  key={idx}
                  className="relative aspect-w-16 aspect-h-9 h-64 overflow-hidden rounded-lg border shadow-md"
                >
                  <Image
                    src={image}
                    alt={`${section.title} Image ${idx + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                    // loading="lazy"
                    priority
                  />
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
