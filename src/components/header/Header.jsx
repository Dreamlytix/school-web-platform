import React, { useState } from "react";

// Assets & Icons
import Logo from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { CgMenuHotdog } from "react-icons/cg";
import { IoClose, IoCall } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About", "Academic", "Non Academic", "Facilities", "Admissions", "Teachers", "Gallery", "Contact"];

  const noticeData = [
    { text: "New Admission Starting for session 2026-27 from 19th September 2025. Visit office for details." },
    { text: "New Admission Started for session 2025-26 from 1st November 2024." },
  ];

  return (
    <div className="pb-23">
      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-2 md:px-8">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="h-20 w-auto" />

          {/* Mobile Menu Icon (Left) */}
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <CgMenuHotdog size="30" className="cursor-pointer" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-6">
            {menuItems.map((item) => (
              <a key={item} href="#" className="text-md font-medium text-black hover:text-green-800 hover:underline">
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Popup Trigger */}
          <button className="hidden lg:flex lg:justify-end animate-pulse" onClick={() => setOpen(true)}>
            <CgMenuHotdog size="30" className="cursor-pointer" />
          </button>
        </nav>
      </header>

      {/* BACKDROP (Desktop only) */}
      {open && <div onClick={() => setOpen(false)} className="hidden lg:block fixed inset-0 bg-black/50 z-40"></div>}

      {/* SIDE POPUP */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-[#264818] text-white shadow-xl z-50
        transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Popup Header */}
        <div className="flex items-center justify-between p-4">
          <h2 className="text-[#ff0000] text-lg font-semibold tracking-wide">Latest Notice</h2>

          <IoClose size="26" className="cursor-pointer hover:text-red-400 transition" onClick={() => setOpen(false)} />
        </div>

        {/* Popup Body */}
        <div className="flex flex-col h-[calc(100%-60px)] px-6">
          {/* Notice Scrolling Section */}
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

          {/* CONTACT SECTION */}
          <div className="mb-6 mt-auto">
            <h2 className="text-[#ff0000] text-sm font-semibold tracking-wide mb-2">CONTACT</h2>

            <div className="flex items-center gap-3 mb-2">
              <IoCall size="18" />
              <p className="text-sm font-medium">8617057067, 8768412688</p>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail size="18" />
              <p className="text-sm font-medium">gvea_blg@rediffmail.com</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
