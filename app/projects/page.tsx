import Image from "next/image";
import iphoneEcho1 from "@/public/Projects-ScreenShot/iphone-echo1.jpg";
import worldWise from "@/public/Projects-ScreenShot/WorldWise1.jpg";
import rRes from "@/public/Projects-ScreenShot/r-resturant1.jpg";
import Link from "next/link";
export default function page() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* iPhone Echo */}
        <article
          className="bg-darkBlue rounded-xl p-4 shadow flex flex-col min-h-[300px] transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] 
  hover:shadow-[0_0_20px_rgba(0,140,255,0.5)]
          
          "
        >
          <Image
            src={iphoneEcho1}
            alt="iPhone Echo screenshot"
            className="rounded-lg h-40 w-full object-cover"
          />
          <h3 className="text-xl font-semibold mt-4 text-blue-300">
            iPhone Echo
          </h3>
          <p className="text-gray-300 mt-2 text-sm flex-1">
            A 3D landing page built with React, GSAP and Three.js — smooth
            animations and interactive UI.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="https://iphone-echo.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Live
            </a>
            <a
              href="https://github.com/Abdo5-Mahmoud/3d-app-with-gsap"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border border-gray-700 text-gray-300 rounded hover:bg-white/5 transition"
            >
              Repo
            </a>
          </div>
        </article>

        {/* World Wise */}
        <article
          className="bg-darkBlue rounded-xl p-4 shadow flex flex-col min-h-[300px]  transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]
  hover:shadow-[0_0_20px_rgba(0,140,255,0.5)]
          
          "
        >
          <Image
            src={worldWise}
            alt="World Wise screenshot"
            className="rounded-lg h-40 w-full object-cover"
          />
          <h3 className="text-xl font-semibold mt-4 text-blue-300">
            World Wise
          </h3>
          <p className="text-gray-300 mt-2 text-sm flex-1">
            Interactive map app using React and Leaflet — mark places, save
            notes and explore locations.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="https://world-wise-re.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Live
            </a>
            <a
              href="https://github.com/Abdo5-Mahmoud/world-wise-"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border border-gray-700 text-gray-300 rounded hover:bg-white/5 transition"
            >
              Repo
            </a>
          </div>
        </article>

        {/* R-Resturant */}
        <article
          className="bg-darkBlue rounded-xl p-4 shadow flex flex-col min-h-[300px]  transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]
  hover:shadow-[0_0_20px_rgba(0,140,255,0.5)]
 "
        >
          <Image
            src={rRes}
            alt="R-Resturant screenshot"
            className="rounded-lg h-40 w-full object-cover"
          />
          <h3 className="text-xl font-semibold mt-4 text-blue-300">
            R-Restaurant
          </h3>
          <p className="text-gray-300 mt-2 text-sm flex-1">
            Responsive restaurant landing & ordering UI. Built with modern React
            patterns and clean UX.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="https://r-rest.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Live
            </a>
            <a
              href="https://github.com/Abdo5-Mahmoud/Restaurant-Site"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border border-gray-700 text-gray-300 rounded hover:bg-white/5 transition"
            >
              Repo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
