import React from "react";

const MyCV: React.FC = () => {
  const personalInfo = {
    name: "Sanjog Gautam",
    title: "Senior Security Researcher & Penetration Tester",
    email: "gautamsanjok32@gmail.com",
    phone: "+977 9766529853",
    location: "Kathmandu, Nepal",
    linkedin: "linkedin.com/in/sanjog-gautam-a27b161b1/",
    github: "github.com/SanjogGautam",
    website: "sanjoggautam.com.np"
  };

  const handleDownloadCV = () => {
    window.open("/mycv.pdf", "_blank");
  };

  // 🔥 Multiple LORs
  const lors = [
    {
      title: "LOR - National aeronautics and space administration",
      file: "/lors/lor1.pdf"
    },
   // i can add here more LORs as i get them, just need to add the file in the public/lors folder and add an entry here with the title and file path
  ];

  return (
    <main className="bg-[#0a0a0a] min-h-screen pt-32 pb-20">
      <div className="max-w-screen-xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div className="border-l-4 border-[#d4af37] pl-6">
            <h1
              className="text-5xl font-bold text-[#e5e5e5] mb-4"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Curriculum <span className="text-[#d4af37]">Vitae</span>
            </h1>
            <p
              className="text-xl text-[#a0a0a0] max-w-2xl"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              Learning and continuing to grow in the field of cybersecurity.
            </p>
          </div>

          <button
            onClick={handleDownloadCV}
            className="px-8 py-4 bg-[#d4af37] text-black font-bold uppercase tracking-wider hover:bg-[#b89a2d] transition-all"
            style={{ fontFamily: "Space Mono, monospace" }}
          >
            View Full CV (PDF)
          </button>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* SIDEBAR */}
          <div className="space-y-8">

            {/* CONTACT */}
            <div className="bg-[#1a1a1a] border-2 border-[#3d4535] p-6">
              <h2 className="section-title">CONTACT</h2>
              <div className="section-text space-y-2">
                <p>{personalInfo.email}</p>
                <p>{personalInfo.phone}</p>
                <p>{personalInfo.location}</p>
               <p><a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a></p>
               <p> <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">{personalInfo.github}</a></p>
              <p> <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer">{personalInfo.website}</a></p>
              </div>
            </div>

            {/* HALL OF FAME */}
            <div className="bg-[#1a1a1a] border-2 border-[#3d4535] p-6">
              <h2 className="section-title">HALL OF FAME</h2>
              <div className="section-text space-y-2">
                <p>Currently none</p>
              </div>
            </div>

            {/* SKILLS */}
            <div className="bg-[#1a1a1a] border-2 border-[#3d4535] p-6">
              <h2 className="section-title">TECHNICAL SKILLS</h2>
              <div className="section-text space-y-2">
                <p>• Web Application Security</p>
                <p>• API Security Testing</p>
                <p>• Red Teaming</p>
                <p>• Bug Bounty Hunting</p>
                <p>• Secure Code Review</p>
              </div>
            </div>

          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* EXPERIENCE */}
            <div className="bg-[#1a1a1a] border-2 border-[#3d4535] p-6">
              <h2 className="section-title">EXPERIENCE</h2>
              <div className="section-text space-y-6">
                <div>
                  <h3 className="text-[#e5e5e5] font-bold">Junior Security Researcher</h3>
                  <p>Freelance | 2026 – Present</p>
                  <p>Performed penetration testing and vulnerability research.</p>
                </div>

                <div>
                  <h3 className="text-[#e5e5e5] font-bold">Bug Bounty Researcher</h3>
                  <p>Independent | 2025 – Present</p>
                  <p>Reported vulnerabilities to  tech companies.</p>
                </div>
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div className="bg-[#1a1a1a] border-2 border-[#3d4535] p-6">
              <h2 className="section-title">CERTIFICATIONS</h2>
              <div className="section-text space-y-2">
                <p>• eJPT</p>
                <p>• CEH</p>
                <p>• OSCP (In Progress)</p>
              </div>
            </div>

            {/* MULTIPLE LORs */}
            <div className="bg-[#1a1a1a] border-2 border-[#3d4535] p-6">
              <h2 className="section-title">LETTERS OF RECOMMENDATION</h2>

              <div className="space-y-12">
                {lors.map((lor, index) => (
                  <div key={index}>
                    <h3
                      className="text-[#e5e5e5] font-bold mb-3"
                      style={{ fontFamily: "Space Mono, monospace" }}
                    >
                      {lor.title}
                    </h3>

                    <div className="w-full h-[500px] border border-[#3d4535] mb-4">
                      <iframe
                        src={lor.file}
                        title={lor.title}
                        className="w-full h-full"
                      />
                    </div>

                    <button
                      onClick={() => window.open(lor.file, "_blank")}
                      className="px-6 py-3 bg-[#d4af37] text-black font-bold uppercase tracking-wider hover:bg-[#b89a2d] transition-all"
                      style={{ fontFamily: "Space Mono, monospace" }}
                    >
                      Download {lor.title}
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default MyCV;