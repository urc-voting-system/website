import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react"; 
import Image from "next/image";
import Link from "next/link";

interface ShareBlogPopoverProps {
  title: string;
  url: string;
}

const ShareBlogPopover: React.FC<ShareBlogPopoverProps> = ({ title, url }) => {
  const shareLinks = [
    {
      platform: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      icon: <Facebook className="w-6 h-6" />,
    },
    {
      platform: "Twitter",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
      icon: <Twitter className="w-6 h-6" />,
    },
    {
      platform: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      icon: <Linkedin className="w-6 h-6" />,
    },
  ];

  return (
    <Popover>
      <PopoverTrigger className="text-blue-600 hover:underline cursor-pointer flex items-center">
        <Share2 className="w-4 h-4 mr-1" /> Share
      </PopoverTrigger>
      <PopoverContent className="p-6 bg-white shadow-lg rounded-lg border border-gray-300">
        <div className="flex justify-center items-center mb-4">
          <Image
            src="/logo.png" 
            alt="Logo"
            width={40}
            height={40}
            className="w-12 h-12 rounded-full object-cover" 
          />
        </div>
        <h3 className="font-semibold text-lg text-center mb-4">Share Post</h3>
        <div className="flex flex-col space-y-3">
          {shareLinks.map((link) => (
            <Link
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center gap-3 text-primary">
                <div className="flex justify-center items-center border rounded-full w-10 h-10">
                  {link.icon}
                </div>
                <span className="font-semibold text-sm">{link.platform}</span>
              </div>
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShareBlogPopover;
