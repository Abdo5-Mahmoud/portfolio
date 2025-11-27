import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden h-full my-4 flex "
    >
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-5 bg-black/50 rounded-3xl"
        aria-hidden="true"
      />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-15 py-24 flex-1 ">
        <div className="flex flex-col md:flex-row items-center h-full md:items-center gap-10">
          {/* LEFT TEXT */}
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg">
              Let’s work together
            </h2>

            <p className="mt-4 text-gray-200 max-w-[60ch] leading-relaxed text-lg">
              I’m available for freelance projects or full-time roles. Tell me
              about your idea or project and I’ll get back to you quickly.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Email */}
              <Link
                href="mailto:abdofwzy9@gmail.com"
                className="inline-block px-6 py-3 bg-skyBlue text-white rounded-lg shadow hover:bg-blue transition text-lg"
              >
                Email Me
              </Link>

              {/* Download CV */}
              <Link
                href="https://drive.google.com/file/d/1fwU6FK_jAFblbghC6cJ3tJ-kUuYkpnGJ/view?usp=sharing"
                download
                target="_blank"
                className="inline-block px-6 py-3 border border-gray-600 text-gray-200 rounded-lg hover:bg-white/10 transition text-lg"
              >
                Show CV
              </Link>
            </div>
          </div>

          {/* RIGHT CARD (SOCIAL INFO) */}
          <div className="md:w-1/3 w-full">
            <div className="bg-[#071026]/70 p-6 rounded-xl border border-blue-900/30 shadow-xl backdrop-blur-sm">
              <p className="text-sm text-gray-400 tracking-wide">Contact</p>

              <p className="mt-2 text-white font-medium text-xl">
                Abdullah (Abdo)
              </p>
              <p className="text-gray-300 text-sm mt-1">Giza, Egypt</p>

              <p className="text-gray-300 text-sm mt-1.5">
                Number: <span className="text-lightBlue ">01070810979</span>
              </p>
              <div className="mt-6 space-y-3">
                <Link
                  href="https://github.com/Abdo5-Mahmoud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-400 transition text-md"
                >
                  GitHub →
                </Link>

                <Link
                  href="https://linkedin.com/in/abdo-fwzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-400 transition text-md"
                >
                  LinkedIn →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating glowing elements */}
      <div aria-hidden="true" className="pointer-events-none">
        <span className="absolute left-10 top-10 w-40 h-40 rounded-full bg-blue-600/20 animate-float-slow blur-2xl"></span>
        <span className="absolute right-16 bottom-20 w-28 h-28 rounded-full bg-cyan-400/15 animate-float-slower blur-3xl"></span>
        <span className="absolute left-1/2 -top-12 w-48 h-48 rounded-full bg-purple-600/10 animate-float-slower blur-3xl -translate-x-1/2"></span>
      </div>
    </section>
  );
}
