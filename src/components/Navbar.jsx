const Navbar = () => {
  return (
    <nav className="bg-white p-8">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-32 text-lg font-semibold items-center">
          <li className="flex items-center">
            <span className="text-[#35374E]">ABOU</span>
            <span className="bg-[#0C9E8F] w-8 h-8 rounded-full text-white flex justify-center items-center opacity-70">
              T
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-[#35374E]">EVENT</span>
            <span className="bg-[#0C9E8F] w-8 h-8 rounded-full text-white flex justify-center items-center opacity-70">
              S
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-[#35374E]">GALLER</span>
            <span className="bg-[#0C9E8F] w-8 h-8 rounded-full text-white flex justify-center items-center opacity-70">
              Y
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-[#35374E]">CONTACT U</span>
            <span className="bg-[#0C9E8F] w-8 h-8 rounded-full text-white flex justify-center items-center opacity-70">
              S
            </span>
          </li>
        </ul>
      </div>
      {/* Line with reduced opacity and lowered position */}
      <div className="container mx-auto border-t-2 border-[#0C9E8F] opacity-50 mt-8 w-/4"></div>
    </nav>
  );
};

export default Navbar;
