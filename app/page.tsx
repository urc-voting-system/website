import React from "react";
import Hero from "@/components/Home/Hero";
import Teams from "@/components/Home/Teams";
import Contact from "@/components/Home/Contact";
import LeadershipCard from "@/components/ui/LeadersCard";
import EventCard from "@/components/EventCard";
import { eventData } from "@/data/data";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Hero />
        <Teams />

        <div>
          <div className="px-[7%] bg-[#0c7aad]/30 py-16 mt-10">
            <h3 className="font-bold text-2xl">Our Executive Board</h3>
            <span>2024/2025</span>
          </div>
          <LeadershipCard />
        </div>

        <div className="px-[7%] bg-[#0c7aad]/30 py-16 mt-10">
          <h3 className="font-bold text-2xl">Upcoming Events</h3>
          <span></span>
        </div>
        <div className="lg:mx-44">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
            {eventData.slice(0, 3).map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Link href="/events" className=" underline">
              Show Moret
            </Link>
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
