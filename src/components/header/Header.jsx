import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Assets & Icons
import Logo from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { CgMenuHotdog } from "react-icons/cg";
import { IoClose, IoCall, IoChevronDownOutline } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  const noticeData = [
    { text: "New Admission Starting for session 2026-27 from 19th September 2025. Visit office for details." },
    { text: "New Admission Started for session 2025-26 from 1st November 2024." },
  ];

  return (
    <div className="pb-23">
      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-2 md:px-8">
          {/* LOGO */}
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-20 w-auto cursor-pointer" />
          </Link>

          {/* MOBILE MENU ICON */}
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <CgMenuHotdog size="30" className="cursor-pointer" />
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex lg:gap-x-6 relative">
            {/* Home */}
            <NavLink to="/" className={({ isActive }) => `text-md font-medium ${isActive ? "text-green-800" : "text-black"} hover:text-green-800`}>
              Home
            </NavLink>

            {/* About */}
            <NavLink to="/about-us" className={({ isActive }) => `text-md font-medium ${isActive ? "text-green-800" : "text-black"} hover:text-green-800`}>
              About Us
            </NavLink>

            {/* Academic */}
            <div className="relative group flex items-center gap-1">
              <span className="cursor-pointer text-md font-medium hover:text-green-800 flex items-center gap-1">
                Academic <IoChevronDownOutline size={14} />
              </span>
              <div className="absolute top-6 left-0 bg-white text-black shadow-lg rounded-lg py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200 w-52">
                <NavLink to="/results" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Results
                </NavLink>
                <NavLink to="/assessments" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Assessments
                </NavLink>
                <NavLink to="/exam-routine" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Exam Routine
                </NavLink>
                <NavLink to="/special-events" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Special Events
                </NavLink>
                <NavLink to="/private-tuition" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Private Tuition
                </NavLink>
                <NavLink to="/curriculum" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Academic Calendar
                </NavLink>
              </div>
            </div>

            {/* Non Academic */}
            <div className="relative group flex items-center gap-1">
              <span className="cursor-pointer text-md font-medium hover:text-green-800 flex items-center gap-1">
                Non Academic <IoChevronDownOutline size={14} />
              </span>
              <div className="absolute top-6 left-0 bg-white text-black shadow-lg rounded-lg py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200 w-52">
                <NavLink to="/sports" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Sports
                </NavLink>
                <NavLink to="/cultural" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Cultural
                </NavLink>
                <NavLink to="/club-activities" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Club & Activities
                </NavLink>
              </div>
            </div>

            {/* Facilities */}
            <div className="relative group flex items-center gap-1">
              <span className="cursor-pointer text-md font-medium hover:text-green-800 flex items-center gap-1">
                Facilities <IoChevronDownOutline size={14} />
              </span>
              <div className="absolute top-6 left-0 bg-white text-black shadow-lg rounded-lg py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200 w-52">
                <NavLink to="/hostel" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Hostel
                </NavLink>
                <NavLink to="/library" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Library
                </NavLink>
                <NavLink to="/transport" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Transport
                </NavLink>
                <NavLink to="/laboratories" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Laboratories
                </NavLink>
                <NavLink to="/other-facilities" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Other Facilities
                </NavLink>
              </div>
            </div>

            {/* Admissions */}
            <div className="relative group flex items-center gap-1">
              <span className="cursor-pointer text-md font-medium hover:text-green-800 flex items-center gap-1">
                Admissions <IoChevronDownOutline size={14} />
              </span>
              <div className="absolute top-6 left-0 bg-white text-black shadow-lg rounded-lg py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200 w-52">
                <NavLink to="/fee-details" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Fee Details
                </NavLink>
                <NavLink to="/online-admission" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Online Admission
                </NavLink>
              </div>
            </div>

            {/* Other menu items */}
            <NavLink to="/our-faculty" className={({ isActive }) => `text-md font-medium ${isActive ? "text-green-800" : "text-black"} hover:text-green-800`}>
              Faculty
            </NavLink>

            <NavLink to="/our-gallery" className={({ isActive }) => `text-md font-medium ${isActive ? "text-green-800" : "text-black"} hover:text-green-800`}>
              Gallery
            </NavLink>

            <NavLink to="/contact-us" className={({ isActive }) => `text-md font-medium ${isActive ? "text-green-800" : "text-black"} hover:text-green-800`}>
              Contact Us
            </NavLink>
          </div>

          {/* Popup button */}
          <button className="hidden lg:flex lg:justify-end animate-pulse" onClick={() => setOpen(true)}>
            <CgMenuHotdog size="30" className="cursor-pointer" />
          </button>
        </nav>
      </header>

      {/* BACKDROP */}
      {open && <div onClick={() => setOpen(false)} className="hidden lg:block fixed inset-0 bg-black/50 z-40"></div>}

      {/* SIDE POPUP */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-[#264818] text-white shadow-xl z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-[#ff0000] text-lg font-semibold tracking-wide">Latest Notice</h2>
          <IoClose size="26" className="cursor-pointer hover:text-red-400 transition" onClick={() => setOpen(false)} />
        </div>

        <div className="flex flex-col h-[calc(100%-60px)] px-6">
          {/* NOTICE */}
          <div className="flex-1 overflow-hidden">
            <div className="animate-marqueeVertical space-y-4">
              {noticeData.map((notice, i) => (
                <div key={i} className="flex items-start text-white text-sm cursor-pointer hover:underline">
                  <FaArrowAltCircleRight size={14} className="mr-3 mt-1" />
                  <span>{notice.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="mb-6 mt-auto">
            <h2 className="text-[#ff0000] text-sm font-semibold mb-2">CONTACT</h2>
            <div className="flex items-center gap-3 mb-2">
              <IoCall size="18" /> <p className="text-sm font-medium">8617057067, 8768412688</p>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail size="18" /> <p className="text-sm font-medium">gvea_blg@rediffmail.com</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
