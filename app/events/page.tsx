import Eventcarousel from "@/components/Eventcarousel";
import Image from "next/image";
import React from "react";

const Events = () => {
  return (
    <div>
      <div className="hero_banner relative overflow-hidden h-[500px]">
        <Image
          src="/event.jpg"
          alt="Event Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-auto"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div className="">
            <h1 className="text-3xl md:text-4xl font-bold ">All Events</h1>
            <span className="text-sm md:text-lg">
              Home {">"}
              {">"} Events
            </span>
          </div>
        </div>
        {/* <div className="absolute inset-0 bg-primary opacity-50 "></div> */}
      </div>
      <div className="">
        <Eventcarousel />
      </div>
    </div>
  );
};

export default Events;
