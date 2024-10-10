import React from 'react';
import MemberCard from './MemberCard';

function Team() {
  const teamMembers = [
    {
      name: 'Cameron Brown',
      role: 'Team Lead',
      image: './assets/members/cameron.jpeg',
    },
    {
      name: 'Lorant Domokos',
      role: 'Mechanical Lead',
      image: './assets/members/lorant.png',
    },
    {
      name: 'Daniel Parra',
      role: 'Software Lead',
      image: './assets/members/daniel.jpeg',
    },
    {
      name: 'Adrian Fernandez',
      role: 'Electrical Lead',
      image: './assets/members/adrian.png',
    },
    {
      name: 'Adam Hamdan',
      role: 'Mechanical Lead, Operations',
      image: './assets/members/adam_h.png',
    },
    {
      name: 'Keith Khadar',
      role: 'Software Lead',
      image: './assets/members/keith.jpeg',
    },
    {
      name: 'Kayleigh Beron',
      role: 'Electrical Lead, Operations',
      image: './assets/members/kayleigh.jpg',
    },
    {
      name: 'Adam McAleer',
      role: 'Mechanical Lead, Mechanisms',
      image: './assets/members/adam_m.jpeg',
    },
    {
      name: 'Andrew Knee',
      role: 'Software Lead',
      image: './assets/members/andrew.png',
    },
    {
      name: 'Lester Bonilla',
      role: 'Drone Lead',
      image: './assets/members/lester.jpg',
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 bg-gray-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Leadership</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {teamMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;
