"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar flex items-center justify-between px-5 md:px-20 py-1 bg-neutral bg-opacity-35 backdrop-blur-xl fixed w-full z-10">
        <div className="logo w-16">
          {/* Replace the Image component with Next.js optimized Image */}
          <Image src="/logo.png" alt="Logo" width={64} height={64} />
        </div>
        <div className="navlinks hidden md:flex gap-10">
          <ul className="flex gap-10">
            <li className="hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:underline">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="hover:underline">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:underline">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:underline">
              <Link href="/events">Events</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black text-2xl duration-300"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="mobile-menu md:hidden  bg-opacity-35 backdrop-blur-xl w-full px-5 py-2 fixed top-16 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col gap-4">
            <li className="">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="">
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="">
              <Link href="/gallery" onClick={toggleMenu}>
                Gallery
              </Link>
            </li>
            <li className="">
              <Link href="/projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li className="">
              <Link href="/blog" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li className="">
              <Link href="/events" onClick={toggleMenu}>
                Events
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
