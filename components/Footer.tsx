import React from "react";
import { Button } from "./ui/button";
import { InstagramIcon, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-5 flex-col md:flex-row p-5">
        {/* First Section */}
        <div className="bg-primary text-white p-10 w-full md:w-2/5 rounded-2xl text-center flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Ready to dive into the world of robotics
            </h1>
            <p className="text-sm py-5">
              Join the UENR Robotics Club and be part of a team that's pushing
              the boundaries of technology and innovation
            </p>
          </div>
          <div>
            <Button className="bg-white text-primary hover:text-white hover:border h-12 font-semibold w-full">
              Join Us
            </Button>
          </div>
        </div>

        {/* Second Section */}
        <div className="bg-primary text-white p-5 rounded-2xl w-full md:w-3/5 flex flex-col justify-between min-h-[270px]">
          <div>
            <div>
              <h1 className="text-2xl font-bold">Social Media Handles</h1>
            </div>
            <div className="bg-white  mt-2 inline-flex items-center justify-center gap-10 p-3 rounded-lg">
              <Link href="">
                <Image src="/x.svg" alt="" width={25} height={25} priority />
              </Link>
              <Link href="">
                <Image
                  src="/Linkedin.svg"
                  alt=""
                  width={25}
                  height={25}
                  priority
                />
              </Link>
              <Link href="">
                <Image src="/gram.svg" alt="" width={25} height={25} priority />
              </Link>
              <Link href="">
                <Image src="/face.svg" alt="" width={25} height={25} priority />
              </Link>
            </div>
          </div>
          <div>
            <div className="mt-5">
              <h1 className="text-lg font-semibold">Newsletter</h1>
              <p className="text-sm">
                Stay up to date on our latest innovations and achievements
              </p>
            </div>
            <div className="gap-5 flex items-center mt-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                className="md:min-w-[320px] p-3 rounded-lg text-primary"
              />
              <Button className="bg-white text-primary hover:text-white hover:border font-semibold h-12">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
