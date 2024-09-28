import { useEffect } from 'react';
import teamData from '../components/teamData.json';

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  const renderCoreCommittee = () => (
    <div className="flex flex-col items-center m-5 bg-[#EAF8F9] py-12 rounded-lg shadow-md">
      <h2 className="text-center text-3xl font-bold mb-8">Core - Committee Members</h2>
      <div className="flex flex-col items-center">
        <div className="text-center flex flex-col items-center mb-10">
          <div className="bg-gray-200 rounded-full w-32 h-32 mb-3 overflow-hidden">
            <div className="w-full h-full bg-gray-400 rounded-full"></div>
          </div>
          <p className="font-bold">{teamData.coreCommittee[0].role}</p>
          <p>{teamData.coreCommittee[0].name}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-24 lg:gap-48">
          {teamData.coreCommittee.slice(1).map((member, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="bg-gray-200 rounded-full w-24 h-24 mb-3 overflow-hidden">
                <div className="w-full h-full bg-gray-400 rounded-full"></div>
              </div>
              <p className="font-bold">{member.role}</p>
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCommittee = () => (
    <div className="flex flex-col items-center m-5">
      <h2 className="text-center text-3xl font-bold mb-8">Committee Members</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {teamData.committeeMembers.map((member, index) => (
          <div key={index} className="text-center flex flex-col items-center w-[30%]">
            <div className="bg-gray-200 rounded-full w-24 h-24 mb-3 overflow-hidden">
              <div className="w-full h-full bg-gray-400 rounded-full"></div>
            </div>
            <p>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900">
      {/* Title Section */}
      <h5 className="text-4xl md:text-5xl text-center font-bold font-exo-2 mb-8">About Us</h5>

      {/* About Description in 3 Paragraphs with Justification */}
      <div className="text-justify max-w-4xl mx-auto text-lg mb-12 px-4 md:px-0">
        {teamData.aboutDescription.map((item, index) => (
          <p key={index} className="mb-4">{item.paragraph}</p>
        ))}
      </div>

      {/* Core Committee Section */}
      {renderCoreCommittee()}

      {/* Committee Members Section */}
      {renderCommittee()}
    </div>
  );
};

export default AboutPage;
