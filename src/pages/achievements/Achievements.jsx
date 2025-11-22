import React from "react";

// components
import Layout from "../../components/layout/Layout";

export default function Achievements() {
  const achievementList = [
    {
      title: "Champion in siliguri writtick natya sanstha",
      description: "Our students won top positions at the National Science Fair 2024 competing with 200+ schools nationwide.",
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=60",
      date: "12 Jan 2025, Siliguri",
    },
    {
      title: "Champion in siliguri writtick natya sanstha",
      description: "Our school football team secured 1st position in the State Championship 2023 showing excellent discipline and teamwork.",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=60",
      date: "12 Jan 2025, Siliguri",
    },
    {
      title: "National Quiz Competition",
      description: "Winners of the National Inter-School Quiz 2022, proving excellence in learning and problem solving.",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=60",
      date: "12 Jan 2025, Siliguri",
    },
    {
      title: "National Science Award",
      description: "Our students won top positions at the National Science Fair 2024 competing with 200+ schools nationwide.",
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=60",
      date: "12 Jan 2025, Siliguri",
    },
    {
      title: "State Level Football Championship",
      description: "Our school football team secured 1st position in the State Championship 2023 showing excellent discipline and teamwork.",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=60",
      date: "12 Jan 2025, Siliguri",
    },
    {
      title: "National Quiz Competition",
      description:
        "Student achieving positions in an art competition Main bhi Kalakar by SBI Life Insurance.  Ayush Das of class VII (Group 2) secured 2nd position for showing his brilliant artistic capabilities is going to be honoured as Kalakars.",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=60",
      date: "12 Jan 2025, Siliguri",
    },
  ];

  return (
    <Layout showBanner={false} title="Achievements">
      <div className="mx-auto w-full max-w-7xl px-4 py-16">
        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">Our Achievements</h2>
          <p className="text-gray-600 mt-2">Celebrating excellence in academics, sports, science, and cultural events.</p>
        </div>

        {/* ACHIEVEMENT ROWS */}
        {achievementList.map((item, index) => (
          <div key={index} className={`flex flex-col lg:flex-row items-center gap-10 py-10 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
            {/* IMAGE SECTION */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-lg">
              <img src={item.img} alt="achievement" className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 hover:scale-105" />
            </div>

            {/* TEXT SECTION */}
            <div className="w-full lg:w-1/2">
              {/* DATE BADGE */}
              <span className=" bg-green-700 text-white px-3 py-1 rounded-md text-xs font-medium shadow-md">{item.date}</span>

              <h3 className="text-2xl font-semibold text-green-800 py-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
