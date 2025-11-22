import React from "react";
import Layout from "../../components/layout/Layout";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?",
      content: [
        "When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.",
        "When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.",
        "Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.",
      ],
    },
    {
      title: "SECTION 2 - CONSENT",
      content: [
        <strong key="a">How do you get my consent?</strong>,
        "When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.",
        "If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.",
        <strong key="b" className="mt-4 block">
          How do I withdraw my consent?
        </strong>,
        <>
          If after you opt-in, you change your mind, you may withdraw your consent at any time by emailing us at{" "}
          <span className="text-green-800 font-semibold">gvea_blg@rediffmail.com</span>.
        </>,
      ],
    },
    {
      title: "SECTION 3 - DISCLOSURE",
      content: ["We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service."],
    },
    {
      title: "SECTION 4 - PAYMENT",
      content: [
        "Our payment gateway adheres to PCI-DSS security standards to ensure secure handling of card details.",
        "Third-party processors have their own privacy policies, and we recommend reviewing them to understand how your information is handled.",
      ],
    },
    {
      title: "SECTION 6 - SECURITY",
      content: [
        "We take reasonable precautions and follow industry best practices to ensure your personal information is not improperly lost, misused, accessed, disclosed, altered, or destroyed.",
      ],
    },
    {
      title: "SECTION 7 - COOKIES",
      content: ["We use cookies to maintain user sessions and enhance browsing experience."],
    },
    {
      title: "SECTION 8 - AGE OF CONSENT",
      content: [
        "By using this site, you confirm that you are the age of majority in your state or province of residence or have given consent to allow your minor dependents to use this site.",
      ],
    },
    {
      title: "SECTION 9 - CHANGES TO THIS PRIVACY POLICY",
      content: ["We reserve the right to modify this privacy policy at any time. Updates take effect immediately upon posting on the website."],
    },
  ];

  return (
    <Layout showBanner={false} title="Privacy Policy">
      <div className="mx-auto w-full max-w-7xl px-4 py-16">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">Privacy Policy</h1>
        <p className="text-center text-gray-600 mx-auto mb-10">
          Here are some common questions asked by students and parents. Click a question to view its answer.
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          {sections.map((sec, i) => (
            <div key={i}>
              <h2 className="text-lg underline font-semibold text-green-800 mb-3">{sec.title}</h2>
              {sec.content.map((p, idx) => (
                <p key={idx} className="mt-2">
                  {p}
                </p>
              ))}
            </div>
          ))}

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-green-800 mb-3">CONTACT INFORMATION</h2>
            <p>
              For inquiries, corrections, or data deletion requests, contact us at:
              <span className="font-bold text-green-800 text-md"> gvea_blg@rediffmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
