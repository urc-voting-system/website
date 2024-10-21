import Image from "next/image";
import React from "react";

// Dynamic Data for Leaders
const leaders = [
  {
    id: 1,
    name: "John Doe",
    position: "President",
    department: "Electrical & Electronic Engineering",
    level: "L400",
    image: "/profiles/scot.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Vice President",
    department: "Mechanical Engineering",
    level: "L300",
    image: "/profiles/emma.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    position: "Vice President",
    department: "Mechanical Engineering",
    level: "L300",
    image: "/profiles/alex.jpg",
  },
  {
    id: 4,
    name: "Jane Smith",
    position: "Vice President",
    department: "Mechanical Engineering",
    level: "L300",
    image: "/profiles/ken.jpg",
  },
  {
    id: 5,
    name: "Jane Smith",
    position: "Vice President",
    department: "Mechanical Engineering",
    level: "L300",
    image: "/profiles/sec.jpg",
  },
  {
    id: 6,
    name: "Jane Smith",
    position: "Vice President",
    department: "Mechanical Engineering",
    level: "L300",
    image: "/profiles/joe.jpg",
  },
];

const About = () => {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto space-y-12">
      {/* Section Title */}
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">
          About Us
        </h1>
      </div>

      {/* Who We Are Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-700">Who We Are</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          UENR Robotics Club is a club formed by students of the University Of
          Energy and Natural Resources in 2019. The mission of the club is to
          develop student interest in science, technology, engineering, and math
          (STEM) through robotics. UENR Robotics Club has members with rare
          insights and expertise in fields like 3D design and printing, app and
          web development, hardware programming, and PCB design necessary for
          developing robotics and IoT systems.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-700">Leadership</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="flex flex-col items-center space-y-2"
            >
              <Image
                src={leader.image}
                alt={`${leader.name}'s image`}
                width={200}
                height={200}
                priority
                className="rounded-lg object-cover h-52 w-auto bg-primary"
              />
              <div className="pt-4 text-center">
                <h3 className="text-xl font-bold text-primary">
                  {leader.name}
                </h3>
                <h4 className=" font-semibold text-gray-900">
                  {leader.position}
                </h4>
                <p className="text-base text-gray-500">{leader.department}</p>
                <span className="text-sm text-gray-500">{leader.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
