import React from "react";

// react router dom
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=60')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Coming Soon</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">Our website is under construction. We’ll be here soon with our new awesome site!</p>

        <div className="flex items-center justify-center">
          <button className="flex items-center cursor-pointer gap-2 bg-green-600 hover:bg-green-700 transition px-6 py-2 rounded-full text-sm font-medium">
            <Link to="/">Go Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
