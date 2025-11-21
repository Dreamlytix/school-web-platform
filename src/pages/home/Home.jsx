import React from "react";

// Components
import Layout from "../../components/layout/Layout";

// react-icons & images
import { HiAcademicCap } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import AdmissionOpen from "../../assets/admission-open.png";

export default function Home() {
  const features = [
    {
      title: "Academics",
      description: "We are affiliated to the Council for Indian School Certificate Examinations, We do the ICSE (X) and ISC (XII).",
      icon: "https://robotics-school.weblium.site/res/60362182ee264c00229395cc/60376741dba09800219ee56b", // replace with your icon
      bg: "https://www.tgvea.com/Temlate_131/doonpublic/event-newsit.jpg",
    },
    {
      title: "Admissions",
      description: "We assess all the applicants on an individual basis, admissions are based on results of admission tests & availability.",
      icon: "https://robotics-school.weblium.site/res/60362182ee264c00229395cc/60376741dba09800219ee56b", // replace with your icon
      bg: "https://www.tgvea.com/Temlate_131/doonpublic/school-life.jpg",
    },
    {
      title: "Facilities & Infrastructure",
      description: "Welcome to Corpus Christi House - A home away from home, in a true sense. Where memories are created.",
      icon: "https://robotics-school.weblium.site/res/60362182ee264c00229395cc/60376741dba09800219ee56b", // replace with your icon
      bg: "https://www.tgvea.com/Temlate_131/doonpublic/facility.jpg",
    },
  ];

  const galleryData = [
    {
      title: "Play School",
      img: "https://pallikoodam.org/content/uploads/2024/08/PKDM-KG-84-scaled.jpeg",
    },
    {
      title: "Drama",
      img: "https://pallikoodam.org/content/uploads/2024/08/PKDM-KG-84-scaled.jpeg",
    },
    {
      title: "Events",
      img: "https://pallikoodam.org/content/uploads/2024/08/PKDM-KG-84-scaled.jpeg",
    },
    {
      title: "Dance",
      img: "https://pallikoodam.org/content/uploads/2024/08/PKDM-KG-84-scaled.jpeg",
    },
    {
      title: "Sports",
      img: "https://pallikoodam.org/content/uploads/2024/08/PKDM-KG-84-scaled.jpeg",
    },
    {
      title: "Library",
      img: "https://pallikoodam.org/content/uploads/2024/08/PKDM-KG-84-scaled.jpeg",
    },
    {
      title: "Swimming",
      img: "https://pallikoodam.org/content/uploads/2024/08/PKDM-KG-84-scaled.jpeg",
    },
    {
      title: "Programmes",
      img: "https://pallikoodam.org/content/uploads/2024/08/PKDM-KG-84-scaled.jpeg",
    },
  ];

  const carouselData = [
    {
      title: "Swimming",
      description: "Swimming is an integral part of the curriculum for the students from the Nursery class.",
      img: "https://pallikoodam.org/content/uploads/2024/08/Phy-Ed_Home.jpg",
    },
    {
      title: "Athletics",
      description: "Athletics builds confidence, discipline, endurance, and physical strength.",
      img: "https://pallikoodam.org/content/uploads/2024/08/swimming-home.jpg",
    },
    {
      title: "Martial Arts",
      description: "Martial arts helps improve focus, balance, flexibility, and self-control.",
      img: "https://pallikoodam.org/content/uploads/2024/08/swimming-home.jpg",
    },
    {
      title: "Swimming",
      description: "Swimming is an integral part of the curriculum for the students from the Nursery class.",
      img: "https://pallikoodam.org/content/uploads/2024/08/Phy-Ed_Home.jpg",
    },
    {
      title: "Athletics",
      description: "Athletics builds confidence, discipline, endurance, and physical strength.",
      img: "https://pallikoodam.org/content/uploads/2024/08/swimming-home.jpg",
    },
    {
      title: "Martial Arts",
      description: "Martial arts helps improve focus, balance, flexibility, and self-control.",
      img: "https://pallikoodam.org/content/uploads/2024/08/swimming-home.jpg",
    },
  ];

  return (
    <Layout>
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 text-center bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.bg})` }}
            >
              <div key={i} className="bg-white/85 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-5 py-6 text-center">
                {/* ICON + TITLE ROW */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <HiAcademicCap className="w-10 h-10 text-green-800" />
                  <h3 className="text-lg font-semibold text-green-800">{item.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-8700 text-md mb-4">{item.description}</p>

                {/* Button */}
                <button className="inline-flex items-center text-body text-green-800 border border-green-800 cursor-pointer shadow-sm font-medium text-sm px-4 py-2.5 rounded-xl hover:shadow-lg hover:text-white hover:bg-green-900">
                  Read more <IoIosArrowRoundForward size="24" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 items-center pt-24 pb-18">
          {/* LEFT SECTION */}
          <div className="space-y-7">
            <p className="text-gray-600 leading-relaxed mb-3">
              As the very proud Principal of this academic institution that is the only school in Balurghat affiliated to the Council for the Indian School
              Certificate Examination, New Delhi, for both ICSE and ISC and providing exceptional education to the students since 2004, I warmly welcome you to
              The Green View English Academy.
            </p>

            <p className="text-gray-600 leading-relaxed mb-3">
              The Green View English Academy is committed to serve the children through high-quality educational endeavours, empowering them to contribute
              towards the humane by creating exciting learning opportunities with a commitment towards excellence. The school believes and advocates each
              child’s holistic development and not only his/her attainment/ achievement in various subjects.{" "}
            </p>

            <p className="text-gray-600 leading-relaxed mb-10">
              We want to view different aspects that are knowledge, skills, interests, attitude and value in each child’s behaviour. A strong emphasis is placed
              on developing the ability to question, analyze, investigate, think critically, solve problems, and interact effectively with others.
            </p>

            <button className="inline-flex items-center text-body text-green-800 border border-green-800 cursor-pointer shadow-sm font-medium text-sm px-4 py-2.5 rounded-xl hover:shadow-lg hover:text-white hover:bg-green-900">
              Read more <IoIosArrowRoundForward size="24" />
            </button>
          </div>

          {/* RIGHT SECTION */}
          <div className="relative w-full flex flex-col items-center text-center">
            <div className="w-64 h-64 md:w-[350px] md:h-[350px] rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-md">
              <img
                src="https://www.tgvea.com/web_admin/images/8349_1611550557.jpeg"
                alt="Child with robot"
                className="w-[95%] h-[95%] object-cover rounded-full"
              />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-green-800">Mary Roy, Founding Principal</h3>
            <p className="text-gray-600 text-sm italic">Knowledge With Pleasure</p>
          </div>
        </div>
      </div>

      <div className="bg-[url('https://pallikoodam.org/template/img/bg/services-bg.jpg')] bg-cover bg-center py-14">
        {/* ------- FIRST SECTION ------- */}
        <div className="max-w-6xl mx-auto bg-[#f8f1e6] p-8 rounded-lg shadow-lg flex flex-col lg:flex-row gap-10 mb-16">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://pallikoodam.org/content/uploads/2024/06/20230410_051609-scaled.jpg"
              alt="Wider Horizons"
              className="rounded-lg shadow-xl border-8 border-[#fff7e9]"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800">Achievements</h2>

            <p className="text-gray-700 leading-relaxed">
              Congratulations to our students Arpan Chakraborty, Aditya Sarkar, Asif Ahmed, and Meheraj Sarkar (Std X) for their outstanding success in VVM 2021
              — India’s largest science talent search organized by the Govt. of India. The prize distribution ceremony was held at the Indian Institute of
              Chemical Biology, Jadavpur, in the presence of Hon’ble Governor of West Bengal, Mr. Jagdeep Dhankhar.
            </p>

            <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-900 transition cursor-pointer">Read More</button>
          </div>
        </div>

        {/* ------- SECOND CAROUSEL SECTION ------- */}
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Carousel Wrapper */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="flex animate-slide gap-6">
              {carouselData.map((item, index) => (
                <div key={index} className="relative min-w-full md:min-w-[33.333%] group">
                  <img src={item.img} alt={item.title} className="w-full h-60 object-cover rounded-md shadow-md" />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-between transition text-white p-8 rounded-lg shadow-xl h-60">
                    <div>
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="text-gray-300 mt-3">{item.description}</p>
                    </div>

                    <button className="mt-4 text-white text-sm flex items-center gap-2 hover:underline">Read More →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 py-6">
          {/* LEFT CARD */}
          <div className="bg-[#fff9ef] shadow-md p-8 rounded-lg">
            <h2 className="text-3xl font-semibold text-gray-800">Latest Updates</h2>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Stay up-to-date with our school’s latest news and events. Check here for announcements, achievements, and new initiatives happening in our
              community.
            </p>

            {/* Updates List */}
            <div className="mt-6 space-y-3">
              {[
                "Bharatham- Inter House Culturals 2025",
                "Remembering Mary Ammachi...",
                "Newsletter September 2025",
                "Newsletter August 2025",
                "A part of Indian history, unplugged!",
                "Pallikoodam Hosts Vth CISCE Zonal Aquatic Meet 2025",
                "Learning Beyond Books!",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white cursor-pointer rounded-md px-4 py-2 shadow-sm flex justify-between items-center text-gray-700  border border-gray-200 hover:text-green-800 hover:border-green-800"
                >
                  <span className="text-sm">{item}</span>
                  <span className="text-orange-500 text-lg">&#128279;</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="inline-flex items-center text-body text-green-800 border border-green-800 cursor-pointer shadow-sm font-medium text-sm mt-8 px-4 py-2.5 rounded-xl hover:shadow-lg hover:text-white hover:bg-green-900">
              View All <IoIosArrowRoundForward size="24" />
            </button>
          </div>

          {/* RIGHT IMAGE WITH PLAY BUTTON */}
          <div className="relative rounded-lg overflow-hidden">
            <img src="https://pallikoodam.org/content/uploads/2024/06/qucik-img.jpg" alt="Campus" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-12 pb-8">
          {/* Section Title */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Photo Gallery</h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryData.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow cursor-pointer">
                <img src={item.img} alt={item.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />

                <div className="absolute bottom-3 left-3 text-white bg-[#406d2d] px-3 py-1 text-xs rounded max-w-[85%]">{item.title}</div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-5">
            <button className="inline-flex items-center text-body text-green-800 border border-green-800 cursor-pointer shadow-sm font-medium text-sm mt-8 px-4 py-2.5 rounded-xl hover:shadow-lg hover:text-white hover:bg-green-900">
              View All <IoIosArrowRoundForward size="24" />
            </button>
          </div>
        </div>
      </div>

      <div className="animate-bounce group fixed bottom-10 right-0 flex items-end justify-end">
        <img src={AdmissionOpen} alt="admission open" className="w-44 cursor-pointer" />
      </div>
    </Layout>
  );
}
