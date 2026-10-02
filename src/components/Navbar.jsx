import { useState } from "react";
import { assets } from "../assets/assets.js";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100">

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">

          <img
            src={assets.logo}
            alt="Startup Setu Logo"
            className="w-10 h-10 object-contain"
          />

          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Startup <span className="text-orange-500">Setu</span>
          </h1>

        </div>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">

          <a
            href="#"
            className="text-orange-500 border-b-2 border-orange-500 pb-2"
          >
            Home
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Learn
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Roadmap
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Resources
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Sponsors
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Community
          </a>

        </div>


        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">

          <button className="px-5 py-2.5 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-50 transition">
            Login
          </button>

          <button className="px-5 py-2.5 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition">
            Sign Up
          </button>

        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-800"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 px-5 py-5 bg-white">

          <div className="flex flex-col gap-5">

            <a
              href="#"
              className="text-orange-500 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              Learn
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              Roadmap
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              Resources
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              Sponsors
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              Community
            </a>


            {/* Mobile Buttons */}
            <div className="flex gap-3 pt-2">

              <button className="flex-1 py-2.5 rounded-lg border border-orange-500 text-orange-500">
                Login
              </button>

              <button className="flex-1 py-2.5 rounded-lg bg-orange-500 text-white">
                Sign Up
              </button>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;