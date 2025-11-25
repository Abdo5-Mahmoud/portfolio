import Image from "next/image";
import contactImg from "@/public/contact-img.png";
import Logo from "@/app/ui/logo";
import Row from "@/app/ui/contact/row";
import Link from "next/link";
// export default function Contact() {
//   return (
//     // <main className="my-16">
//     //   <div className="max-w-7xl mx-auto py-3 px-5">
//     //     <header className="mb-6 relative headerClipPath headerClipPath">
//     //       <div
//     //         className="bg-skyBlue rounded-extra  flex items-center justify-between rounded-2xl px-6
//     //         "
//     //       >
//     //         <div className="py-6">
//     //           <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-lightBlue ">
//     //             Get in Touch
//     //           </h1>
//     //         </div>
//     //       </div>
//     //     </header>
//     //     <section className="grid grid-cols-1 md:grid-cols-2  gap-6 justify-items-center ">
//     //       <Image src={contactImg} alt="this img for the cantact me section" />
//     //       <div className="w-full flex flex-col justify-between items-start bg-darkBlue px-14 py-12 rounded-2xl">
//     //         <Row title="email" description="abofwzy9@gmail.com" />
//     //         <div className="flex gap-8 items-center">
//     //           <div className="w-8 ">
//     //             <Logo color="skyBlue" size="small" />
//     //           </div>
//     //           <div className="text-lightBlue">
//     //             <h2>Email</h2>
//     //             <a href="abofwzy9@gmail.com">abofwzy9@gmail.com</a>
//     //           </div>
//     //         </div>
//     //         <div className="flex gap-8 ">
//     //           <div className="w-8 ">
//     //             <Logo color="skyBlue" size="small" />
//     //           </div>
//     //           <div className="text-lightBlue">
//     //             <h2>Email</h2>
//     //             <a href="abofwzy9@gmail.com">abofwzy9@gmail.com</a>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </section>
//     //   </div>
//     // </main>

//   );
// }
// src/components/Contact.jsx
// export default function Contact() {
//   return (
//     <section id="contact" className="max-w-6xl mx-auto px-5 py-16">
//       <div className="bg-[#071026] rounded-2xl p-8 md:p-12 shadow-lg">
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           <div className="md:w-2/3">
//             <h2 className="text-3xl font-bold text-white">
//               Let’s work together
//             </h2>
//             <p className="mt-4 text-gray-300">
//               I’m available for freelance projects or full-time roles. Send me a
//               brief about your project and I’ll get back to you.
//             </p>

//             <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
//               <a
//                 href="mailto:abdofwzy9@gmail.com"
//                 className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//               >
//                 Email Me
//               </a>

//               <a
//                 href="/mnt/data/Abdullah_Frontend_CV_v2.pdf"
//                 download
//                 className="inline-block px-5 py-3 border border-gray-700 text-gray-200 rounded-lg hover:bg-white/5 transition"
//               >
//                 Download CV
//               </a>
//             </div>
//           </div>

//           <div className="md:w-1/3">
//             <div className="bg-gradient-to-br from-[#081226] to-[#071026] p-4 rounded-xl">
//               <p className="text-sm text-gray-400">Contact</p>
//               <p className="mt-2 text-white font-medium">Abdullah (Abdo)</p>
//               <p className="text-gray-300 text-sm mt-1">Giza, Egypt</p>

//               <div className="mt-4">
//                 <a
//                   href="https://github.com/Abdo5-Mahmoud"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block text-blue-300 hover:underline"
//                 >
//                   GitHub
//                 </a>
//                 <a
//                   href="https://linkedin.com/in/abdo-fwzy"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block text-blue-300 hover:underline mt-2"
//                 >
//                   LinkedIn
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// src/components/Contact.jsx
// export default function Contact() {
//   // backgroundImage uses your uploaded local path (change to public path on deploy)
//   const bgUrl = "/mnt/data/Screenshot 2025-11-20 202323.jpg";

//   return (
//     <section id="contact" className="relative overflow-hidden">
//       {/* animated background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center animate-bg-pan"
//         style={{
//           backgroundImage: `url('${bgUrl}')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         aria-hidden="true"
//       />

//       {/* dark overlay to keep text readable */}
//       <div
//         className="absolute inset-0 bg-black/60 mix-blend-multiply"
//         aria-hidden="true"
//       />

//       <div className="relative max-w-6xl mx-auto px-5 py-20">
//         <div className="bg-transparent rounded-2xl p-8 md:p-12">
//           <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
//             {/* Left side (Text + Buttons) */}
//             <div className="md:w-2/3">
//               <h2 className="text-3xl font-bold text-white">
//                 Let’s work together
//               </h2>
//               <p className="mt-4 text-gray-200 max-w-[55ch] leading-relaxed">
//                 I’m available for freelance projects or full-time roles. Send me
//                 a brief about your idea or project and I’ll get back to you
//                 shortly.
//               </p>

//               <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
//                 <a
//                   href="mailto:abdofwzy9@gmail.com"
//                   className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//                 >
//                   Email Me
//                 </a>

//                 <a
//                   href="/Abdullah_Frontend_CV_v2.pdf"
//                   download
//                   className="inline-block px-5 py-3 border border-gray-700 text-gray-200 rounded-lg hover:bg-white/5 transition"
//                 >
//                   Download CV
//                 </a>
//               </div>
//             </div>

//             {/* Right side (card) */}
//             <div className="md:w-1/3 w-full">
//               <div className="bg-gradient-to-br from-[#081226]/70 to-[#071026]/70 p-6 rounded-xl border border-gray-800/40 shadow-lg backdrop-blur-sm">
//                 <p className="text-sm text-gray-300 tracking-wide">Contact</p>

//                 <p className="mt-2 text-white font-medium text-lg">
//                   Abdullah (Abdo)
//                 </p>
//                 <p className="text-gray-300 text-sm mt-1">Giza, Egypt</p>

//                 <div className="mt-6 space-y-2">
//                   <Link
//                     href="https://github.com/Abdo5-Mahmoud"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block text-skyBlue hover:text-lightBlue transition"
//                   >
//                     GitHub →
//                   </Link>

//                   <Link
//                     href="https://linkedin.com/in/abdo-fwzy"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block text-skyBlue hover:text-lightBlue transition"
//                   >
//                     LinkedIn →
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating decorative shapes (animated) */}
//       <div aria-hidden="true" className="pointer-events-none">
//         <span className="absolute -left-8 -top-8 w-36 h-36 rounded-full bg-blue-600/20 animate-float-slow blur-xl"></span>
//         <span className="absolute right-10 top-24 w-24 h-24 rounded-full bg-sky-400/15 animate-float-slower blur-2xl"></span>
//         <span className="absolute left-1/2 -bottom-12 w-44 h-44 rounded-full bg-purple-600/12 animate-float-slower blur-3xl -translate-x-1/2"></span>
//       </div>
//     </section>
//   );
// }
export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden h-full">
      {/* Animated tech background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bg-pan"
        aria-hidden="true"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-5 py-24">
        <div className="rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
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
