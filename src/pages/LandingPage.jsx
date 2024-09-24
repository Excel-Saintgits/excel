import Navbar from '../components/Navbar';
import excelLogo from '../assets/excel 1.png'; // Adjust the import path as needed

// Importing the 5 images
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import lineImage from '../assets/line1.png'; // Import the curved line image
import image6 from '../assets/6.png'; // Import the new image for the "Get to Know Us" section

const Landingpage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Logo and text aligned in the same line */}
      <div className="flex items-center justify-start mt-4 md:mt-6 ml-56 md:ml-80"> {/* Reduced left margin */}
  {/* Logo */}
  <img 
    src={excelLogo} 
    alt="Excel Logo" 
    className="w-48 h-24 md:w-64 md:h-32" 
  />
  
  {/* Text next to logo with increased letter spacing */}
  <h1 className="text-6xl md:text-7xl font-bold ml-[-60px]" style={{ letterSpacing: '20px' }}> {/* Adjusted negative margin */}
    {/* "EX" in #0C9E8F and "CEL" in #35374E */}
    <span className="text-[#0C9E8F]">EX</span>
    <span className="text-[#35374E]">CEL</span>
  </h1>
</div>

      {/* Row of images below the text that span from one end to the other */}
      <div className="flex w-full mt-12">
        <img src={img1} alt="Image 1" className="flex-grow h-48 object-cover" />
        <img src={img2} alt="Image 2" className="flex-grow h-48 object-cover" />
        <img src={img3} alt="Image 3" className="flex-grow h-48 object-cover" />
        <img src={img4} alt="Image 4" className="flex-grow h-48 object-cover" />
        <img src={img5} alt="Image 5" className="flex-grow h-48 object-cover" />
      </div>

      {/* "EXQUISITE COMPUTER ENGINEERS LEAGUE" Section with overlapping image */}
      <div className="relative text-center mt-24"> {/* Relative positioning to make the image overlap */}
        {/* Curved line image that overlaps the text */}
        <img 
          src={lineImage} 
          alt="Curved Line" 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[20px] w-[500px] md:w-[400px] opacity-80" 
        />

        {/* Heading text */}
        <h2 className="relative text-4xl md:text-5xl font-bold z-10"> {/* Relative to keep it above the image */}
          <span className="text-[#35374E]">EXQUISITE COMPUTER</span>{' '}
          <span className="text-[#0C9E8F]">ENGINEERS LEAGUE</span>
        </h2>
        <p className="relative text-lg md:text-xl text-gray-600 mt-4 z-10"> {/* Ensure the text remains on top */}
          Saintgits College of Engineering, Pathamuttom, Kottayam
        </p>
      </div>

      {/* Section Below - Small Section with Message */}
      <div className="bg-[#0C9E8F] py-4 mt-16">
        <p className="text-center text-white text-lg md:text-xl">
          Transform ideas into innovation, building the future through code, logic, and creativity.
        </p>
      </div>

      {/* New Section - "Get to Know Us" */}
      <div className="flex items-center justify-between bg-[#0C9E8F1A] rounded-lg p-8 mx-auto mt-12 w-[900px] h-[400px]">
        {/* Left Text Section */}
        <div className="text-left w-1/2">
          <h3 className="text-3xl font-bold mb-4">
            <span className="text-black">GET TO </span>
            <span className="text-[#0C9E8F]">KNOW US</span>
          </h3>
          <p className="text-black leading-relaxed text-justify">
  Welcome to EXCEL, the Exquisite Computer Engineers League, a vibrant group of Computer 
  Engineering students at Saintgits College of Engineering. We are dedicated to fostering 
  technical excellence, innovation, and community engagement. Our activities range from 
  hosting national seminars, inter-college competitions, and hands-on workshops, to making 
  a difference through social outreach.
</p>

        </div>

        {/* Right Image Section */}
        <div className="w-1/2 flex justify-end"> {/* Align to the right */}
  <img 
    src={image6} 
    alt="Get to Know Us Image" 
    className="w-[340px] h-[350px] object-contain -mr-12" // Increased negative margin to push the image further right
  />
</div>

      </div>
    </div>
  );
};

export default Landingpage;
