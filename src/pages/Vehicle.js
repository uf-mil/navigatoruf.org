import React from "react";
import Header from "../components/Header";

import MemberCard from "../components/MemberCard";

import cropped from "../assets/navigator_cropped_2024.png";

import settingsLogo from "../assets/settings.png";
import keyboardLogo from "../assets/keyboard.png";
import circuitLogo from "../assets/circuit.png";

import vrx2023 from "../assets/vrx-2023.jpg";
import testingVan from "../assets/testing_fbi_van.jpg";

const NaviGatorHeader = () => {
  return (
    <div className="max-w-6xl mx-auto text-center">
      <div className="grid place-items-center text-left">
        <div className="max-w-56">
          <h2 className="text-5xl font-light">NaviGator</h2>
          <h2 className="text-xl text-gray-500 mb-5 font-light" style={{ marginTop: '-10px' }}>
            V2024
          </h2>
        </div>
      </div>
    </div>
  );
};

const InfoBox = ({ lineId, top, left, title, description }) => {
  return (
    <div
      className="info-box hover-line"
      data-line={lineId}
      style={{ top: top, left: left }}
    >
      {title}
      <div className="info-blurb">{description}</div>
    </div>
  );
};

const VehicleCard = () => {
  return (
    <div className="p-6 bg-gray-200 rounded-lg shadow-lg" style={{ position: 'relative' }}>
      <div className="mb-4 grid place-items-center">
        <img
          src={cropped}
          alt="Team Photo"
          className="max-w-5xl w-full rounded-lg"
        />
      </div>
      {/* Some users of the site were complaining that the boxes do not line up properly
      <div className="info-boxes-desktop">
        <svg
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
          id="lines"
        >
          <line id="line1" x1="290" y1="50" x2="360" y2="190" stroke="gray" strokeWidth="10" className="hidden-line" />
          <line id="line2" x1="205" y1="213" x2="417" y2="216" stroke="gray" strokeWidth="10" className="hidden-line" />
          <line id="line3" x1="773" y1="50" x2="501" y2="97" stroke="gray" strokeWidth="10" className="hidden-line" />
          <line id="line4" x1="860" y1="216" x2="506" y2="134" stroke="gray" strokeWidth="10" className="hidden-line" />
          <line id="line5a" x1="106" y1="620" x2="181" y2="442" stroke="gray" strokeWidth="10" className="hidden-line" />
          <line id="line5b" x1="260" y1="653" x2="502" y2="489" stroke="gray" strokeWidth="10" className="hidden-line" />
          <line id="line6" x1="810" y1="620" x2="560" y2="222" stroke="gray" strokeWidth="10" className="hidden-line" />
        </svg>

        <InfoBox
          lineId="line2"
          top="20%"
          left="-10%"
          title="Racquetball Launcher"
          description="NaviGator is equipped with a Racquetball Launcher as part of the 2024 Dock and Deliver task."
        />
        <InfoBox
          lineId="line1"
          top="-2%"
          left="-2%"
          title="Electronics Box"
          description="NaviGator's electronics box contains all of its critical processing components, which allow it to think and act for itself, completing tasks totally autonomously."
        />
        <InfoBox
          lineId="line4"
          top="20%"
          left="80%"
          title="Velodyne LIDAR"
          description="Our new Velodyne LIDAR sensor allows NaviGator to perceive the distance of obstacles. Like RADAR but with light."
        />
        <InfoBox
          lineId="line3"
          top="-2%"
          left="72%"
          title="GPS Antenna"
          description="With the power of GPS, NaviGator is able to locate its precise position anywhere on the globe, an essential component of its success."
        />
        <InfoBox
          lineId="line5"
          top="88%"
          left="-2%"
          title="Propulsion Systems"
          description="NaviGator contains 2 stern thrusters and 2 bow thrusters, ready to speed us through all 8 tasks!"
        />
        <InfoBox
          lineId="line6"
          top="88%"
          left="72%"
          title="Stereo Camera"
          description="Just as you have 2 eyes, NaviGator has 2 linked cameras, giving it unparalleled depth perception."
        />
      </div>
      */}
    </div>
  );
};

