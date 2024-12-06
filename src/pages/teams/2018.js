import React from "react";
import Header from "../../components/Header";

import MemberCard from "../../components/MemberCard";

import memberImages from "../../assets/members";
import advisorImages from "../../assets/advisors";

const Leadership = () => {
  const members = [
    {
      image: memberImages["matt_griessler.jpg"],
      name: "Matt Griessler",
      role: "Team Lead",
    },
    {
      image: memberImages["kevin_allen.jpg"],
      name: "Kevin Allen",
      role: "Software Lead",
      degree: "BS, Computer Science",
      website: "https://kev.wiki"
    },
    {
      image: memberImages["kipling_cohen.jpg"], 
      name: "Kipling Cohen",
      role: "Mechanical Lead",
    },
    {
      name: "Alan Albritton",
      role: "Mechanical Lead",
    },
    {
      name: "Juan Mejia",
      role: "Mechanical Lead",
    },
    {
      name: "Nicholas Suhlman",
      role: "Software Lead",
    },
    {
      name: "David Zobel",
      role: "Electrical Lead",
    },
    {
      name: "Rosemond Fabien",
      role: "Electrical Lead",
    },
    {
      name: "Marshall Rawson",
      role: "Software Lead",
    },
    {
      name: "Jaxon Brown",
      role: "Software Lead",
    },
    {
      name: "Ria Pendon",
      role: "Mechanical Lead",
    },
    {
      image: memberImages["daniel_volya.jpg"],
      name: "Daniel Volya",
      role: "Software/Paper Lead",
    },
    {
      name: "Nicholas Fata",
      role: "Website Designer/Assistant",
    },
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
            linkedIn={member.linkedIn}
            website={member.website}
          />
        ))}
      </div>
    </section>
  );
};

const Advisors = () => {
  const advisors = [
    {
      image: advisorImages["schwartz.jpg"],
      name: "Dr. Eric Schwartz",
      role: "MIL Director",
      linkedIn: "eric-schwartz-4231924",
      website: "https://mil.ufl.edu/ems/"
    },
    {
      image: advisorImages["crane_2016.jpg"],
      name: "Dr. Carl Crane",
      role: "Faculty Advisor",
      linkedIn: "carl-crane-47839574",
      website: "https://mae.ufl.edu/people/profiles/carl-crane/"
    },
    {
      image: advisorImages["shannon.jpg"],
      name: "Shannon Ridgeway",
      role: "Faculty Advisor",
      website: "https://mae.ufl.edu/people/faculty/primary/instructional-professors/profiles/shannon-ridgeway/"
    },
  ];

  return (
    <section className="max-w-6xl mx-auto pb-16 bg-gray-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Advisors</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {advisors.map((member, index) => (
          <MemberCard
            key={index}
            image={member.image}
            name={member.name}
            role={member.role}
            linkedIn={member.linkedIn}
            website={member.website}
          />
        ))}
      </div>
    </section>
  );
};

const Assistants = () => {
  const members = [
    'Daniel Olis',
    'Forrest Voight',
    'Andres Pulido',
    'John Morin',
    'Miguel Fernandez',
    'Frank Mitchell',
    'Noah Goodall',
    'Boris Spektor',
    'Eric Gorday',
    'Paul Chojecki',
    'Connor Bolick',
    'David Tuyn',
  ];

  return (
    <section className="max-w-4xl mx-auto pb-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Assistants</h2>
      </div>
      <div className="flex justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[...Array(3)].map((_, colIdx) => (
              <div key={colIdx} className="space-y-2">
                {members
                  .sort()
                  .filter((_, idx) => idx % 3 === colIdx) // Spread names across three columns
                  .map((member, idx) => (
                    <p key={idx} className="text-gray-700">{member}</p>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamPage = () => {
  return (
    <div className="bg-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="relative">
        <Header title="Meet the Team" subTitle="2018 Season" />
      </div>
      <Leadership />
      <Advisors />
      <Assistants />
    </div>
  );
};

export default TeamPage;
