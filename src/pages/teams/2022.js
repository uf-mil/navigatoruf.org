import React from "react";
import Header from "../../components/Header";

import MemberCard from "../../components/MemberCard";

import memberImages from "../../assets/members";
import advisorImages from "../../assets/advisors";

const Leadership = () => {
  const members = [
    {
      image: memberImages["alex_perez.jpg"],
      name: "Alex Perez",
      role: "Team Lead",
      degree: "BS, Computer Engineering",
      graduationYear: "Spring 2023",
      linkedIn: "alexsperez",
    },
    {
      image: memberImages["andres_castrillon.jpg"],
      name: "Andres Castrillon",
      role: "Mechanical Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2024",
      linkedIn: "andres-castrillon4",
    },
    {
      image: memberImages["cameron.jpeg"],
      name: "Cameron Brown",
      role: "Software Lead",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2025",
      linkedIn: "cameron-brown37",
      website: "https://cbrxyz.com",
    },
    {
      image: memberImages["alex_kuzmicki.jpg"],
      name: "Alex Kuzmicki",
      role: "Electrical Lead",
      degree: "BS, Electrical Engineering",
      graduationYear: "Spring 2023",
      linkedIn: "alexander-kuzmicki-550903182",
    },
    {
      image: memberImages["andrew.png"],
      name: "Andrew Knee",
      role: "Software Lead",
      degree: "BS, Computer Science",
      graduationYear: "Fall 2023",
      linkedIn: "andrew-knee-j",
    },
    {
      image: memberImages["jarrod_sanders.jpg"],
      name: "Jarrod Sanders",
      role: "Software Lead",
      degree: "BS, Computer Science",
      graduationYear: "Fall 2023",
      linkedIn: "jarrod-sanders",
    },
    {
      image: memberImages["aditya_ramesh.png"],
      name: "Aditya Ramesh",
      role: "Electrical Lead",
      degree: "BS, Electrical Engineering",
      graduationYear: "Spring 2024",
      linkedIn: "aditya-ramesh-ufl",
    },
    {
      image: memberImages["mehron_talebi.jpg"],
      name: "Mehron Talebi",
      role: "Electrical Lead",
      degree: "BS, Elctrical Engineering",
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
      website: "https://mil.ufl.edu/ems/",
    },
    {
      image: advisorImages["crane.jpg"],
      name: "Dr. Carl Crane",
      role: "Professor, MAE",
      linkedIn: "carl-crane-47839574",
      website: "https://mae.ufl.edu/people/profiles/carl-crane/",
    },
    {
      image: advisorImages["andres.png"],
      name: "Andres Pulido",
      role: "PhD Candidate, MAE",
      linkedIn: "andres-a-pulido",
      website: "https://andrespulido8.github.io",
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
      image: memberImages["luka_bjellos.jpg"],
      name: "Luka Bjellos",
      role: "Mechanical Member",
      degree: "BS, Aerospace Engineering",
      graduationYear: "Spring 2025",
      linkedIn: "luka-bjellos-727995220",
    },
    {
      image: memberImages["kayleigh.jpg"],
      name: "Kayleigh Beron",
      role: "Electrical Member",
      degree: "BS, Electrical Engineering",
      graduationYear: "Fall 2024",
      linkedIn: "kayleigh-beron",
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
      name: "Mechanical Team",
      members: [
        "Gabriella Peburn",
        "Ashton Pierre-Louis",
        "Dewayne Roxborough",
        "Nathaniel Braswell",
        "Lorant Domokos",
        "Nhan Hoang",
        "Joshua Hornilla",
        "Faisal Khanfar",
        "Alexander Lyew",
        "Griffin Martin",
        "Adam McAleer",
        "Quang Pham",
        "Matthew Poole",
        "Andres Pulido",
        "David Reyes-Tobar",
        "Jordan Schmidt",
        "Julian Villarta",
      ],
    },
    {
      name: "Software Team",
      members: [
        "Pranet Allu",
        "Hadi Baajour",
        "Nicolas Betancur",
        "Tanya Charan",
        "Henry Chen",
        "Mark Frederick Cortez",
        "David Dexter",
        "Skyler Estavillo",
        "Aran Gain",
        "Ty Halpen",
        "Legasse Remon",
        "Anthony Liao",
        "Michael Logsdon",
        "James Luberisse",
        "Sai Chandu Naru",
        "Tri Nguyen",
        "William Pitts",
        "Mitchell Robert",
        "Abishanka Saha",
        "Nicolas Sardinia",
        "Joshua Thomas",
        "Zhengyuan Zhao",
      ],
    },
    {
      name: "Electrical Team",
      members: [
        "Tyler Berndt",
        "Phillip Boll",
        "Alexander Calvo",
        "Manning Chen",
        "Sydney Dodson",
        "Emily Garcia",
        "Marc Guillaume",
        "Jessica Halvorsen",
        "William Kirby",
        "Andrew Miller",
        "Yovany Molina",
        "Nivedha Natarajan",
        "Blake Sanders",
        "Jenna Sheldon",
        "Mehron Talebi",
        "Grace Borst",
        "Kevin Chen",
        "Adrian Fernandez",
        "Garret Godfrey",
        "Alexander Kuzmicki",
        "Liam Negron",
        "Ethan Reussow",
        "Matthew Shen",
        "Emily Wang",
        "Maclean Whitworth",
        "Minhyeok Wi",
        "Joseph Wilkinson",
      ],
    },
  ];
  return (
    <section className="max-w-6xl mx-auto pb-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Members</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams.map((team, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-bold mb-3">{team.name}</h3>
            <div className="space-y-1">
              {team.members.toSorted().map((member, idx) => (
                <p key={idx} className="text-gray-700">
                  {member}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TeamPage = () => {
  return (
    <div className="bg-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="relative">
        <Header title="Meet the Team" subTitle="2022 Season" />
      </div>
      <Leadership />
      <Advisors />
      <TravelingMembers />
      <TeamList />
    </div>
  );
};

export default TeamPage;