const InfoBoxMobile = () => {
  const infoBoxes = [
    {
      title: 'Racquetball Launcher',
      description: 'NaviGator is equipped with a Racquetball Launcher as part of the 2024 Dock and Deliver task.',
    },
    {
      title: 'Electronics Box',
      description:
        'NaviGator\'s electronics box contains all of its critical processing components, which allow it to think and act for itself, completing tasks totally autonomously.',
    },
    {
      title: 'Velodyne LIDAR',
      description: 'Our new Velodyne LIDAR sensor allows NaviGator to perceive the distance of obstacles. Like RADAR but with light.',
    },
    {
      title: 'GPS Antenna',
      description: 'With the power of GPS, NaviGator is able to locate its precise position anywhere on the globe, an essential component of its success.',
    },
    {
      title: 'Propulsion Systems',
      description: 'NaviGator contains 2 stern thrusters and 2 bow thrusters, ready to speed us through all 8 tasks!',
    },
    {
      title: 'Stereo Camera',
      description: 'Just as you have 2 eyes, NaviGator has 2 linked cameras, giving it unparalleled depth perception.',
    },
  ];

  return (
    <div className="info-boxes-mobile max-w-4xl space-y-4 mt-8">
      {infoBoxes.map((box, index) => (
        <div key={index} className="p-4 bg-gray-500 rounded-lg text-white">
          <h3 className="text-xl font-semibold">{box.title}</h3>
          <p>{box.description}</p>
        </div>
      ))}
    </div>
  );
};

const SpecificationColumn = ({ title, specs }) => (
  <div className="flex flex-col">
    <p className="font-bold">{title}</p>
    {specs.map((spec, index) => (
      <p key={index} className="text-gray-700">{spec}</p>
    ))}
  </div>
);

