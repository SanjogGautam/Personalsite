const Services: React.FC = () => {
  return (
    <main className="bg-[#0a0a0a] min-h-screen pt-32 pb-20">
      <div className="max-w-screen-xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-[#d4af37] mb-12"
            style={{ fontFamily: "JetBrains Mono, monospace" }}>
          Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Service Card */}
          <div className="border-4 border-[#3d4535] p-8 bg-[#111] hover:border-[#d4af37] transition-all">
            <h3 className="text-xl font-bold text-[#d4af37] mb-4">
              Penetration Testing
            </h3>
            <p className="text-[#a0a0a0] text-sm leading-relaxed">
              Comprehensive web, network, and infrastructure penetration
              testing to identify vulnerabilities before attackers do.
            </p>
          </div>

          <div className="border-4 border-[#3d4535] p-8 bg-[#111] hover:border-[#d4af37] transition-all">
            <h3 className="text-xl font-bold text-[#d4af37] mb-4">
              Vulnerability Assessment
            </h3>
            <p className="text-[#a0a0a0] text-sm leading-relaxed">
              Structured security assessments with detailed reporting,
              risk classification, and remediation guidance.
            </p>
          </div>

          <div className="border-4 border-[#3d4535] p-8 bg-[#111] hover:border-[#d4af37] transition-all">
            <h3 className="text-xl font-bold text-[#d4af37] mb-4">
              Security Consulting
            </h3>
            <p className="text-[#a0a0a0] text-sm leading-relaxed">
              Secure architecture reviews, threat modeling, and guidance
              to strengthen your organization’s security posture.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
};
export default Services; 