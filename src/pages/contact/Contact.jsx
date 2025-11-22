import React, { useState } from "react";

// components
import Layout from "../../components/layout/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // remove specific error once user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // success message
    setSuccess("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <Layout showBanner={false} title="Contact Us">
      <div className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT — CONTACT FORM */}
          <div>
            <h3 className="text-sm font-semibold text-black tracking-wide">CONTACT US</h3>
            <h2 className="text-3xl font-bold text-green-800 mt-2">Want to Know More?</h2>
            <p className="text-gray-600 mt-3 leading-relaxed">Feel free to reach out for any inquiries or to book a free lesson for your child!</p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name*"
                  className="w-full rounded-lg text-base bg-gray-100 px-4 py-2.5 text-gray-700 outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number*"
                  className="w-full rounded-lg text-base bg-gray-100 px-4 py-2.5 text-gray-700 outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your e-mail*"
                  className="w-full rounded-lg text-base bg-gray-100 px-4 py-2.5 text-gray-700 outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Type your message"
                className="w-full rounded-lg text-base bg-gray-100 px-4 py-2.5 text-gray-700 outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>

              <button
                type="submit"
                className="w-full cursor-pointer bg-green-800 hover:bg-green-900 transition text-white py-3 rounded-xl font-semibold text-md shadow-lg"
              >
                Send
              </button>

              {success && <p className="text-green-600 font-semibold text-center">{success}</p>}
            </form>
          </div>

          {/* RIGHT — GOOGLE MAP */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <iframe
              title="school-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.853510684983!2d88.78239577546288!3d22.586435779489614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8e1f92d148d71%3A0x375d3d6438f14df1!2sBalurghat%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1709723340000!5m2!1sen!2sin"
              className="w-full h-full min-h-[450px] border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
