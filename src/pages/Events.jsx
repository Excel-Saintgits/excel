import { useEffect } from "react";
import eventsData from "../components/events.json";

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-16">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold text-[#0C9E8F] mb-10 tracking-wide">
        OUR <span className="text-[#35374E]">EVENTS</span>
      </h1>

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-xl mb-12 transition-transform hover:scale-105 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/5 bg-[#35374E] text-white flex flex-col justify-center items-center p-4">
                <p className="text-2xl md:text-3xl font-extrabold">
                  {event.date.split(" ")[0]}
                </p>
                <p className="text-lg md:text-xl font-light">
                  {event.date.split(" ")[1]}
                </p>
              </div>

              <div className="w-full md:w-3/5 aspect-w-16 aspect-h-9">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-full md:w-1/5 bg-[#0C9E8F] text-white flex items-center justify-center p-4">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-center break-words hyphens-auto">
                  {event.name}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;