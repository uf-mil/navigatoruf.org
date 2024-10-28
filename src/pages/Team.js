import React from "react";
import Header from "../components/Header";

import MemberCard from "../components/MemberCard";

import memberImages from "../assets/members";
import advisorImages from "../assets/advisors";

const Leadership = () => {
  const members = [
    { image: memberImages["cameron.jpeg"], name: 'Cameron Brown', role: 'Team Lead', degree: 'BS, Computer Science', graduationYear: 'Spring 2025'},
    { image: memberImages["lorant.png"], name: 'Lorant Domokos', role: 'Mechanical Lead', degree: 'BS, Mechanical Engineering', graduationYear: 'Spring 2025'},
    { image: memberImages["daniel.jpeg"], name: 'Daniel Parra', role: 'Software Lead', degree: 'BS, Computer Science', graduationYear: 'Spring 2026'},
    { image: memberImages["adrian.png"], name: 'Adrian Fernandez', role: 'Electrical Lead', degree: 'BS, Electrical Engineering', graduationYear: 'Fall 2024'},
    { image: memberImages["adam_h.png"], name: 'Adam Hamdan', role: 'Mechanical Lead, Operations', degree: 'BS, Mechanical Engineering', graduationYear: 'Spring 2026'},
    { image: memberImages["keith.jpeg"], name: 'Keith Khadar', role: 'Software Lead', degree: 'BS, Computer Engineering', graduationYear: 'Spring 2025' },
    { image: memberImages["kayleigh.jpg"], name: 'Kayleigh Beron', role: 'Electrical Lead, Operations', degree: 'BS, Computer Engineering', graduationYear: 'Fall 2024'},
    { image: memberImages["adam_m.jpeg"], name: 'Adam McAleer', role: 'Mechanical Lead, Mechanisms', degree: 'BS, Mechanical Engineering', graduationYear: 'Fall 2024'},
    { image: memberImages["andrew.png"], name: 'Andrew Knee', role: 'Software Lead', degree: 'MS, Computer Science', graduationYear: 'Fall 2024'},
    { image: memberImages["lester.jpg"], name: 'Lester Bonilla', role: 'Drone Lead', degree: 'BS, Computer Engineering', graduationYear: 'Spring 2025'},
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 bg-gray-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Leadership</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            image={member.image}
            name={member.name}
            role={member.role}
            degree={member.degree}
            graduationYear={member.graduationYear}
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
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
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
        <Header title="Meet the Team" subTitle="2024 Season"/>
      </div>
      <Leadership />
      <Advisors />
    </div>
  );
};

export default TeamPage;
