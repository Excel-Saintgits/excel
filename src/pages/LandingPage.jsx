import Nav from "../components/Navbar";
import excelLogo from "../assets/excel 2 (1).png"; // Adjust the import path as needed

// Importing the 5 images
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import image6 from "../assets/6.png"; // Import the new image for the "Get to Know Us" section

const Landingpage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4 md:mt-6">
        <img
          src={excelLogo}
          alt="Excel Logo"
          className="w-24 h-24 md:w-32 md:h-32"
        />

        {/* Text next to logo with increased letter spacing */}
        <h1
          className="text-4xl md:text-7xl font-bold"
          style={{ letterSpacing: "20px" }}
        >
          <span className="text-[#0C9E8F]">EX</span>
          <span className="text-[#35374E]">CEL</span>
        </h1>
      </div>

      {/* Row of images below the text */}
      <div className="w-full mt-12">
        <div className="flex flex-wrap md:flex-nowrap h-48 w-full">
          {/* Only show img1 on mobile */}
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

      {/* "EXQUISITE COMPUTER ENGINEERS LEAGUE" Section with more margin in mobile view */}
      <div className="text-center mt-48 md:mt-28 px-4">
        {/* Heading text */}
        <h2 className="text-2xl md:text-5xl font-bold">
          <span className="text-[#35374E]">EXQUISITE COMPUTER</span>{" "}
          <span className="text-[#0C9E8F]">ENGINEERS LEAGUE</span>
        </h2>
        <p className="text-base md:text-xl text-gray-600 mt-4">
          Saintgits College of Engineering, Pathamuttom, Kottayam
        </p>
      </div>

      {/* Section Below - Small Section with Message */}
      <div className="bg-[#0C9E8F] py-4 mt-12">
        <p className="text-center text-white text-lg md:text-xl px-4">
          Transform ideas into innovation, building the future through code,
          logic, and creativity.
        </p>
      </div>

      {/* New Section - "Get to Know Us" */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#0C9E8F1A] rounded-lg p-8 mx-auto mt-12 w-full max-w-5xl">
        {/* Left Text Section */}
        <div className="text-left w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
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

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={image6}
            alt="Get to Know Us Image"
            className="w-[250px] h-[250px] md:w-[340px] md:h-[350px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
