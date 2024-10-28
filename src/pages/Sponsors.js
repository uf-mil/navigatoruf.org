import React from "react";
import Header from "../components/Header";

const SponsorSection = ({ title, sponsors, bgColor }) => {
  return (
    <section className="container mx-auto py-6">
      <h2 className="text-4xl font-bold text-center">{title}</h2>
      <div className={`flex flex-wrap justify-center gap-6 mt-8`}>
        {sponsors.map((sponsor, index) =>
          sponsor.type === "bronze" ? (
            <BronzeSponsorCard key={index} sponsor={sponsor} />
          ) : (
            <SponsorCard
              key={index}
              name={sponsor.name}
              description={sponsor.description}
              url={sponsor.url}
              imgSrc={sponsor.imgSrc}
              imgAlt={sponsor.imgAlt}
              bgColor={bgColor}
            />
          ),
        )}
      </div>
    </section>
  );
};

const SponsorCard = ({ name, description, url, imgSrc, imgAlt, bgColor }) => {
  return (
    <div
      className={`${bgColor} rounded-md p-6 shadow-md w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)]`}
    >
      <a target="_blank" rel="noopener noreferrer" href={url}>
        {imgSrc && (
          <img
            src={imgSrc}
            alt={imgAlt}
            className="object-contain h-20 mx-auto"
          />
        )}
        <h3 className="text-xl font-bold text-center mt-4">{name}</h3>
        {description && <p className="text-center mt-2">{description}</p>}
      </a>
    </div>
  );
};

const BronzeSponsorCard = ({ sponsor }) => {
  return (
    <div className="bg-rose-50 rounded-md p-6 shadow-md w-full md:w-[calc(25%-1.5rem)] lg:w-[calc(25%-1.5rem)]">
      {sponsor.imgSrc ? (
        <a target="_blank" rel="noopener noreferrer" href={sponsor.url}>
          <img
            src={sponsor.imgSrc}
            alt={sponsor.imgAlt}
            className="h-10 mx-auto"
          />
        </a>
      ) : (
        <p className="h-10 text-xl mx-auto text-center">{sponsor.name}</p>
      )}
    </div>
  );
};

