import React from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';

import background from '../assets/hawaii_resting.jpg';
import teamPhoto from '../assets/team_2024.jpg';
import logo from '../assets/logo.png';
import subjugator_pic from '../assets/navigator_cropped_2024.png';
import parallaxImage from '../assets/robotx_2022_team_1.jpg';
import { useNavigate } from 'react-router-dom';

function Header() {
  return (
    <header className="relative h-[667px] bg-cover bg-center" style={{ backgroundImage: `url('${background}')`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'darken' }}>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-7xl font-bold">NaviGator</h1>
        <p className="text-2xl mt-2">UF's Autonomous Maritime System</p>

      <NavLink 
        to="/vehicle"
        className="mt-6 px-6 py-3 bg-gray-200 rounded-full text-black font-light hover:text-white hover:bg-opacity-30 hover:border transition-all duration-300">Learn More</NavLink>
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
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        <div className="flex-1 text-left">
          <h2 className="text-3xl font-bold font-light mb-6 px-10">About Us</h2>
          <p className="text-gray-600 mb-6 px-10">
            NaviGator AMS is a set of maritime vehicles built by students in the Machine Intelligence Laboratory (MIL) at the University of Florida (UF) for the Maritime RobotX competition.
          </p>
          <p className="text-gray-600 px-10">
            The main autonomous vehicle that constitutes the NaviGator AMS project is built upon a WAM-V boat. Other maritime systems will also be utilized for this project.
          </p>
          <p className="text-gray-600 mt-4 mb-20 px-10">
            We will be competing at the upcoming RobotX competition in Sarasota 2024!
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            src={subjugator_pic} 
            alt="NaviGator AMS Logo" 
            className="max-w-md w-full rounded-lg" 
          />
        </div>
      </div>
    </section>
  );
}

function ParallaxDivider() {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${parallaxImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <h2 className="relative text-white text-4xl md:text-5xl font-bold text-center px-6">
        Pushing the Limits of Autonomous Maritime Systems
      </h2>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="py-8 mt-16 bg-gray-300">
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
  const navigate = useNavigate();
  return (
    <section className="py-8 bg-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-light mb-6 text-left px-10">Meet the Team</h2>
        <p className="text-gray-600 text-left px-10 mb-6">
          Our team is composed of students from various disciplines at the University of Florida.
          We are a group of passionate individuals who are dedicated to the development of autonomous maritime systems.
        </p>

        <div className="relative flex justify-center">
          <img
            src={teamPhoto}
            alt="Team Photo"
            className="max-w-5xl w-full rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-300 to-transparent rounded-b-lg"></div>
          <NavLink
            to="/teams"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 px-12 py-3 bg-gray-200 rounded-full text-black font-light hover:text-white hover:bg-opacity-30 hover:border transition-all duration-300"
          >
            Meet the Team
          </NavLink>
          
        </div>
      </div>
    </section>
  );
}


function ContactSection() {
  return (
    <section className="py-16 bg-gray-300">
      <div className="max-w-6xl mx-auto px-10">

        <h2 className="text-3xl font-bold font-light mb-10">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium mb-3">General Inquiries</h3>
            <p className="text-gray-600 mb-2">
              Have questions about NaviGator AMS ?
            </p>
            <p className="text-gray-600">
              Email us at:{" "}
              <a href="mailto:info@navigatoruf.org" className="text-blue-600 underline">
                info@navigatoruf.org
              </a>
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium mb-3">Sponsor Inquiries</h3>
            <p className="text-gray-600 mb-2">
              Interested in supporting our research, autonomous systems, or competition efforts?
            </p>
            <p className="text-gray-600">
              Email the sponsorship team at:{" "}
              <a href="mailto:sponsor@navigatoruf.org" className="text-blue-600 underline">
                sponsor@navigatoruf.org
              </a>
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium mb-3">Location</h3>
            <p className="text-gray-600">Machine Intelligence Laboratory (MIL)</p>
            <p className="text-gray-600">University of Florida</p>
            <p className="text-gray-600">Gainesville, FL 32611</p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium mb-3">Lab Hours</h3>
            <p className="text-gray-600">Monday – Friday: 9:00 AM – 6:00 PM</p>
            <p className="text-gray-600">Weekends: Limited availability</p>
            <p className="text-gray-600 text-sm mt-2">
              *Hours vary during competition season.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg md:col-span-2">
            <h3 className="text-xl font-medium mb-3">Join the Team</h3>
            <p className="text-gray-600 mb-3">
              We’re always looking for passionate students interested in autonomy, robotics,
              mechanical design, software, electrical systems, and field testing.
            </p>
            <a
              href="/teams"
              className="inline-block px-6 py-3 bg-gray-300 rounded-full text-black font-light border hover:bg-opacity-30 hover:text-white transition-all duration-300"
            >
              Learn More About Joining
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function SponsorsSection() {
  const sponsors = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/DigiKey_logo.svg/1280px-DigiKey_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/SolidWorks_Logo.svg/1024px-SolidWorks_Logo.svg.png",
    "https://store.sylphase.com/static/sylphase.png",
    "https://mil.ufl.edu/sponsors/MAE_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qualcomm-Logo.svg/1024px-Qualcomm-Logo.svg.png",
  ];

  return (
    <section className="py-12 pb-24 bg-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {sponsors.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Sponsor ${index + 1}`} 
              className="max-h-20 object-contain" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <img src={logo} alt="Team Photo" className="max-w-5xl w-full rounded-lg" />
          <p className="text-gray-400">
            An autonomous maritime robotics project by the University of Florida’s
            Machine Intelligence Laboratory.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/vehicle" className="hover:text-white">Vehicle</a></li>
            <li><a href="/teams" className="hover:text-white">Teams</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-3">Connect With Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © 1995-{new Date().getFullYear()}  Machine Intelligence Laboratory. All rights reserved.
      </div>
    </footer>
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
      <ParallaxDivider />
      <VideoSection />
      <TeamSection />
      <ContactSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
