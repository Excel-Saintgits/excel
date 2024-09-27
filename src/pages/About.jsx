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
    <div className="px-4 py-8 align-middle items-center w-11/12 md:w-9/12 mx-auto">
      {/* About Us Section */}
      <section className="mb-8">
        <h1 className="text-5xl font-bold text-green-600 items-center text-center">
          ABOUT <span className="text-black">US</span>
        </h1>
        <p className="text-gray-800  text-xl mt-4 font-sans text-justify">
          Welcome to{" "}
          <span className="text-green-600 font-extrabold">EXCEL</span>, the{" "}
          <span className="font-extrabold">Exquisite Computer</span>{" "}
          <span className="text-green-600 font-extrabold">
            Engineers League
          </span>{" "}
          , a vibrant group of Computer Engineering students at Saintgits
          College of Engineering. We are dedicated to fostering technical
          excellence, innovation, and community engagement. Our activities range
          from hosting national seminars, inter-college competitions, and
          hands-on workshops, to making a difference through social outreach.
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
      <section className="mb-12 items-center bg-[#0C9E8F1A] flex flex-col justify-center p-12">
        <h2 className="text-3xl md:text-5xl font-bold text-green-600 text-center">
          Core - Committee{" "}
          <span className="text-3xl md:text-5xl font-bold text-black">
            Members
          </span>
        </h2>
        <div className=" mt-6 place-self-center">
          {data.coreCommittee.members.map((member, index) =>
            member.role == "Chairperson" ? (
              <div key={index} className="flex flex-col items-center">
                <p className="text-gray-500 mb-5">{member.role}</p>
                <div className="w-32 h-32 bg-gray-300 rounded-full mb-2  border-green-600 border-2"></div>
                <p className="text-xl font-semibold mt-4">{member.name}</p>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
        <div className=" mt-6 flex flex-col md:flex-row ">
          {data.coreCommittee.members.map((member, index) =>
            member.role !== "Chairperson" ? (
              <div key={index} className="flex flex-col items-center px-14">
                <p className="text-gray-500 mb-5">{member.role}</p>
                <div className="w-28 h-28 bg-gray-300 rounded-full mb-2  border-green-600 border-2"></div>
                <p className="text-xl font-semibold mt-4">{member.name}</p>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </section>

      {/* Committee Section */}
      <section className="mb-8 ">
        <h2 className="text-3xl md:text-5xl font-bold text-green-600 text-center">
          Committe <span className="text-black">Members</span>
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-20">
          {data.committee.members.map((member, index) => (
            <div key={index} className="flex flex-col items-center p-10">
              <div className="w-28 h-28 bg-gray-300 rounded-full mb-2 border-green-600 border-2"></div>
              <p className="text-xl font-semibold mt-3 text-center">{member.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
