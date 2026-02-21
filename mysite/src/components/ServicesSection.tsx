// Services Section Component
import React from "react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security assessment simulating real-world attacks to identify vulnerabilities in your systems, networks, and applications before malicious actors can exploit them.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
            d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z" />
        </svg>
      )
    },
    {
      title: "Web App Security",
      description: "In-depth analysis and testing of web applications to uncover security flaws, injection vulnerabilities, authentication weaknesses, and other critical risks affecting your platforms.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
            d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13" />
        </svg>
      )
    },
    {
      title: "Network Infrastructure",
      description: "Thorough evaluation of network architecture, firewall configurations, access controls, and routing protocols to ensure robust security across your entire digital infrastructure.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
            d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z" />
        </svg>
      )
    },
    {
      title: "Security Consultation",
      description: "Strategic guidance and expert recommendations to strengthen your security posture, implement industry best practices, and develop effective incident response procedures.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
            d="M14.7141 15h4.268c.4043 0 .732-.3838.732-.8571V3.85714c0-.47338-.3277-.85714-.732-.85714H6.71411c-.55228 0-1 .44772-1 1v4m10.99999 7v-3h3v3h-3Zm-3 6H6.71411c-.55228 0-1-.4477-1-1 0-1.6569 1.34315-3 3-3h2.99999c1.6569 0 3 1.3431 3 3 0 .5523-.4477 1-1 1Z" />
        </svg>
      )
    },
    {
      title: "Bug Hunting",
      description: "Discovered and responsibly disclosed over 50 critical vulnerabilities in major platforms, contributing to the security of millions of users worldwide through ethical hacking.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
            d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H15V8a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 12 9Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2.025 0H17m-9.975 4H6a1 1 0 0 0-1 1v2m12-3h1.025a1 1 0 0 1 1 1v2M16 11h1a1 1 0 0 0 1-1V8m-9.975 3H7a1 1 0 0 1-1-1V8" />
        </svg>
      )
    },
    {
      title: "Security Training",
      description: "Customized training programs to educate your team about current security threats, defensive techniques, secure coding practices, and cybersecurity best practices.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
            d="M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-screen-xl px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#e5e5e5] mb-6"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Breaking Systems, <span className="text-[#d4af37]">Building Security</span>
          </h2>
          <p className="text-xl text-[#a0a0a0] max-w-3xl mx-auto"
            style={{ fontFamily: 'Space Mono, monospace' }}>
            Specialized in uncovering critical security vulnerabilities through advanced penetration testing, 
            helping organizations fortify their digital infrastructure before real threats emerge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#1a1a1a] border-2 border-[#3d4535] p-8 transition-all duration-300 hover:border-[#d4af37] hover:transform hover:scale-105 group"
            >
              <div className="text-[#a0a0a0] mb-6 transition-all duration-300 group-hover:text-[#d4af37] group-hover:scale-110">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#e5e5e5] mb-4 transition-colors duration-300 group-hover:text-[#d4af37]"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {service.title}
              </h3>
              
              <p className="text-[#a0a0a0] leading-relaxed"
                style={{ fontFamily: 'Space Mono, monospace' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;