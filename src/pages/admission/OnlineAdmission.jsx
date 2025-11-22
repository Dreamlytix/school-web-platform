import React from "react";

// components
import Layout from "../../components/layout/Layout";

export default function OnlineAdmission() {
  return (
    <Layout showBanner={false} title="Contact Us">
      <div className="mx-auto w-full max-w-7xl px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">Admission</h2>
          <p className="text-gray-600 mt-2">
            Celebrating excellence in academics, excellence in academics, excellence in academics, sports, science, and cultural events.
          </p>
        </div>
      </div>
    </Layout>
  );
}