const SpecificationsSection = () => {
  return (
    <section className="flex max-w-6xl p-6 mx-auto">
      <div className="flex bg-gray-400 rounded-lg items-center w-full min-h-52">
        <div className="self-start">
          <div className="rounded-full bg-gray-300 m-10 h-8 w-8"></div>
        </div>
        <div className="flex flex-col p-4">
          <h3 className="text-2xl font-light">Full Specifications</h3>
          <div className="flex space-x-6">
            <SpecificationColumn
              title="Example Category"
              specs={[
                "Example Specification",
                "Example Specification",
                "Example Category",
                "Example Specification",
                "Example Specification",
                "Example Specification"
              ]}
            />
            <SpecificationColumn
              title="Example Category"
              specs={[
                "Example Specification",
                "Example Specification",
                "Example Category",
                "Example Specification",
                "Example Specification",
                "Example Specification"
              ]}
            />
            <SpecificationColumn
              title="Example Category"
              specs={[
                "Example Specification",
                "Example Specification",
                "Example Category",
                "Example Specification",
                "Example Specification",
                "Example Specification"
              ]}
            />
            <SpecificationColumn
              title="Example Category"
              specs={[
                "Example Specification",
                "Example Specification"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SubsystemCard = ({ icon, altText, title, link }) => (
  <div className="bg-gray-400 p-6 mx-10 rounded-md shadow-md flex flex-col items-center basis-1/5">
    <div className="text-4xl mb-4">
      <img src={icon} alt={altText} className="h-10 w-10" />
    </div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <a href={link} className="bg-gray-200 text-gray-800 px-4 py-2 border-2 border-gray-200 rounded-md hover:text-white hover:bg-gray-400 transition-all duration-300">
      Learn More
    </a>
  </div>
);

const SubsystemsSection = () => {
  return (
    <section className="bg-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-light mb-6 px-10 pt-2">Learn about NaviGator's Subsystems!</h2>
      </div>
      <section className="max-w-6xl mx-auto pb-16 bg-gray-300 flex justify-center text-center">
        <SubsystemCard
          icon={settingsLogo}
          altText="Mechanical Design Icon"
          title="Mechanical Design"
          link="vehicle/mechanical.html"
        />
        <SubsystemCard
          icon={keyboardLogo}
          altText="Software Design Icon"
          title="Software Design"
          link="vehicle/software.html"
        />
        <SubsystemCard
          icon={circuitLogo}
          altText="Electrical Design Icon"
          title="Electrical Design"
          link="vehicle/electrical.html"
        />
      </section>
    </section>
  );
};

const TimelineItem = ({ date, title, description, imageSrc, imageAlt, videoSrc }) => {
  return (
    <div className="mb-8 flex">
      <div>
        <div className="rounded-full bg-gray-500 h-8 w-8"></div>
      </div>
      
      <div className="ml-8">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>

        {imageSrc && (
          <div className="mt-4">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        )}

        {videoSrc && (
          <div className="mt-4">
            <video width="400" controls>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <>
      <section className="pt-5 bg-gray-300">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-light mb-6 px-10">The NaviGator Process</h2>
        </div>
      </section>
      
      <section className="pt-1 bg-gray-300 flex justify-center">
        <div className="relative max-w-5xl">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 w-1 bg-gray-500" style={{ left: '0.9rem' }}></div>
          
          <TimelineItem 
            date="April 2022" 
            title="VRX 2022" 
            description="In 2022 Team NaviGator competed in the Virtual RobotX competition, which is like the RobotX competition but all online, winning 2nd place! With the lessons learned from VRX 2022, we began to build the foundational code for future RobotX competitions." 
            imageSrc={vrx2023} 
            imageAlt="NaviGator AMS Logo"
          />
          
          <TimelineItem 
            date="September 9th 2024" 
            title="Testing Log 1: Initial Assembly and Lake Testing" 
            description="With the RobotX 2024 competition no more than 2 months away we decided we needed to start testing now. On September 9th 2024 we embarked on the first testing session of the new school year! In the morning, we finished assembling the boat, including mechanically mounting several sensors and the computer box, securing electrical connections inside the computer box, and distributing outbound wires from the computer box to their respective sensors/actuators. Around 1, we wheeled NaviGator outside and hitched it to the ECE truck. We successfully drove it to Lake Wauburg and backed it down the driveway to the boat ramp. We deployed it, and after working through some computer issues, got the boat to move using odometry and the path planner. We will be testing next Sunday. This week, we aim to finish code for several missions, add further reliability to our software systems, work on new electrical boards for the light tower and RF kill, and build props used for testing missions in the water."
          />
          
          <TimelineItem 
            date="September 15th 2024" 
            title="Testing Log 2: Buoy Detection and Cooling Issues" 
            description="We hit the road pretty early yesteday for testing, and brought the CIMAR trailer with us with the help of some MAE faculty, Daniel Preston! This allowed us to bring our buoy props in attempt to do the demonstration task that qualifies us for the competition. After some tinkering (we forgot to turn on one of the batteries), we were able to test the mission, and found out that while object detection is working pretty well, the trajectory planner needs some work, as does the CV model. We were able to consistently detect buoys, but they were not always indexed correctly. The boat also station kept very well! The final issue was that the computer was overheating in the container, so we are switching to a water-cooled solution. We will have some smaller scale testing this week on Wednesday, where we plan on taking just the boat and figuring out some of the path planning. Next big testing is on Sunday, 9/22, and the goal is to fix the software issues, have more mechanical props, watercool the computer, and investigate some electrical components on the boat itself."
          />
          
          <TimelineItem 
            date="September 22nd 2024" 
            title="Testing Log 3: Trajectory Planning and Camera Data Collection" 
            description="Testing yesterday was longggg but we made some good progress and have found the next things we want to work on. The boat can now be controlled using a controller from shore, which was pretty fun to drive. We got camera data of the green spherical buoy as well as the black vertical buoy for two of the competition tasks. We also checked PID, and it had some pretty good performance, with a maximum of about 0.9 meters of pose error at any given time. Station keeping was incredibly accurate! We were also able to test the Zigbys for the remote kill, which electrical will continue to lab out this week. Software is going to be working on managing enemies and the trajectory planner in the coming week. The water-cooling components came in today, Monday, and so the goal is to have the computer cooled better by next sunday, as well as gathering data of the light tower while we are there. Trajectory planning is also a long term goal that we would like to iron out over the next few testing sessions. The ball launcher and drone are also coming along and we hope to test them this week!
"
          />
          
          <TimelineItem 
            date="September 29th 2024" 
            title="Testing Log 4: Enemy Filtering and Wildlife Mission Testing" 
            description="Unfortunately due to the hurricane and its impact on Florida, Lake Wauburg (our usual testing site) was without power today and therefore closed. After working together to find some other lakes to test in, we settled on a lake in Marion County named Orange Lake. After configuring the LIDAR bounds to work at the new lake, we got started with testing. The enemy filter (aka, filtering out non-useful LIDAR points in front of the boat) worked better, but we were still encountering a lot of issues with the LIDAR and the underwater weeds, which rose near the surface of the lake. We think that the changes to the LIDAR filter will work at Wauburg, where the weeds aren't as high and the light is the main deterrent in getting an accurate object map of the environment. Nonetheless, we recorded some data to analyze later, to try to further improve the filtering of the LIDAR. We also briefly tested the wildlife mission, and found some ways to improve it. Thanks to everyone who came!"
            imageSrc={testingVan} 
            imageAlt="NaviGator AMS Logo"
          />
          
          <TimelineItem 
            date="Until November 2024" 
            title="More Testing" 
            description="As of October 1st, 2024 this is all of the testing we've done, but we have many more sessions planned, and will update the website when we do them!"
          />
        </div>
      </section>
    </>
  );
};

const VehiclePage = () => {
  // This function shows hidden lines
  return (
  <div className="bg-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
    <div className="relative">
      <Header title="Vehicle" />
    </div>
    <section className="pt-20 pb-5 bg-gray-300">
      <NaviGatorHeader />
      <div className="max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto text-center grid place-items-center mx-8">
          <VehicleCard />
          <InfoBoxMobile />
        </div>
      </div>
    </section>
    <section>
      {/* <SpecificationsSection /> */}
      <SubsystemsSection />
      <Timeline />
    </section>
  </div>
  );
};

export default VehiclePage;
