import Image from "next/image";
import Goals from "@/asserts/images/goals.svg";
import Testing from "@/asserts/images/code-testing.svg";

const Teams = () => {
  return (
    <div>
      <div className="px-[7%] bg-blue-300/60 flex items-center justify-between">
        <h3 className="font-bold text-xl">OurTeams</h3>
        <Image src={Goals} alt="Goals Image" width={300} />
      </div>
      <div className="my-5 flex items-center px-[7%] gap-5">
        <div className="flex-[2] bg-gradient-to-br from-primary to-blue-600 p-5 rounded-lg text-white h-full">
          <h2 className="text-3xl font-[700] mb-3">
            Software Development Team
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quis illo numquam dolore, cumque dolorem suscipit
            libero ipsam quaerat labore?
          </p>
        </div>
        <div className="flex-[1] flex items-center justify-center bg-primary rounded-lg p-5">
          <Image src={Testing} alt="testing" width={300} />
        </div>
      </div>
    </div>
  );
};
export default Teams;
