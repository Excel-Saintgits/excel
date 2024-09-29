import { useEffect } from "react";
import eventsData from "../components/events.json";

const EventsPage = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-16">
      {/* Page Title */}
      <h1 className="text-center text-3xl md:text-4xl font-extrabold text-[#0C9E8F] mb-10 tracking-wide">
        OUR <span className="text-[#35374E]">EVENTS</span>
      </h1>

      {/* Event Cards */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-xl mb-12 transition-transform hover:scale-105"
          >
            {/* Event Date Section */}
            <div className="w-full md:w-1/5 bg-[#35374E] text-white flex flex-col justify-center items-center py-8 md:py-40 rounded-t-lg md:rounded-l-lg">
              <div className="w-full flex flex-col items-center justify-center">
                <p className="text-2xl md:text-3xl font-extrabold">
                  {event.date.split(" ")[0]}
                </p>
                <p className="text-lg md:text-xl font-light">
                  {event.date.split(" ")[1]}
                </p>
              </div>
            </div>

            {/* Event Image */}
            <div className="w-full md:w-3/5">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-64 md:h-96 object-contain md:object-cover rounded-b-lg md:rounded-none"
              />
            </div>

            {/* Event Name Section */}
            <div className="w-full md:w-1/5 bg-[#0C9E8F] text-white flex justify-center items-center py-8 md:py-44 rounded-b-lg md:rounded-r-lg">
              <h2 className="text-xl md:text-2xl font-bold text-center">
                {event.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
