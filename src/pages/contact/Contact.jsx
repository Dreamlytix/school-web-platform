import React from "react";

// components
import Layout from "../../components/layout/Layout";

export default function Contact() {
  return (
    <Layout showBanner={false}>
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT — CONTACT FORM */}
          <div>
            <h3 className="text-sm font-semibold text-black tracking-wide">CONTACT US</h3>
            <h2 className="text-3xl font-bold text-green-800 mt-2">Want to Know More?</h2>
            <p className="text-gray-600 mt-3 leading-relaxed">Feel free to reach out for any inquiries or to book a free lesson for your child!</p>

            <form className="mt-10 space-y-5">
              <input
                type="text"
                placeholder="Enter your full name*"
                className="w-full rounded-lg bg-gray-100 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="text"
                placeholder="Enter your phone number*"
                className="w-full rounded-lg bg-gray-100 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="email"
                placeholder="Enter your e-mail*"
                className="w-full rounded-lg bg-gray-100 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                rows="4"
                placeholder="Type your message"
                className="w-full rounded-lg bg-gray-100 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>

              <button className="w-full cursor-pointer bg-green-800 hover:bg-green-900 transition text-white py-3 rounded-lg font-semibold text-lg shadow-md">
                Send
              </button>
            </form>
          </div>

          {/* RIGHT — GOOGLE MAP */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <iframe
              title="school-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.853510684983!2d88.78239577546288!3d22.586435779489614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8e1f92d148d71%3A0x375d3d6438f14df1!2sBalurghat%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1709723340000!5m2!1sen!2sin"
              className="w-full h-full min-h-[450px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
