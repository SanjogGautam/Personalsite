import React from "react";

const Privacy: React.FC = () => {
  return (
    <main className="bg-[#0a0a0a] min-h-screen pt-32 pb-20">
      <div className="max-w-screen-xl mx-auto px-6">

        <h1
          className="text-5xl font-bold text-[#d4af37] mb-10"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          Privacy Policy
        </h1>

        <div className="space-y-8 text-[#a0a0a0] leading-relaxed">

          <section>
            <h2 className="text-[#d4af37] font-bold text-xl mb-2">
              1. Information Collection
            </h2>
            <p>
              I may collect personal information such as your name and email
              address when you contact me through the website.
            </p>
          </section>

          <section>
            <h2 className="text-[#d4af37] font-bold text-xl mb-2">
              2. Use of Information
            </h2>
            <p>
              Your information is used solely to respond to inquiries and
              improve website services. I do not sell or share your data.
            </p>
          </section>

          <section>
            <h2 className="text-[#d4af37] font-bold text-xl mb-2">
              3. Security
            </h2>
            <p>
              Reasonable measures are taken to protect your information.
              However, no method of transmission over the internet is 100%
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-[#d4af37] font-bold text-xl mb-2">
              4. Contact
            </h2>
            <p>
              If you have any questions regarding this policy, please contact
              me at <span className="text-[#7c9a5c]">gautamsanjok32@gmail.com</span>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default Privacy;