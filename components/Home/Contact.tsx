"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMesage] = useState<string>("");

  return (
    <div className="px-6 lg:mx-44 mt-20 mb-10 grid grid-cols-1 md:grid-cols-2 text-primary gap-10">
      <div className="md:pr-10">
        <h1 className="text-4xl font-bold mb-4">Get in touch with us</h1>
        <p className="text-base my-3">
          URC is an organization that deals with the practical aspects of the
          theories we learn in class.
        </p>

        <ContactInfo
          label="LOCATION"
          info="UENR, Sunyamni - Bono Region, Ghana"
        />
        <ContactInfo label="PHONE" info="+233 57 666 7777" />
        <ContactInfo label="EMAIL" info="uenrroboticsclub.innovate@gmail.com" />
      </div>

      <form className="bg-[#0c7aad]/30 p-8 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row items-start lg:gap-x-5">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="flex-1 w-full p-3 rounded-md border border-gray-300 outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 w-full p-3 rounded-md border border-gray-300 outline-none focus:border-blue-500 mt-3 lg:mt-0"
          />
        </div>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMesage(e.target.value)}
          className="w-full p-3 rounded-md border border-gray-300 outline-none focus:border-blue-500 my-3 h-44"
        />
        <button className="bg-[#0c7aad] text-white py-2 px-4 rounded-md w-full hover:bg-blue-700 transition duration-200">
          Send Message
        </button>
      </form>
    </div>
  );
};

const ContactInfo: React.FC<{ label: string; info: string }> = ({
  label,
  info,
}) => (
  <div className="w-full py-2 border-b border-gray-200 mb-4">
    <h1 className="text-xl font-semibold">{label}</h1>
    <p className="text-base">{info}</p>
  </div>
);

export default Contact;
