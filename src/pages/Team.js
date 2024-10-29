import React from "react";
import Header from "../components/Header";

import MemberCard from "../components/MemberCard";

import memberImages from "../assets/members";
import advisorImages from "../assets/advisors";

const Leadership = () => {
  const members = [
    {
      image: memberImages["cameron.jpeg"],
      name: "Cameron Brown",
      role: "Team Lead",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2025",
      linkedIn: "cameron-brown37",
      website: "https://cbrxyz.com",
    },
    {
      image: memberImages["lorant.png"],
      name: "Lorant Domokos",
      role: "Mechanical Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2025",
      linkedIn: "lorant-domokos-849094244",
    },
    {
      image: memberImages["daniel.jpeg"], 
      name: "Daniel Parra",
      role: "Software Lead",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2026",
      linkedIn: "daniparr",
    },
    {
      image: memberImages["adrian.png"],
      name: "Adrian Fernandez",
      role: "Electrical Lead",
      degree: "BS, Electrical Engineering",
      graduationYear: "Fall 2024",
      linkedIn: "adrianfernandez23",
    },
    {
      image: memberImages["adam_h.png"],
      name: "Adam Hamdan",
      role: "Mechanical Lead, Operations",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2026",
    },
    {
      image: memberImages["keith.jpeg"],
      name: "Keith Khadar",
      role: "Software Lead",
      degree: "BS, Computer Engineering",
      graduationYear: "Spring 2025",
      linkedIn: "keith-khadar"
    },
    {
      image: memberImages["kayleigh.jpg"],
      name: "Kayleigh Beron",
      role: "Electrical Lead, Operations",
      degree: "BS, Computer Engineering",
      graduationYear: "Fall 2024",
      linkedIn: "kayleigh-beron"
    },
    {
      image: memberImages["adam_m.jpeg"],
      name: "Adam McAleer",
      role: "Mechanical Lead, Mechanisms",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Fall 2024",
      linkedIn: "adam-mcaleer",
    },
    {
      image: memberImages["andrew.png"],
      name: "Andrew Knee",
      role: "Software Lead",
      degree: "MS, Computer Science",
      graduationYear: "Fall 2024",
      linkedIn: "andrew-knee-j",
    },
    {
      image: memberImages["lester.jpg"],
      name: "Lester Bonilla",
      role: "Drone Lead",
      degree: "BS, Computer Engineering",
      graduationYear: "Spring 2025",
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
      image: advisorImages["crane.jpg"],
      name: "Dr. Carl Crane",
      role: "Professor, MAE",
      linkedIn: "carl-crane-47839574",
      website: "https://mae.ufl.edu/people/profiles/carl-crane/"
    },
    {
      image: advisorImages["andres.png"],
      name: "Andres Pulido",
      role: "PhD Candidate, MAE",
      linkedIn: "andres-a-pulido",
      website: "https://andrespulido8.github.io"
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

const TravelingMembers = () => {
  const travelingMembers = [
    {
      image: memberImages["alex.png"],
      name: "Alex Johnson",
      role: "Software Member",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2025",
      linkedIn: "alexojohnson",
    },
    {
      image: memberImages["sophie.png"],
      name: "Sophie Lanahan",
      role: "Mechanical Member",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Fall 2026",
      linkedIn: "sophie-lanahan-9b2440325",
    },
    {
      image: memberImages["gabe.jpeg"],
      name: "Gabriel Wagner",
      role: "Mechanical Member",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2026",
      linkedIn: "gabriel-reyes-wagner",
    },
    {
      image: memberImages["dominik.png"],
      name: "Dominik Kapuscinski",
      role: "Electrical Member",
      degree: "BS, Computer Engineering",
      graduationYear: "Spring 2025",
      linkedIn: "dominik-kapuscinski",
    },
    {
      image: memberImages["jack.png"],
      name: "Jack Rainville",
      role: "Electrical Member",
      degree: "BS, Electrical Engineering",
      graduationYear: "Spring 2027",
      linkedIn: "jack-rainville", 
    },
  ];

  return (
    <section className="max-w-6xl mx-auto pb-16 bg-gray-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Traveling Members</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {travelingMembers.map((member, index) => (
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

const TeamList = () => {
  const teams = [
    {
      name: 'Mechanical Team',
      members: [
        'Ryan Hoburg',
        'Will MacGuire',
        'Cade Sachs',
        'Joshua Valencia',
        'Diego Dominguez',
        'Blake Cobo',
        'Findlay Watson',
        'Harin Patel',
      ]
    },
    {
      name: 'Software Team',
      members: [
          'Carlos Chavez',
          'Javier Irizarry-Delgado',
          'Mohana Pamidimukkala',
          'Edward Guthrie',
          'Max Vu',
          'Lynette Hemingway',
          'Joshua Labasbas',
          'William Zhu',
          'Thomas Canro',
          'Charles Pratt',
          'Tanushree Hadavale',
          'Alexander Wang',
          'Anthony Liao',
          'Marcin Plaza',
          'Danush Singla',
          'Joshua Thomas',
      ]
    },
    {
      name: 'Electrical Team',
      members: [
        'Joseph Goodman',
        'Enoch Wang',
        'Joshua Arroyo',
        'Szander Brenner',
        'Sanat Konda',
        'Peter Van Kirk',
      ]
    }
  ];
  return (
    <section className="max-w-6xl mx-auto pb-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Members</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams.map((team, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-3">{team.name}</h3>
            <div className="space-y-1">
              {team.members.toSorted().map((member, idx) => (
                <p key={idx} className="text-gray-700">{member}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const TeamPage = () => {
  return (
    <div className="bg-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="relative">
        <Header title="Meet the Team" subTitle="2024 Season" />
      </div>
      <Leadership />
      <Advisors />
      <TravelingMembers />
      <TeamList />
    </div>
  );
};

export default TeamPage;
