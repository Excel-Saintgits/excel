import excelLogo from '../assets/excel 2 (1).png'; // Import the Excel logo image

const Footer = () => {
  return (
    <footer className="bg-white py-6 md:py-8">
      <div className="container mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        {/* Terms of Service */}
        <p className="text-gray-600 mb-4 md:mb-0">Terms of Service</p>
        
        {/* Excel logo */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <img src={excelLogo} alt="Excel Logo" className="h-12 w-12 mb-2" /> {/* Adjust the size of the logo */}
          <p className="text-gray-800 font-bold">EXCEL</p>
        </div>

        {/* Copyright text */}
        <p className="text-gray-600">Copyright 2024 - Excel</p>
      </div>
    </footer>
  );
};

export default Footer;
