import React from "react";
import Navbar from "../components/Navbar";

import MemberCard from "../components/MemberCard";

import background from "../assets/hawaii_resting.jpg";
import teamPhoto from "../assets/robotx_2022_team_1.jpg";

import memberImages from "../assets/members";
import advisorImages from "../assets/advisors";

function Header() {
  return (
    <header
      className="relative h-[667px] bg-cover bg-center"
      style={{
        backgroundImage: `url('${background}')`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
      }}
    >
      <Navbar />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-7xl font-bold">Meet the Team</h1>
        <h2 className="text-3xl font-bold">2024 Season</h2>
      </div>
    </header>
  );
}

const Leadership = () => {
  const members = [
    {
      image: memberImages["cameron.jpeg"],
      name: "Cameron Brown",
      role: "Team Lead",
    },
    {
      image: memberImages["lorant.png"],
      name: "Lorant Domokos",
      role: "Mechanical Lead",
    },
    {
      image: memberImages["daniel.jpeg"],
      name: "Daniel Parra",
      role: "Software Lead",
    },
    {
      image: memberImages["adrian.png"],
      name: "Adrian Fernandez",
      role: "Electrical Lead",
    },
    {
      image: memberImages["adam_h.png"],
      name: "Adam Hamdan",
      role: "Mechanical Lead, Operations",
    },
    {
      image: memberImages["keith.jpeg"],
      name: "Keith Khadar",
      role: "Software Lead",
    },
    {
      image: memberImages["kayleigh.jpg"],
      name: "Kayleigh Beron",
      role: "Electrical Lead, Operations",
    },
    {
      image: memberImages["adam_m.jpeg"],
      name: "Adam McAleer",
      role: "Mechanical Lead, Mechanisms",
    },
    {
      image: memberImages["andrew.png"],
      name: "Andrew Knee",
      role: "Software Lead",
    },
    {
      image: memberImages["lester.jpg"],
      name: "Lester Bonilla",
      role: "Drone Lead",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 bg-gray-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Leadership</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            image={member.image}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </section>
  );
};

const Advisors = () => {
  const advisors = [
    { image: advisorImages["schwartz.jpg"], name: 'Dr. Eric Schwartz', role: 'MIL Director' },
    { image: advisorImages["crane.jpg"], name: 'Dr. Carl Crane', role: 'Professor, MAE' },
    { image: advisorImages["andres.png"], name: 'Andres Pulido', role: 'PhD Candidate, MAE' },
  ];

  return (
    <section className="max-w-6xl mx-auto pb-16 bg-gray-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Advisors</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {advisors.map((member, index) => (
          <MemberCard key={index} image={member.image} name={member.name} role={member.role} />
        ))}
      </div>
    </section>
  );
};

const TeamPage = () => {
  return (
    <div className="bg-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="relative">
        <Header />
      </div>
      <Leadership />
      <Advisors />
    </div>
  );
};

export default TeamPage;
