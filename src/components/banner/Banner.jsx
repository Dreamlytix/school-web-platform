import React, { useEffect, useState } from "react";

const slides = [
  "https://pallikoodam.org/content/uploads/2024/07/banner_slider1-e1723057319410.jpg",
  "https://pallikoodam.org/content/uploads/2024/08/IT-e1723057490354.jpg",
  "https://www.tgvea.com/web_admin/images/3954_1739515931.jpg",
  "https://www.tgvea.com/web_admin/images/3350_1739515538.jpg",
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full pt-23">
      {/* Carousel wrapper */}
      <div className="relative h-100 overflow-hidden md:h-160">
        {slides.map((src, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === i ? "opacity-100" : "opacity-0"}`}>
            {/* Background Image */}
            <img src={src} alt={`Slide ${i + 1}`} className="block w-full h-full object-cover" />

            {/* TEXT OVERLAY */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/30">
              <p className="text-white mt-4 text-lg md:text-xl drop-shadow-md max-w-2xl">
                Inspiring young minds through creativity, <br />
                knowledge, and innovation.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${index === i ? "bg-white" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}
