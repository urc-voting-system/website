import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="pt-14 pb-5 px-[7%] flex items-center justify-center flex-col text-primary">
      <h1 className="text-4xl font-[600] text-center text-primary mt-5">
        Welcome to the UENR <br /> Robotics Club
      </h1>
      <h2 className="capitalize my-3 text-xl tracking-wide font-[500]">
        Nursing Engineers for our society
      </h2>
      <p className="w-full md:w-[80%] lg:w-[50%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab
        perspiciatis corrupti omnis voluptas, nobis velit numquam nulla deserunt
        quod, atque iusto dolor ullam error?
      </p>
    </div>
  );
};
export default Hero;
