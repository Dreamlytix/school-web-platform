import React from "react";

// react router dom
import { Link } from "react-router-dom";

// images
import FooterLogo from "../../assets/footer-logo.jpeg";

export default function Footer() {
  const footerInfo = [
    {
      title: "Working Days.",
      value: "MON–FRI (9:00 am - 2:30 pm)",
    },
    {
      title: "Phone Number.",
      value: "(+91) 8617057067, 8768412688",
    },
    {
      title: "Email Address.",
      value: "gvea_blg@rediffmail.com",
    },
    {
      title: "Our Address.",
      value: "Beline, Chakvrigu Balurghat, Dakshin Dinajpur 733102",
    },
  ];

  return (
    <footer className="bg-[#264818] text-white pt-8 pb-4">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {footerInfo.map((item, index) => (
          <div key={index}>
            <h3 className="text-md font-semibold">{item.title}</h3>
            <p className="text-xs text-yellow-300 mt-2 ">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-4 mb-6 border-t border-blue-300/30"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <img src={FooterLogo} className="w-60 rounded" alt="RoboTech" />
          <div>
            <p className="text-xs tracking-wider text-blue-200 uppercase">The Green View English Academy</p>
          </div>

          <p className="text-blue-100 mt-2 leading-relaxed text-sm max-w-xs">
            We provide a warm, supportive learning environment where every student receives personal attention and the guidance.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-md font-semibold">
            Navigation<span className="text-red-400">.</span>
          </h3>
          <div className="w-10 h-0.5 bg-[#f4b50e] mt-2 mb-4"></div>
          <ul className="text-sm space-y-3 text-blue-100">
            <li>
              <Link to="/alumni" className="hover:underline transition">
                Alumni.
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:underline transition">
                About us.
              </Link>
            </li>
            <li>
              <Link to="/our-faculty" className="hover:underline transition">
                Our Faculty.
              </Link>
            </li>
            <li>
              <Link to="/achievements" className="hover:underline transition">
                Achievements.
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold">
            Quick Links<span className="text-red-400">.</span>
          </h3>
          <div className="w-10 h-0.5 bg-[#f4b50e] mt-2 mb-4"></div>
          <ul className="text-sm space-y-3 text-blue-100">
            <li>
              <Link to="/faq" className="hover:underline transition">
                FAQ.
              </Link>
            </li>

            <li>
              <Link to="/achievements" className="hover:underline transition">
                Achievements.
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline transition">
                Privacy Policy.
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:underline transition">
                Terms & Conditions.
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-md font-semibold">
            Application<span className="text-red-400">.</span>
          </h3>
          <div className="w-10 h-0.5 bg-[#f4b50e] mt-2 mb-4"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-33 cursor-pointer" />
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-33 mt-2 cursor-pointer" />

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            {/* LinkedIn */}

            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" className="w-6 h-6 cursor-pointer" />

            {/* Facebook */}
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6 cursor-pointer" />

            {/* YouTube */}
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-8 h-8 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-6 border-t border-blue-300/20"></div>
      <p className="text-blue-100 text-center mt-4 leading-relaxed text-sm">
        © Copyright 2025. All Rights Reserved. Developed by{" "}
        <a href="https://dreamlytix.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition">
          Dreamlytix
        </a>
      </p>
    </footer>
  );
}
