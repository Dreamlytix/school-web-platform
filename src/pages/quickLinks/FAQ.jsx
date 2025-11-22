import React, { useState } from "react";
import Layout from "../../components/layout/Layout";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      question: "What is the admission process?",
      answer:
        "Admission forms can be collected from the school office or downloaded from our website. Submit the form along with required documents for verification.",
    },
    {
      question: "What are the school timings?",
      answer: "School timings for Monday to Friday are 9:00 AM to 2:30 PM. Saturday is a half-day for selected activities.",
    },
    {
      question: "Do you provide transportation facilities?",
      answer: "Yes, the school provides transportation services covering major nearby areas with complete safety and monitoring.",
    },
    {
      question: "How can I contact the school?",
      answer: "You can contact us by phone at 8617057067 / 8768412688 or email us at gvea_blg@rediffmail.com.",
    },
    {
      question: "Do you offer extracurricular activities?",
      answer: "We offer sports, music, art, robotics, science club, swimming, and many more skill development activities.",
    },
    {
      question: "What are the school timings?",
      answer: "School timings for Monday to Friday are 9:00 AM to 2:30 PM. Saturday is a half-day for selected activities.",
    },
    {
      question: "Do you provide transportation facilities?",
      answer: "Yes, the school provides transportation services covering major nearby areas with complete safety and monitoring.",
    },
    {
      question: "How can I contact the school?",
      answer: "You can contact us by phone at 8617057067 / 8768412688 or email us at gvea_blg@rediffmail.com.",
    },
    {
      question: "Do you offer extracurricular activities?",
      answer: "We offer sports, music, art, robotics, science club, swimming, and many more skill development activities.",
    },
  ];

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <Layout showBanner={false} title="FAQ">
      <div className="mx-auto w-full max-w-7xl px-4 py-16">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">Frequently Asked Questions</h1>
        <p className="text-center text-gray-600 mx-auto mb-10">
          Here are some common questions asked by students and parents. Click a question to view its answer.
        </p>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqList.map((item, i) => (
            <div key={i} className="border border-white hover:border-green-600 rounded-xl shadow-sm bg-white overflow-hidden transition-all">
              <button className="w-full flex justify-between items-center px-5 py-3 text-left cursor-pointer" onClick={() => toggleFAQ(i)}>
                <span className="text-md font-medium text-green-900">{item.question}</span>
                <span className="text-green-800 text-2xl font-bold">{openIndex === i ? "-" : "+"}</span>
              </button>

              {/* Answer Section */}
              <div className={`px-5 pb-5 text-gray-600 text-sm leading-relaxed transition-all duration-300 ${openIndex === i ? "block" : "hidden"}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
