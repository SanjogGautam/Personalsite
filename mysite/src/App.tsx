import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WriteUpsPage from "./components/WriteUpsPage";
import WriteUpDetail from "./components/WriteUpDetail";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import MyCV from "./components/Mycv";

/* ----------------------------- HOME PAGE ----------------------------- */

const Home: React.FC = () => {
  return (
    <main className="w-full bg-[#0a0a0a]">
      
      {/* Background Grid */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#3d4535 1px, transparent 1px), linear-gradient(90deg, #3d4535 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#2d3328] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#3d4535] opacity-20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-screen-xl px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="text-xs text-[#7c9a5c] uppercase tracking-widest font-bold border-l-4 border-[#d4af37] pl-3"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Security Researcher & Penetration Tester
            </span>

            <h1
              className="text-6xl font-bold leading-tight my-6 text-[#e5e5e5]"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Secure Your Future with{" "}
              <span className="text-[#d4af37]">Ethical Hacking</span>
            </h1>

            <p
              className="text-xl text-[#a0a0a0] mb-8 max-w-2xl"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              From deep-dive penetration testing to proactive threat monitoring,
              I provide tailored solutions to secure your network and protect
              your business.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/about"
                className="px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-bold uppercase text-sm tracking-wider hover:bg-[#b89a2d] transition-all"
              >
                More About Me
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 border-4 border-[#3d4535] text-[#e5e5e5] font-bold uppercase text-sm tracking-wider hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right Hero Card */}
          <div className="hidden lg:block">
            <div className="border-4 border-[#d4af37] p-8 bg-[#1a1a1a]">
              <div className="w-full h-96 bg-[#2d3328] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-[#d4af37] flex items-center justify-center">
                    <span className="text-[#0a0a0a] font-bold text-6xl">SG</span>
                  </div>
                  <p className="text-[#7c9a5c] font-mono text-sm">
                    security_researcher
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
 <section className="py-20 bg-[#0f0f0f] border-t-4 border-b-4 border-[#d4af37]">
  <div className="max-w-screen-xl px-6 mx-auto">
    <div className="grid md:grid-cols-3 gap-12 text-center">

      {/* Stat 1 */}
      <div className="flex flex-col items-center">
        <h3 className="text-5xl font-bold text-[#d4af37]">
          ∞
        </h3>
        <p className="text-[#a0a0a0] uppercase tracking-wider text-sm mt-2">
          Learning Everyday
        </p>
      </div>

      {/* Stat 2 */}
      <div className="flex flex-col items-center">
        <h3 className="text-5xl font-bold text-[#d4af37]">
          4
        </h3>
        <p className="text-[#a0a0a0] uppercase tracking-wider text-sm mt-2">
          Engagements Completed
        </p>
      </div>

      {/* Stat 3 */}
      <div className="flex flex-col items-center">
        <h3 className="text-5xl font-bold text-[#d4af37]">
          1K+
        </h3>
        <p className="text-[#a0a0a0] uppercase tracking-wider text-sm mt-2">
          Cups of Coffee
        </p>
      </div>

    </div>
  </div>
</section>
    </main>
  );
};



/* ----------------------------- APP ROUTER ----------------------------- */

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <div id="scroll-container" className="min-h-screen">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/writeups" element={<WriteUpsPage />} />
          <Route path="/writeups/:id" element={<WriteUpDetail />} />
          <Route path="/mycv" element={<MyCV />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
export default App;