import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const projectsData = [
  {
    id: 1,
    title: "Project Curiosity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    duration: "3rd October 2021 - 14th December 2023",
    imageUrl: "/event.png", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Project Exploration",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    duration: "1st January 2023 - Present",
    imageUrl: "/event.png", // Replace with actual image URL
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div>
      <div className="hero_banner relative overflow-hidden h-[500px]">
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
