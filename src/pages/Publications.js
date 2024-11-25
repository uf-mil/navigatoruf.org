import React from "react";
import Header from "../components/Header";
import documentLogo from "../assets/document.svg";
import demonstration from "../assets/demonstration_2024.png";


const PublicationCard = ({ icon, altText, title, link }) => (
  <div className="bg-gray-400 p-6 mb-6 mx-10 rounded-md shadow-md flex flex-col items-center w-52">
    <div className="text-4xl mb-4">
      <img src={icon} alt={altText} className="h-10 w-10" />
    </div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <a href={link} className="bg-gray-200 text-gray-800 px-4 py-2 border-2 border-gray-200 rounded-md hover:text-white hover:bg-gray-400 transition-all duration-300">
      Learn More
    </a>
  </div>
);

const PublicationSection = () => {
  return (
    <section className="bg-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-light mb-6 px-10 pt-2">Read our Former Papers!</h2>
      </div>
      <section className="max-w-6xl mx-auto pb-16 bg-gray-300 flex flex-wrap justify-center text-center ">
        <PublicationCard
          icon={documentLogo}
          altText="2023 Paper"
          title="2023 Paper"
          link="FILL IN LINK LATER"
        />
        <PublicationCard
          icon={documentLogo}
          altText="2022 Paper"
          title="2022 Paper"
          link="FILL IN LINK LATER"
        />
        <PublicationCard
          icon={documentLogo}
          altText="2021 Paper"
          title="2021 Paper"
          link="FILL IN LINK LATER"
        />
        <PublicationCard
          icon={documentLogo}
          altText="2020 Paper"
          title="2020 Paper"
          link="FILL IN LINK LATER"
        />
        <PublicationCard
          icon={documentLogo}
          altText="2019 Paper"
          title="2019 Paper"
          link="FILL IN LINK LATER"
        />
        <PublicationCard
          icon={documentLogo}
          altText="2018 Paper"
          title="2018 Paper"
          link="FILL IN LINK LATER"
        />
        <PublicationCard
          icon={documentLogo}
          altText="2017 Paper"
          title="2017 Paper"
          link="FILL IN LINK LATER"
        />
      </section>
    </section>
  );
};

const PublicationsPage = () => {
  return (
    <div className="bg-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="relative">
        <Header title="Publications" />
      </div>
      <section className="py-8 bg-gray-300">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-light mb-6 text-left px-10">Read Our Publications!</h2>
          <div className = "flex justify-center mb-12">
            <img src={demonstration} alt="Team Photo" className="max-w-5xl w-full rounded-lg" />
          </div>
          <p className="text-gray-600 mb-6 text-left px-10">As part of our mission, we have dedicated our time to writing Research Papers based on our experiences developing Autonomous Marine Vehicles. Through these papers, Team Navigator can share lessons learned after each RobotX to the benefit of the greater academic community, click below to read them!</p>
        <div className="flex justify-center">
          <PublicationCard
            icon={documentLogo}
            altText="2024 Paper"
            title="2024 Paper"
            link="???"
          />
        </div>
        </div>
        
        <PublicationSection/>
      </section>
    </div>
    
  );
};

export default PublicationsPage;