const SponsorsPage = () => {
  // This function shows hidden lines
  const diamondSponsors = [
    {
      name: "L3Harris Technologies",
      description:
        "L3Harris Technologies is an agile global aerospace and defense technology innovator, delivering end-to-end solutions that meet customers' mission-critical needs. The company provides advanced defense and commercial technologies across air, land, sea, space and cyber domains.",
      url: "https://l3harris.com",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/L3Harris_Technologies_logo.svg/1280px-L3Harris_Technologies_logo.svg.png",
      imgAlt: "L3 Harris Logo",
    },
    {
      name: "Sylphase",
      description:
        "Sylphase LLC designs extensible GNSS/INS systems for industrial and academic applications. Our GNSS/INS technology fuses satellite navigation observables with inertial sensor measurements into an optimal estimate of your platform's position, velocity, and attitude.",
      url: "https://sylphase.com",
      imgSrc: "https://store.sylphase.com/static/sylphase.png",
      imgAlt: "Sylphase",
    },
    {
      name: "Erik de la Iglesia",
      description:
        "Erik de la Iglesia is a MIL alumnus who graduated with his BS from the University of Florida in 1996 and his MS from Stanford University in 1997.",
      imgSrc: "https://mil.ufl.edu/sponsors/Erik.png",
      imgAlt: "Erik de la Iglesia",
    },
  ];

  const goldSponsors = [
    {
      name: "Texas Instruments",
      description:
        "Texas Instruments is a company passionate about making a better world through making electronics more affordable through semiconductors. Texas Instruments plays a significant role in the manufacturing and distribution of sensors, solar panels, satellites, industrial robots, and so much more.",
      url: "https://ti.com",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ti_stk_2c_pos_rgb.svg/1024px-Ti_stk_2c_pos_rgb.svg.png",
      imgAlt: "Texas Instruments Logo",
    },
  ];

  const silverSponsors = [
    {
      name: "SolidWorks",
      description:
        "SolidWorks is a 3D CAD design software company that offers tools for creating, simulating, publishing, and managing data. SolidWorks supports a 3D CAD software on every engineer's desktop.",
      url: "https://www.solidworks.com",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/SolidWorks_Logo.svg/1024px-SolidWorks_Logo.svg.png",
      imgAlt: "SolidWorks Logo",
    },
    {
      name: "Herbert Wertheim College of Engineering, University of Florida",
      description:
        "The Herbert Wertheim College of Engineering (HWCOE) at the University of Florida is dedicated to improving the social and economic well-being of the world, the nation, and the state of Florida through its engineering education, research, and service programs.",
      url: "https://eng.ufl.edu",
      imgSrc:
        "https://www.eng.ufl.edu/marcom-dev/wp-content/uploads/sites/175/2023/10/Herbert-Wertheim-COE-rgb.png",
      imgAlt: "UF HWCOE Logo",
    },
    {
      name: "Electrical and Computer Engineering Dept., University of Florida",
      description:
        "The Electrical and Computer Engineering (ECE) Department at the University of Florida (UF) has pursued research, discoveries, and technologies that empower and touch lives everywhere by developing the best workforce in electrical and computer engineering in the state of Florida and for all the nation.",
      url: "https://ece.ufl.edu",
      imgSrc:
        "https://www.ece.ufl.edu/wp-content/uploads/pub/identity/ECELogo2022_trans.png",
      imgAlt: "ECE Logo",
    },
    {
      name: "Mechanical and Aerospace Engineering Dept., University of Florida",
      description:
        "The Mechanical and Aerospace Engineering Department (MAE) at the University of Florida (UF) aims to shape the future of our fields and to inspire a new era of engineering possibilities, creating a better world for all.",
      url: "https://mae.ufl.edu",
      imgSrc: "https://mil.ufl.edu/sponsors/MAE_logo.png",
      imgAlt: "MAE Logo",
    },
    {
      name: "JD Squared",
      description:
        "JD Squared, Inc. is a national manufacturer of high-quality, affordable tube and pipe benders and notchers.",
      url: "https://jd2.com",
      imgSrc: "http://mil.ufl.edu/sponsors/JD-squared-transparent.png",
      imgAlt: "JD2 Logo",
    },
    {
      name: "Kevin Allen",
      description:
        "Kevin Allen is a MIL alumnus who graduated with his BS in Computer Science and BA in Philosophy from the University of Florida in 2020 and now works in the robotics industry.",
      url: "https://kev.wiki/",
      imgSrc: "http://mil.ufl.edu/sponsors/kevin.jpeg",
      imgAlt: "Kevin Allen",
    },
  ];

  const bronzeSponsors = [
    {
      name: "DigiKey",
      url: "https://www.digikey.com",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/DigiKey_logo.svg/1280px-DigiKey_logo.svg.png",
      imgAlt: "DigiKey Logo",
      type: "bronze",
    },
    {
      name: "Apple",
      url: "https://www.apple.com",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png",
      imgAlt: "Apple Logo",
      type: "bronze",
    },
    {
      name: "Qualcomm",
      url: "https://www.qualcomm.com",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qualcomm-Logo.svg/1024px-Qualcomm-Logo.svg.png",
      imgAlt: "Qualcomm Logo",
      type: "bronze",
    },
    {
      name: "Kevin Phillipson, MIL Alumnus",
      type: "bronze",
    },
    {
      name: "Edward Khallal, MIL Alumnus",
      type: "bronze",
    },
    {
      name: "Jake Panikulam, MIL Alumnus",
      type: "bronze",
    },
  ];
  return (
    <div className="bg-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="relative">
        <Header title="Sponsors" />
      </div>
      <SponsorSection
        title="Diamond Sponsors"
        sponsors={diamondSponsors}
        bgColor="bg-blue-100"
      />
      <SponsorSection
        title="Gold Sponsors"
        sponsors={goldSponsors}
        bgColor="bg-yellow-50"
      />
      <SponsorSection
        title="Silver Sponsors"
        sponsors={silverSponsors}
        bgColor="bg-gray-50"
      />
      <SponsorSection
        title="Bronze Sponsors"
        sponsors={bronzeSponsors}
        bgColor="bg-rose-50"
      />
    </div>
  );
};

export default SponsorsPage;
