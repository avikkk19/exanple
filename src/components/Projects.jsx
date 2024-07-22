import React from "react";
import Section from "./Section";
import Headings from "./Headings";
import { benefits } from "../constants";
import Arrow from "../assets/svg/ClipPath";
import { BottomLine } from "./design/Hero";

const Projects = () => {
  return (
    <Section>
      <div className="container mt-2 relative z-2 lg:-mb-20" id="projects">
        <Headings className="" title="Our projects" />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <a
              href={item.href} // Link to redirect
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: item.backgroundUrl
                  ? `url(${item.backgroundUrl})`
                  : "none",
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  onClick
                </p>
                <div className="flex items-center mt-auto"></div>
              </div>
            </a>
          ))}
        </div>
        <div className="w-[19rem] max-lg:w-full h-2 px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"></div>
      </div>
    </Section>
  );
};

export default Projects;
