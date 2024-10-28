import React from 'react';
import Navbar from '../components/Navbar';

import background from '../assets/hawaii_resting.jpg';
import teamPhoto from '../assets/robotx_2022_team_1.jpg';

function Header() {
  return (
    <header className="relative h-[667px] bg-cover bg-center" style={{ backgroundImage: `url('${background}')`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'darken' }}>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-7xl font-bold">NaviGator</h1>
        <p className="text-2xl mt-2">UF's Autonomous Maritime System</p>
        <a href="#vehicle" className="mt-6 px-6 py-3 bg-gray-200 rounded-full text-black font-light hover:text-white hover:bg-opacity-30 hover:border transition-all duration-300">Learn More</a>
      </div>
    </header>
  );
}

// Mission Component
function Mission() {
  return (
    <section className="py-8 bg-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 font-light">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-200 rounded-lg shadow-lg">
            <div className="mb-4">
              <svg className="w-12 h-12 text-gray-900 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5l7 14H5z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Simple and Elegant Design</h3>
            <p className="text-gray-600">Our software utilizes ROS, open source software that allows for quick, modular, and distributed design; our powerful simulator uses Gazebo, and facilitates testing of all algorithms prior to deployment on the physical system.</p>
          </div>
          <div className="p-6 bg-gray-200 rounded-lg shadow-lg">
            <div className="mb-4">
              <svg className="w-12 h-12 text-gray-900 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l9 4.5V9l-9-4.5L3 9v7.5l9-4.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Robust Infrastructure</h3>
            <p className="text-gray-600">NaviGator has multiple redundant systems, a strong and readily adaptable mechanical system (including both passive and active electronic cool components), several commercial off-the-shelf technology devices, many UF student-designed circuit boards, and rigorously simulated and tested software systems.</p>
          </div>
          <div className="p-6 bg-gray-200 rounded-lg shadow-lg">
            <div className="mb-4">
              <svg className="w-12 h-12 text-gray-900 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17a4 4 0 010-8h10a4 4 0 010 8H7z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Extensively Tested Software</h3>
            <p className="text-gray-600">With over 250 hours of in-water testing, over 2000 hours of simulated testing, and a robust codebase reforged in the fires of Virtual RobotX 2022, NaviGator AMS is ready for the 2022 RobotX competition.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Component
function About() {
  return (
    <section className="py-8 bg-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-light mb-6 text-left px-10">About Us</h2>
        <p className="text-gray-600 mb-6 text-left px-10">NaviGator AMS is a set of maritime vehicles built by students in the Machine Intelligence Laboratory (MIL) at the University of Florida (UF) for the Maritime RobotX competition.</p>
        <p className="text-gray-600 text-left px-10">The main autonomous vehicle that constitutes the NaviGator AMS project is built upon a WAM-V boat. Other maritime systems will also be utilized for this project.</p>
        <p className="text-gray-600 mt-4 text-left px-10">We will be competing at the upcoming RobotX competition in Sarasota 2024!</p>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="py-8 bg-gray-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold font-light mb-6 text-left px-10">Watch our Journey</h2>
        <p className="text-gray-600 text-left px-10 mb-6">This video was made for the 2022 RobotX competition!</p>
        <div className="flex justify-center">
          <iframe className="max-w-5xl w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/fPJV5_51v6Y" title="YouTube video" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="py-8 bg-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-light mb-6 text-left px-10">Meet the Team</h2>
        <p className="text-gray-600 text-left px-10 mb-6">Our team is composed of students from various disciplines at the University of Florida. We are a group of passionate individuals who are dedicated to the development of autonomous maritime systems.</p>
        <div className="flex justify-center">
          <img src={teamPhoto} alt="Team Photo" className="max-w-5xl w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
}

const LandingPage = () => {
  return (
    <div className="bg-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="relative">
        <Header />
        <div className="bg-gray-300 h-[71px] relative z-20" style={{ clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)', marginTop: '-70px' }}></div>
      </div>
      <Mission />
      <About />
      <VideoSection />
      <TeamSection />
    </div>
  );
}

export default LandingPage;
