const About: React.FC = () => {
  return (
    <main className="bg-[#0a0a0a] min-h-screen pt-32 pb-20">
      <div className="max-w-screen-xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-[#d4af37] mb-10"
            style={{ fontFamily: "JetBrains Mono, monospace" }}>
          About Me
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Text */}
          <div>
            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-6">
              I am a security researcher and penetration tester passionate about
              breaking systems to build them stronger. My work focuses on
              identifying real-world attack vectors and delivering actionable
              security improvements.
            </p>

            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-6">
              With hands-on experience in web application security,
              network exploitation, and vulnerability research, I help
              organizations stay ahead of evolving threats.
            </p>

            <p className="text-[#7c9a5c] font-mono">
              $ whoami → sanjog_gautam
            </p>
          </div>

          {/* Right Card */}
          <div className="border-4 border-[#d4af37] p-8 bg-[#111]">
            <h3 className="text-[#d4af37] font-bold text-xl mb-4">
              Core Skills
            </h3>

            <ul className="space-y-3 text-[#a0a0a0] text-sm">
              <li>▸ Web Application Security</li>
              <li>▸ Network Penetration Testing</li>
              <li>▸ Bug Bounty Hunting</li>
              <li>▸ Secure Code Review</li>
              <li>▸ Threat Modeling</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
};
export default About; 