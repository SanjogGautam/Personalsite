import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const form = e.currentTarget;

    const templateParams = {
      user_name: (form.elements.namedItem("user_name") as HTMLInputElement).value,
      user_email: (form.elements.namedItem("user_email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await emailjs.send(
        "service_5e1h7rf",              // ✅ Your Service ID
        "template_pf8rlu4",             // ✅ Your Correct Template ID
        templateParams,
        "co-T0zCFSYz2iJJHq"             // ✅ Your Public Key
      );

      console.log("SUCCESS!", response.status, response.text);
      setSuccess("Message sent successfully!");
      form.reset();
    } catch (err: any) {
      console.error("FAILED...", err);
      setError(err?.text || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#0a0a0a] min-h-screen pt-32 pb-20">
      <div className="max-w-screen-md mx-auto px-6">
        <h1
          className="text-5xl font-bold text-[#d4af37] mb-10"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-[#a0a0a0] text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full bg-[#111] border-2 border-[#3d4535] p-4 text-white focus:border-[#d4af37] outline-none"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#a0a0a0] text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full bg-[#111] border-2 border-[#3d4535] p-4 text-white focus:border-[#d4af37] outline-none"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[#a0a0a0] text-sm mb-2">
              Message
            </label>
            <textarea
              rows={5}
              name="message"
              required
              className="w-full bg-[#111] border-2 border-[#3d4535] p-4 text-white focus:border-[#d4af37] outline-none"
              placeholder="Your message..."
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-bold uppercase text-sm tracking-wider hover:bg-[#b89a2d] transition-all disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {success && (
            <p className="text-green-500 mt-4 text-center">
              {success}
            </p>
          )}

          {/* Error Message */}
          {error && (
            <p className="text-red-500 mt-4 text-center">
              {error}
            </p>
          )}

        </form>
      </div>
    </main>
  );
};

export default Contact;