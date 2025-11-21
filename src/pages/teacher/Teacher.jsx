import React, { useState } from "react";

// components
import Layout from "../../components/layout/Layout";

// react-icons
import { MdEmail } from "react-icons/md";

export default function Teacher() {
  const [selected, setSelected] = useState(null);

  const team = [
    {
      name: "Shipra Chatterjee",
      title: "B.A (English), D.El.Ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/2458_1611166707.jpg",
      email: "",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge. ",
    },
    {
      name: "Payel Chakraborty ",
      title: "M.sc (Botany),B.ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/4618_1636872362.jpg",
      email: "tgveaofficial.payel@gmail.com",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Abhik Saha ",
      title: "M.A(Bengali), B.Ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/9211_1682055010.jpg",
      email: "abhiksaha.blg@gmail.com",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Plaban Das",
      title: "B.A, B.Ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/2758_1737352312.jpg",
      email: "",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Shipra Chatterjee",
      title: "B.A (English), D.El.Ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/2458_1611166707.jpg",
      email: "",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Payel Chakraborty ",
      title: "M.sc (Botany),B.ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/4618_1636872362.jpg",
      email: "tgveaofficial.payel@gmail.com",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Abhik Saha ",
      title: "M.A(Bengali), B.Ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/9211_1682055010.jpg",
      email: "abhiksaha.blg@gmail.com",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Plaban Das",
      title: "B.A, B.Ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/2758_1737352312.jpg",
      email: "",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Shipra Chatterjee",
      title: "B.A (English), D.El.Ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/2458_1611166707.jpg",
      email: "",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Payel Chakraborty ",
      title: "M.sc (Botany),B.ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/4618_1636872362.jpg",
      email: "tgveaofficial.payel@gmail.com",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Abhik Saha ",
      title: "M.A(Bengali), B.Ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/9211_1682055010.jpg",
      email: "abhiksaha.blg@gmail.com",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Plaban Das",
      title: "B.A, B.Ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/2758_1737352312.jpg",
      email: "",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Shipra Chatterjee",
      title: "B.A (English), D.El.Ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/2458_1611166707.jpg",
      email: "",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Payel Chakraborty ",
      title: "M.sc (Botany),B.ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/4618_1636872362.jpg",
      email: "tgveaofficial.payel@gmail.com",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Abhik Saha ",
      title: "M.A(Bengali), B.Ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/9211_1682055010.jpg",
      email: "abhiksaha.blg@gmail.com",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Plaban Das",
      title: "B.A, B.Ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/2758_1737352312.jpg",
      email: "",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Shipra Chatterjee",
      title: "B.A (English), D.El.Ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/2458_1611166707.jpg",
      email: "",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
    {
      name: "Payel Chakraborty ",
      title: "M.sc (Botany),B.ed",
      role: "Assistant Teacher",
      img: "https://www.tgvea.com/web_admin/images/4618_1636872362.jpg",
      email: "tgveaofficial.payel@gmail.com",
      description:
        "Mr. Partha Protim Poddar completed his undergraduate(Hons.) from Balurghat College (UGB). He received M.Sc (Computer Science) from North Bengal University and presented his paper Pattern Recognition using Modified Compression Algorithm with Mexican Hat (MCAMH) in an international seminar organized by North Bengal University. He has visited a seminar on Big Data Analysis at Indian Statistical Institute (ISI). He completed his B.Ed training from the West Bengal University of Teachers Training Education Planning & Administration (WBUTTEPA). He has an interest on artificial intelligence and search engine optimization. Although many exceptional educational opportunities are available, the prestigious school provides its students with a thorough understanding of the importance of maintaining discipline. In addition, the school is renowned for its high-quality teaching and the admirable conduct of its students. As such, I would be delighted to join such a dedicated team and contribute my skills toward enriching the students knowledge.",
    },
  ];

  return (
    <Layout showBanner={false} title="Teachers">
      <div className="mx-auto w-full max-w-7xl px-4 py-18">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="border border-green-800/40 rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden">
              {/* Top Section */}
              <div className="flex flex-col items-center px-6 py-6">
                <img src={member.img} className="w-32 h-32 rounded-full object-cover border-2 border-green-700/40" />
                <h2 className="text-green-800 text-xl font-semibold mt-6 cursor-pointer hover:underline" onClick={() => setSelected(member)}>
                  {member.name}
                </h2>
                <p className="text-gray-600 text-sm mt-1">{member.title}</p>

                <span className="bg-green-900 text-white px-6 py-2 rounded-full text-xs mt-4">{member.role}</span>
              </div>
              {/* Divider */}
              <div className="border-t border-gray-700/40"></div>

              {/* Bottom Buttons */}
              <div className="flex justify-around py-4 bg-[#0b1220]">
                <button className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer hover:text-white transition">
                  <MdEmail size={20} />
                  <span>{member.email}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TEACHER DETAILS POPUP */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-4xl w-full rounded-2xl shadow-xl p-8 animate-[fadeIn_.2s_ease]">
            {/* IMAGE */}
            <div className="flex justify-center">
              <img src={selected.img} className="w-40 h-40 rounded-full object-cover border-4 border-green-700/40" />
            </div>

            {/* NAME */}
            <h2 className="text-2xl font-semibold text-green-800 text-center mt-4">{selected.name}</h2>

            {/* DESIGNATION */}
            <p className="text-gray-600 text-center mt-2 font-medium text-md">
              {selected.title} ({selected.role})
            </p>

            {/* SCROLLABLE CONTENT */}
            <div className="max-h-[50vh] overflow-y-auto pr-2 mt-6">
              <p className="text-gray-600 leading-relaxed text-sm text-justify">{selected.description}</p>
            </div>

            {/* BUTTON */}
            <div className="flex justify-center mt-8">
              <button onClick={() => setSelected(null)} className="bg-green-800 text-white px-8 py-3 rounded-lg text-sm hover:bg-green-900 transition">
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
