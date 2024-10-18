import EventCard from "@/components/EventCard";
import Eventcarousel from "@/components/Eventcarousel";
import { eventData } from "@/data/data";
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
      <div className="py-10">
        <Eventcarousel />
      </div>
      <div className="lg:mx-44">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
          {eventData.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
