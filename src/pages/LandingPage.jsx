import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PhotoCarousel from '../components/Carousel';
import ScrollUpIndicator from '../components/ScrollUpIndicator';
import excelLogo from '../assets/excel 2 (1).png';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import image6 from '../assets/6.png';
import EventsSection from '../components/EventsSection';
import events from '../components/events.json'; // Import the events data from JSON

const Landingpage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const iframeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      scroller.scrollTo(targetId, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80,
      });
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = formRef.current;
    const iframe = iframeRef.current;

    iframe.onload = () => {
      setIsSubmitting(false);
      alert('Form submitted successfully!');
      form.reset();
    };

    form.submit();
  };

  return (
    <div className="min-h-screen bg-[#0C9E8F1A]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4 md:mt-6">
        <img
          src={excelLogo}
          alt="Excel Logo"
          className="w-24 h-24 md:w-32 md:h-32"
        />
        <h1
          className="text-4xl md:text-7xl font-bold"
          style={{ letterSpacing: '20px' }}
        >
          <span className="text-[#0C9E8F]">EX</span>
          <span className="text-[#35374E]">CEL</span>
        </h1>
      </div>

      {/* Image Banner */}
      <div className="w-full mt-12">
        <div className="flex flex-wrap md:flex-nowrap h-48 w-full">
          <img
            src={img1}
            alt="Image 1"
            className="flex-grow object-cover md:flex-grow-0 md:w-1/5"
          />
          <img
            src={img2}
            alt="Image 2"
            className="hidden md:block flex-grow object-cover md:flex-grow-0 md:w-1/5"
          />
          <img
            src={img3}
            alt="Image 3"
            className="hidden md:block flex-grow object-cover md:flex-grow-0 md:w-1/5"
          />
          <img
            src={img4}
            alt="Image 4"
            className="hidden md:block flex-grow object-cover md:flex-grow-0 md:w-1/5"
          />
          <img
            src={img5}
            alt="Image 5"
            className="hidden md:block flex-grow object-cover md:flex-grow-0 md:w-1/5"
          />
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="text-center mt-48 md:mt-28 px-4">
        <h2 className="text-2xl md:text-5xl font-bold">
          <span className="text-[#35374E]">EXQUISITE COMPUTER</span>{' '}
          <span className="text-[#0C9E8F]">ENGINEERS LEAGUE</span>
        </h2>
        <p className="text-base md:text-xl text-gray-600 mt-4">
          Saintgits College of Engineering, Pathamuttom, Kottayam
        </p>
      </div>

      {/* Slogan Section */}
      <div className="bg-[#0C9E8F] py-4 mt-12">
        <p className="text-center text-white text-lg md:text-xl px-4">
          Transform ideas into innovation, building the future through code,
          logic, and creativity.
        </p>
      </div>

      {/* Get to Know Us Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg p-8 mx-auto mt-12 w-full max-w-5xl">
        <div className="text-left w-full md:w-1/2">
          <h3 className="text-3xl font-bold mb-4">
            <span className="text-black">GET TO </span>
            <span className="text-[#0C9E8F]">KNOW US</span>
          </h3>
          <p className="text-black leading-relaxed text-justify text-sm md:text-base">
            Welcome to EXCEL, the Exquisite Computer Engineers League, a vibrant
            group of Computer Engineering students at Saintgits College of
            Engineering. We are dedicated to fostering technical excellence,
            innovation, and community engagement. Our activities range from
            hosting national seminars, inter-college competitions, and hands-on
            workshops, to making a difference through social outreach.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={image6}
            alt="Get to Know Us"
            className="w-[250px] h-[250px] md:w-[340px] md:h-[350px] object-contain"
          />
        </div>
      </div>

      <hr className="border-t-2 border-gray-200 mt-20 mb-20" />

      {/* OUR EVENTS Section */}
      <div id="events" className="text-center mt-20 mb-20">
        <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center">
          <Link to="/events" className="no-underline flex items-center">
            <span className="text-[#35374E]">OUR</span>
            <span className="text-[#0C9E8F]"> EVENTS </span>
            <motion.span
              style={{
                display: 'inline-block',
                marginLeft: '8px',
                fontSize: '30px',
                cursor: 'pointer',
              }}
              className="rotate-arrow"
              animate={{ rotate: 0 }}
              whileHover={{ rotate: -30 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              ➔
            </motion.span>
          </Link>
        </h2>
        <div className="py-12 px-4">
          <div className="relative h-[350px] w-full">
            <EventsSection events={events} /> {/* Pass events as a prop */}
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-gray-200 mt-20 mb-20" />

      {/* Gallery Section */}
      <div id="gallery" className="py-12 bg-[#0C9E8F1A]">
        <div className="container mx-auto">
          <Link to="/gallery" className="no-underline">
            <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center cursor-pointer">
              <span className="text-black">GAL</span>
              <span className="text-[#0C9E8F]">LE</span>
              <span className="text-[#35374E]">RY</span>
              <motion.span
                style={{
                  display: 'inline-block',
                  marginLeft: '8px',
                  fontSize: '30px',
                  cursor: 'pointer',
                }}
                className="rotate-arrow"
                animate={{ rotate: 0 }}
                whileHover={{ rotate: -30 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                ➔
              </motion.span>
            </h2>
          </Link>
          <p className="text-center text-lg md:text-xl mb-8">
            <span className="text-[#0C9E8F]">EXPERIENCE </span>
            <span className="text-[#35374E]">THE MOMENTS</span>
          </p>
          <PhotoCarousel />
        </div>
      </div>

      <hr className="border-t-2 border-gray-200 mt-12 mb-20" />

      {/* Contact Us Section */}
      <div
        id="contact-us"
        className="flex flex-col md:flex-row justify-between items-center p-8 mx-auto max-w-5xl bg-white"
      >
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#0C9E8F] mb-8 font-exo-2 text-center md:text-left">
            CONNECT <span className="text-[#35374E]">WITH US</span>
          </h1>
          <motion.form
            ref={formRef}
            className="w-full space-y-6 mb-8"
            onSubmit={handleSubmit}
            method="POST"
            target="hidden_iframe"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeBaVib7KdQZbk1XGVVe4jdwvBgrM7KsP58nFhzJJudFlYdxw/formResponse"
          >
            {['Name', 'Contact No.', 'Email'].map((label, index) => (
              <div key={label} className="relative">
                <label
                  htmlFor={label.toLowerCase()}
                  className="block text-sm font-medium text-[#35374E] mb-2"
                >
                  {label} <span className="text-red-400">*</span>
                </label>
                <input
                  type={
                    label === 'Email'
                      ? 'email'
                      : label === 'Contact No.'
                      ? 'tel'
                      : 'text'
                  }
                  id={label.toLowerCase()}
                  name={[
                    'entry.2005620554',
                    'entry.1166974658',
                    'entry.1045781291',
                  ][index]}
                  className="w-full p-3 rounded-md bg-gray-200 text-[#35374E] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0C9E8F]"
                  placeholder={label}
                  required
                />
              </div>
            ))}
            <div className="flex justify-end">
              <motion.button
                type="submit"
                className="bg-[#0C9E8F] text-white border-2 py-2 px-6 rounded-full hover:bg-white hover:text-[#0C9E8F] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#0C9E8F] focus:ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                <motion.span
                  style={{
                    display: 'inline-block',
                    marginLeft: '8px',
                    fontSize: '15px',
                  }}
                  className="rotate-arrow"
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: -30 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  ➔
                </motion.span>
              </motion.button>
            </div>
          </motion.form>
          <iframe
            name="hidden_iframe"
            ref={iframeRef}
            style={{ display: 'none' }}
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
  <img
    src={excelLogo}
    alt="Excel Logo"
    className="w-32 h-32 md:w-64 md:h-64" // Smaller size for mobile, larger for desktop
  />
</div>

      </div>

      <hr className="border-t-2 border-gray-200 mt-6 mb-6" />

      <ScrollUpIndicator />
    </div>
  );
};

export default Landingpage;
