import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/data";
import Image from "next/image";
import React from "react";

const Projects = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
            <span className="text-sm md:text-lg">
              Home {">"} {">"} projects
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 lg:mx-44">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col  items-center md:flex-row mb-8"
          >
            <div className="relative flex-shrink-0 w-full md:w-1/3 h-64 overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:pl-4 mt-3 md:mt-0">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <p className="mt-2 font-semibold">Duration: {project.duration}</p>
                <Button className="mt-4  bg-primary text-white rounded-lg w-full md:max-w-[320px]">
                  Learn More
                </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
