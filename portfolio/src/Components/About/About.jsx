import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const About = () => {
  const [isCollapssed, setIsCollapssed] = useState(true);
  return (
    <section className="max-w-[1300px] mx-auto px-5" id="about">
      <div className="flex flex-col gap-6 max-w-[900px] mx-auto">
        <div className="w-fit mx-auto">
          <h2 className=" text-2xl">About Me</h2>
          <hr className="border-none h-1 w-20 bg-primary rounded-full mx-auto mt-1" />
        </div>
        <div
          className={`opacity-50 transition-all duration-300 ${isCollapssed ? "line-clamp-4" : ""} `}
        >
          <p>
            I’m Eyob Alayu, a young third-year Information Technology student at
            Bahir Dar University with a strong interest in full-stack web
            development. I’m currently seeking an internship opportunity where I
            can apply my skills, gain real-world experience, and continue
            growing as a developer. I enjoy building projects and exploring new
            technologies, and I’m deeply passionate about improving my abilities
            every day through consistent learning and practice.
          </p>
          <br />
          <p>
            I take real pleasure in solving problems, creating user-friendly
            applications, and turning ideas into working, meaningful solutions.
            Thank you for taking the time to visit my portfolio.it truly means a
            lot. I hope my work reflects my dedication and passion for this
            field, and I look forward to opportunities where I can learn,
            contribute, and grow further.
          </p>
        </div>
        <div className="flex justify-center ">
          <button
            onClick={() => setIsCollapssed(!isCollapssed)}
            className="border border-primary py-0.5 px-3 rounded-lg text-secondary flex gap-1"
          >
            <span>{isCollapssed ? "More" : "Less"}</span>
            <span>
              <ChevronDown className={`w-4 ${!isCollapssed? "": "transform -rotate-90"} transition-all duration-300`}/>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
