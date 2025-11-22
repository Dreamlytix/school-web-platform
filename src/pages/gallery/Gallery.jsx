import React, { useState } from "react";

// components
import Layout from "../../components/layout/Layout";

import { FaVideo } from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";

// IMAGE ARRAY (You can move this to a separate JSON file later)
const galleryImages = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
];

const galleryVideos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/ysz5S6PUM-U",
  "https://www.youtube.com/embed/lTTajzrSkCw",
  "https://www.youtube.com/embed/JGwWNGJdvx8",
  "https://www.youtube.com/embed/kXYiU_JCYtU",
  "https://www.youtube.com/embed/hTWKbfoikeg",
  "https://www.youtube.com/embed/K6l8z6ANZgM",
  "https://www.youtube.com/embed/FTQbiNvZqaY",
  "https://www.youtube.com/embed/9bZkp7q19f0",
];

export default function Gallery() {
  const [active, setActive] = useState("photo");
  const [selectedImage, setSelectedImage] = useState(null);

  const nextImage = () => {
    const currentIndex = galleryImages.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryImages.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <Layout showBanner={false} title="Photo Gallery">
      <div className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="w-full flex flex-col items-center">
          <div className="bg-gray-100 px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-10">
            {/* PHOTO TAB */}
            <button
              onClick={() => setActive("photo")}
              className={`flex items-center gap-2 text-sm cursor-pointer font-medium transition px-12 py-2 rounded-3xl ${
                active === "photo" ? "bg-green-800 shadow text-white" : "text-gray-500"
              }`}
            >
              <MdPhotoLibrary size={22} />
              Photo
            </button>

            {/* VIDEO TAB */}
            <button
              onClick={() => setActive("video")}
              className={`flex items-center gap-2 text-sm cursor-pointer font-medium transition px-12 py-2 rounded-3xl ${
                active === "video" ? "bg-green-800 shadow text-white" : "text-gray-500"
              }`}
            >
              <FaVideo size={22} />
              Video
            </button>
          </div>

          {/* Divider line */}
          <hr className="w-full border-t border-gray-300 mt-1" />

          {/* TAB CONTENT AREA */}
          <div className="w-full pt-10">
            {active === "photo" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[0, 1, 2, 3].map((colIndex) => (
                  <div key={colIndex} className="grid gap-4">
                    {galleryImages.slice(colIndex * 3, colIndex * 3 + 3).map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="gallery-photo"
                        onClick={() => setSelectedImage(img)}
                        className="h-auto max-w-full cursor-pointer rounded-lg transition-all duration-300 hover:rotate-3 hover:scale-105"
                      />
                    ))}
                  </div>
                ))}
              </div>
            )}

            {active === "video" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                {galleryVideos.map((video, index) => (
                  <div key={index} className="relative w-full overflow-hidden rounded-xl shadow-md group">
                    <iframe
                      className="w-full h-52 rounded-xl transition-transform duration-300 group-hover:scale-105"
                      src={video}
                      title={`video-${index}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* POPUP IMAGE VIEWER */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          {/* CLOSE BUTTON */}
          <button className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer" onClick={() => setSelectedImage(null)}>
            ✕
          </button>

          {/* LEFT ARROW */}
          <button onClick={prevImage} className="absolute left-5 text-white text-4xl cursor-pointer hover:text-gray-400">
            ❮
          </button>

          {/* IMAGE */}
          <img src={selectedImage} alt="preview" className="max-w-3xl max-h-[80vh] rounded-lg shadow-2xl animate-fadeIn" />

          {/* RIGHT ARROW */}
          <button onClick={nextImage} className="absolute right-5 text-white text-4xl cursor-pointer hover:text-gray-400">
            ❯
          </button>
        </div>
      )}
    </Layout>
  );
}
