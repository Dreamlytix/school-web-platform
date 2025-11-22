import React from "react";
import Layout from "../../components/layout/Layout";

export default function TermsAndConditions() {
  return (
    <Layout showBanner={false} title="Terms & Conditions">
      <div className="mx-auto w-full max-w-7xl px-4 py-16">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">Terms & Conditions</h1>
        <p className="text-center text-gray-600 mx-auto mb-10">
          Here are some common questions asked by students and parents. Click a question to view its answer.
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <div>
            <p>
              For the purpose of these Terms and Conditions, the term <span className="font-semibold text-green-800">"we", "us", "our"</span>
              used anywhere on this page shall mean <span className="font-semibold text-green-800">The Green View English Academy</span>, whose
              registered/operational office is Beline, Chakvrigu Balurghat, Dakshin Dinajpur 733102.
            </p>

            <p className="mt-3">
              <span className="font-semibold text-green-800">"you", “your”, "user”, “visitor”</span> shall mean any natural or legal person who is visiting our
              website and/or agreed to purchase from us.
            </p>

            <p className="mt-3">Your use of the website and/or purchase from us are governed by the following Terms and Conditions:</p>
          </div>

          <div>
            <p>The content of the pages of this website is subject to change without notice.</p>
            <p className="mt-3">
              Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the
              information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may
              contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
            </p>
          </div>

          <div>
            <p>
              Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products, services or information available through our website meet your specific
              requirements.
            </p>
          </div>

          <div>
            <p>
              Our website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look,
              appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and
              conditions.
            </p>
            <p className="mt-3">
              All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.
            </p>
          </div>

          <div>
            <p>Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.</p>
            <p className="mt-3">
              From time to time, our website may also include links to other websites. These links are provided for your convenience to provide further
              information.
            </p>
            <p className="mt-3">
              You may not create a link to our website from another website or document without prior written consent from{" "}
              <span className="font-semibold text-green-800">The Green View English Academy.</span>
            </p>
          </div>

          <div>
            <p>Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.</p>
            <p className="mt-3">
              We shall not be liable for any loss or damage arising directly or indirectly out of the decline of authorization for any transaction due to the
              cardholder having exceeded the preset limit agreed with our acquiring bank.
            </p>
          </div>

          <div className="bg-gray-100 p-5 rounded-lg">
            <p className="text-sm italic text-gray-600">
              Disclaimer: The above content is created at The Green View English Academy's sole discretion. Razorpay shall not be liable for any content
              provided here and shall not be responsible for any claims and liability that may arise due to merchant’s non-adherence to it.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
