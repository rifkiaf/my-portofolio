"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-gray-900/90 backdrop-blur-md text-gray-100 shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Nama */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg text-blue-400">
            Rifki Ahmad Fahreizi
          </span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "Tentang" },
            { href: "/project", label: "Proyek" },
            { href: "/certification", label: "Sertifikat" },
            { href: "/contact", label: "Kontak" },
          ].map((item, idx) => (
            <li key={idx}>
              <Link href={item.href}>
                <span className="hover:text-blue-400 transition-colors duration-300 cursor-pointer relative group">
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-between w-7 h-6 focus:outline-none"
        >
          <span
            className={`block h-0.5 bg-gray-200 rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-gray-200 rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-gray-200 rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Transparan */}
      <div
        className={`md:hidden bg-gray-900/90 backdrop-blur-md transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-6 font-medium px-6 py-6 text-center text-lg">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "Tentang" },
            { href: "/project", label: "Proyek" },
            { href: "/certification", label: "Sertifikat" },
            { href: "/contact", label: "Kontak" },
          ].map((item, idx) => (
            <li key={idx}>
              <Link href={item.href}>
                <span
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
