import React from "react";

const data = {
  about: {
    title: "ABOUT US",
  },
  coreCommittee: {
    title: "Core - Committee Members",
    members: [
      { role: "Chairperson", name: "Arundhati R" },
      { role: "Vice-Chairperson", name: "Shawn Anish" },
      { role: "General Secretary", name: "Rahul Zachariah" },
      { role: "Treasurer", name: "Gopikrishnan B" },
    ],
  },
  committee: {
    title: "Committee Members",
    members: [
      { name: "Shawn Anish" },
      { name: "Rahul Zachariah" },
      { name: "Gopikrishnan B" },
      { name: "Shawn Anish" },
      { name: "Rahul Zachariah" },
      { name: "Gopikrishnan B" },
    ],
  },
};

const AboutUs = () => {
  return (
    <div className="px-4 py-8 align-middle items-center w-9/12 mx-auto">
      {/* About Us Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-green-600 items-center text-center">
          ABOUT <span className="text-black">US</span>
        </h1>
        <p className="text-gray-800  text-2xl mt-4 font-sans text-justify">
          Welcome to <span className="text-green-600 font-extrabold">EXCEL</span>, the <span className="font-extrabold">Exquisite Computer</span> <span className="text-green-600 font-extrabold">Engineers League</span> , a vibrant
          group of Computer Engineering students at Saintgits College of
          Engineering. We are dedicated to fostering technical excellence,
          innovation, and community engagement. Our activities range from
          hosting national seminars, inter-college competitions, and hands-on
          workshops, to making a difference through social outreach.
          <br />
          <br />
          Under the EXCEL banner, we have conducted programs like the PC
          Hardware and Networking workshop, in collaboration with Corona
          Infotech, Kottayam, for 85 students, and a Personality Development
          program led by TIME, Trivandrum. Alongside these technical endeavors,
          we take pride in our social responsibility, organizing blood donation
          drives, fundraisers, and various charitable activities to support
          those in need.
          <br />
          <br />
          We also spearhead Jyothirgamaya, a community-driven initiative of the
          Computer Science and Engineering Department. Every year, our BTech
          students, under the guidance of faculty, conduct training programs for
          school children. These workshops introduce young minds to IT-related
          topics, enhancing their academic performance and sparking their
          interest in Science and Engineering, creating future innovators
        </p>
      </section>

      {/* Core Committee Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-green-600">
          {data.coreCommittee.title}
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-6">
          {data.coreCommittee.members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mb-2"></div>
              <p className="text-xl font-semibold">{member.name}</p>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Committee Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-green-600">
          {data.committee.title}
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-6">
          {data.committee.members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mb-2"></div>
              <p className="text-xl font-semibold">{member.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
