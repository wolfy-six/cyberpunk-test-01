import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row px-4 justify-between items-center  py-5 text-white">
      <h1 className="font-bold text-2xl">BMII</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Version</li>
        <li>Moduler</li>
        <li>01:45:51</li>
      </ul>
    </nav>
  );
};

export default Navbar;
