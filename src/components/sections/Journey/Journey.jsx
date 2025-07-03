import { useState } from "react";
import JourneyItem from "./JourneyItem";
import { educationData } from "/src/data/educationData.js";
import { workData } from "/src/data/workData.js";

const Journey = () => {
  const [activeTab, setActiveTab] = useState("education");
  const data = activeTab === "education" ? educationData : workData;

  return (
    <section id="journey" className="mx-auto max-w-6xl px-6 py-24">
      <header className="mb-8">
        <div className="mb-6">
          <h2 className="text-heading mb-[6px] text-4xl font-bold transition-colors duration-300">
            My Journey
          </h2>
          <div className="bg-primary h-[5px] w-10 rounded"></div>
        </div>

        <p className="text-foreground max-w-2xl">
          A timeline of my education and hands-on work experience in web
          development.
        </p>
      </header>

      {/* Tabs */}
      <div className="mb-10 flex gap-4">
        {["education", "work"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer rounded-lg px-4 py-[10px] text-base font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md ${
              activeTab === tab
                ? "bg-primary text-main-btn"
                : "border-outline text-heading hover:bg-primary hover:text-main-btn hover:border-primary border-2"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="border-primary/30 relative ml-4 border-l-2">
        {data.map((item, index) => (
          <JourneyItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Journey;
