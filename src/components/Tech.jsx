import React, { useEffect } from "react";
import Section from "./Section";
import { BottomLine } from "./design/Hero";

const TwitterTimelineWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("Twitter widgets script loaded successfully.");
    };

    script.onerror = () => {
      console.error("Error loading Twitter widgets script.");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Section id="technews">
      <div className="container relative mx-auto p-4">
        <h1 className="text-3xl font-bold mb-5">Twitter Timeline</h1>
        <a
          className="twitter-timeline"
          href="https://twitter.com/F1?ref_src=twsrc%5Etfw"
          data-theme="light" // Optional: Customize appearance
          data-link-color="#1DA1F2" // Optional: Customize link color
          >
          Tweets by @enzofordddddd , @F1
        </a>
            
      </div>
            <BottomLine/>
    </Section>
  );
};

export default TwitterTimelineWidget;
