import React from "react";

// components
import Layout from "../../components/layout/Layout";

export default function FeeDetails() {
  const skills = [
    { id: 1, activity: "Bharathanatyam", fee: "Rs. 3,000.00" },
    { id: 2, activity: "Carnatic Vocal", fee: "Rs. 2,500.00" },
    { id: 3, activity: "Karate", fee: "Rs. 2,500.00" },
    { id: 4, activity: "Guitar", fee: "Rs. 3,000.00" },
    { id: 5, activity: "Recorder", fee: "Rs. 2,500.00" },
    { id: 6, activity: "Organ", fee: "Rs. 2,500.00" },
    { id: 7, activity: "Violin", fee: "Rs. 3,000.00" },
    { id: 8, activity: "Yoga", fee: "Rs. 750.00" },
    { id: 9, activity: "Zumba Dance", fee: "Rs. 750.00" },
  ];

  const junior = [
    { class: "I", text: "Rs. 550.00", note: "Rs. 1550.00", tuck: "Rs. 600.00", total: "Rs. 2700.00" },
    { class: "II", text: "Rs. 550.00", note: "Rs. 1750.00", tuck: "Rs. 600.00", total: "Rs. 2900.00" },
    { class: "III", text: "Rs.1700.00", note: "Rs.1950.00", tuck: "Rs. 600.00", total: "Rs. 4250.00" },
    { class: "IV", text: "Rs.2320.00", note: "Rs.1980.00", tuck: "Rs. 600.00", total: "Rs. 4900.00" },
  ];

  const senior = [
    { class: "V", text: "Rs.2820.00", note: "Rs.1130.00", supw: "Rs.500.00", total: "Rs.4450.00" },
    { class: "VI", text: "Rs.4230.00", note: "Rs. 870.00", supw: "Rs.500.00", total: "Rs.5600.00" },
    { class: "VII", text: "Rs.4340.00", note: "Rs.910.00", supw: "Rs.500.00", total: "Rs.5750.00" },
    { class: "VIII", text: "Rs.4130.00", note: "Rs.970.00", supw: "Rs.500.00", total: "Rs.5600.00" },
    { class: "IX", text: "Rs.4990.00", note: "Rs.1410.00", supw: "Rs.500.00", total: "Rs.6900.00" },
    { class: "X", text: "Rs.5150.00", note: "Rs.1100.00", supw: "Rs.500.00", total: "Rs.6750.00" },
    { class: "XI (Science)", text: "Rs.6300.00", note: "Rs.1300.00", supw: "Rs.500.00", total: "Rs.8100.00" },
    { class: "XI (Commerce)", text: "Rs.5600.00", note: "Rs.1050.00", supw: "Rs.500.00", total: "Rs.7150.00" },
    { class: "XI (Humanities)", text: "Rs.4820.00", note: "Rs.1280.00", supw: "Rs.500.00", total: "Rs.6600.00" },
    { class: "XII (Science)", text: "Rs.8100.00", note: "Rs.950.00", supw: "Rs.500.00", total: "Rs.9550.00" },
    { class: "XII (Commerce)", text: "Rs.6910.00", note: "Rs.840.00", supw: "Rs.500.00", total: "Rs.8250.00" },
    { class: "XII (Humanities)", text: "Rs.4860.00", note: "Rs.640.00", supw: "Rs.500.00", total: "Rs.6000.00" },
  ];

  return (
    <Layout showBanner={false} title="Contact Us">
      <div className="mx-auto w-full max-w-7xl px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">Fee Details</h2>
          <p className="text-gray-600 mt-2">
            Celebrating excellence in academics, excellence in academics, excellence in academics, sports, science, and cultural events.
          </p>
        </div>

        <h2 className="text-xl font-bold text-green-800 mb-4">School Fee Structure for 2025-2026</h2>

        {/* School Fee Table */}
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full text-sm text-center border-collapse text-gray-700">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="border border-gray-300 p-2.5">CLASS</th>
                <th className="border border-gray-300 p-2.5">TUITION FEES PER TERM</th>
                <th className="border border-gray-300 p-2.5">FEES FOR ONE YEAR</th>
              </tr>
            </thead>

            <tbody>
              <tr className="even:bg-[#18e0181c]">
                <td className="border border-gray-300 p-2.5">Kalari</td>
                <td className="border border-gray-300 p-2.5">Rs. 37,000</td>
                <td className="border border-gray-300 p-2.5">Rs. 1,11,000</td>
              </tr>
              <tr className="even:bg-[#18e0181c]">
                <td className="border border-gray-300 p-2.5">Nursery, Stds I to IV</td>
                <td className="border border-gray-300 p-2.5">Rs. 50,500</td>
                <td className="border border-gray-300 p-2.5">Rs. 1,51,500</td>
              </tr>
              <tr className="even:bg-[#18e0181c]">
                <td className="border border-gray-300 p-2.5">Stds V to X</td>
                <td className="border border-gray-300 p-2.5">Rs. 52,500</td>
                <td className="border border-gray-300 p-2.5">Rs. 1,57,500</td>
              </tr>
              <tr className="even:bg-[#18e0181c]">
                <td className="border border-gray-300 p-2.5">Stds XI and XII</td>
                <td className="border border-gray-300 p-2.5">Rs. 56,000</td>
                <td className="border border-gray-300 p-2.5">Rs. 1,68,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hostel Fee Heading */}
        <h2 className="text-xl font-bold text-green-800 mt-12 mb-4">Hostel Fee Structure for 2025-2026</h2>

        {/* Hostel Table */}
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full text-sm text-center border-collapse text-gray-700">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="border border-gray-300 p-2.5">HOSTEL FEES</th>
                <th className="border border-gray-300 p-2.5">FEES PER TERM</th>
                <th className="border border-gray-300 p-2.5">FEES FOR ONE YEAR</th>
              </tr>
            </thead>

            <tbody>
              <tr className="even:bg-[#18e0181c]">
                <td className="border border-gray-300 p-2.5">Stds I to XII</td>
                <td className="border border-gray-300 p-2.5">Rs. 75,250</td>
                <td className="border border-gray-300 p-2.5">Rs. 2,25,750</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes Section */}
        <div className="my-10 space-y-3 text-sm text-gray-700 leading-relaxed">
          <p>✔ Fees once paid will not be refunded. Duplicate receipts cost Rs. 200.</p>
          <p>✔ Residential pupils must check in clothes and belongings on fee payment day.</p>
          <p>✔ Fees of younger siblings may be paid with elder ones.</p>
          <p>✔ Parents may collect books after fees are paid.</p>
          <p>
            ✔ Cheques for school fees must be in favour of <strong>Pallikoodam</strong>.
          </p>
          <p>
            ✔ Cheques for hostel fees must be drawn in favour of <strong>C.C. House</strong>.
          </p>
          <p>✔ Hostel fees mandatory for XI & XII residential pupils for full year.</p>
        </div>

        {/* TITLE */}
        <div className="bg-green-800 text-white text-base font-bold px-4 py-3 mt-6 rounded-md">Payment of Term II & Term III</div>

        {/* RESIDENTIAL PUPILS */}
        <div className="bg-[#18e0181c] border border-gray-300  p-6 mt-1 rounded-b-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Residential Pupils</h3>

          {/* Term II */}
          <div className="mb-6">
            <p className="flex items-start gap-3 text-gray-800 font-semibold">
              <span className="text-lg">✔</span> Term II fees:
            </p>

            <p className="flex items-start gap-3 text-gray-700 mt-2">
              <span className="text-lg">✔</span>
              Online payment – Tuesday 26th August to Tuesday 2nd September 2025
            </p>

            <p className="flex items-start gap-3 text-gray-700 mt-2">
              <span className="text-lg">✔</span>
              Payment to be made in the office (9.00 a.m. to 1.00 p.m) – Wednesday 3rd September 2025
            </p>
          </div>

          {/* Term III */}
          <div>
            <p className="flex items-start gap-3 text-gray-800 font-semibold">
              <span className="text-lg">✔</span> Term III fees:
            </p>

            <p className="flex items-start gap-3 text-gray-700 mt-2">
              <span className="text-lg">✔</span>
              Online payment – Tuesday 16th December to Sunday 21st December 2025
            </p>

            <p className="flex items-start gap-3 text-gray-700 mt-2">
              <span className="text-lg">✔</span>
              Payment to be made in the office (9.00 a.m. to 1.00 p.m) – Monday 22nd December 2025
            </p>
          </div>
        </div>

        {/* DAY SCHOLARS */}
        <div className="bg-[#18e0181c] border border-gray-300  p-6 mt-8 rounded-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Day Scholars</h3>

          {/* Term II */}
          <div className="mb-6">
            <p className="flex items-start gap-3 text-gray-800 font-semibold">
              <span className="text-lg">✔</span> Term II fees:
            </p>

            <p className="flex items-start gap-3 text-gray-700 mt-2">
              <span className="text-lg">✔</span>
              Online payment – Monday 8th September to Sunday 14th September 2025
            </p>

            <p className="flex items-start gap-3 text-gray-700 mt-2">
              <span className="text-lg">✔</span>
              Payment to be made in the office (9.00 a.m. to 1.00 p.m) – Monday 15th September to Friday 19th September 2025
            </p>
          </div>

          {/* Term III */}
          <div>
            <p className="flex items-start gap-3 text-gray-800 font-semibold">
              <span className="text-lg">✔</span> Term III fees:
            </p>

            <p className="flex items-start gap-3 text-gray-700 mt-2">
              <span className="text-lg">✔</span>
              Online payment – Friday 26th December 2025 to Sunday 4th January 2026
            </p>

            <p className="flex items-start gap-3 text-gray-700 mt-2">
              <span className="text-lg">✔</span>
              Payment to be made in the office (9.00 a.m. to 1.00 p.m) – Monday 5th January to Friday 9th January 2026
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-green-800 mb-1 mt-10">Cultural Skills</h2>
        <p className="text-gray-700 mb-4">Charges for these are shown below. Payment may be made through our Accounts Office along with the Term Fees.</p>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full text-sm text-center border-collapse text-gray-700">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="border border-gray-300 p-2.5">Activity</th>
                <th className="border border-gray-300 p-2.5">Fees Per Term</th>
              </tr>
            </thead>

            <tbody>
              {skills.map((item, index) => (
                <tr key={index} className="even:bg-[#18e0181c]">
                  <td className="border border-gray-300 p-2.5">{item.activity}</td>
                  <td className="border border-gray-300 p-2.5">{item.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-green-800 mt-12 mb-3">Text Books, Note Books & Mis. Charges for 2025-2026</h2>

        {/* Junior & Senior Tables */}
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full text-sm text-center border-collapse text-gray-700">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="border border-gray-300 p-2.5">Class</th>
                <th className="border border-gray-300 p-2.5">Text Books</th>
                <th className="border border-gray-300 p-2.5">Note Books</th>
                <th className="border border-gray-300 p-2.5">SUPW / Tuck</th>
                <th className="border border-gray-300p-2.5">Total</th>
              </tr>
            </thead>

            <tbody>
              {[...junior, ...senior].map((row, i) => (
                <tr key={i} className="even:bg-[#18e0181c]">
                  <td className="border border-gray-300 p-2.5">{row.class}</td>
                  <td className="border border-gray-300 p-2.5">{row.text}</td>
                  <td className="border border-gray-300 p-2.5">{row.note}</td>
                  <td className="border border-gray-300 p-2.5">{row.supw || row.tuck}</td>
                  <td className="border border-gray-300 p-2.5 font-semibold">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-sm text-gray-600 font-medium">👉 Payments of the above must be made along with the Term I Fees.</p>
      </div>
    </Layout>
  );
}
