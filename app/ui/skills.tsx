import Card from "./Card";
import Logo from "./logo";

export default function Skills() {
  return (
    <main className="bg-dark1 text-white font-sans lg:h-full  max-w-7xl mx-auto px-5">
      <div className="max-w-7xl mx-auto py-3 px-5">
        <header className="mb-6 relative headerClipPath headerClipPath">
          <div
            className="bg-darkBlue rounded-extra  flex items-center justify-between rounded-2xl px-6 py-8
            "
          >
            <div className="py-6">
              <h1 className="text-3xl lg:text-7xl  md:text-4xl font-extrabold text-skyBlue ">
                Key Skills
              </h1>
            </div>
          </div>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 justify-items-center ">
          <Card
            title="Responsive Design"
            description="Optimizing layout for multiple devices and screens."
          />
          <Card
            title="Cross-Browser Compatibility"
            description="Ensuring consistent performance across various web browsers."
          />
          <Card
            title="Performance Optimization"
            description="Enhancing load times for a better user experience."
          />
        </section>
      </div>
    </main>
  );
}
// //  I enjoy creating landing pages, dashboards, and
//           interactive interfaces that clearly reflect the identity of the
//           business. I also have experience in backend development using Node.js,
//           Express, and MongoDB, which allows me to build full-stack features
//           like APIs, authentication, and admin dashboards when needed.
{
  /*
        // May add it in the future
        <div className="relative w-64 h-40 group perspective-[1000px]">
          <div className="relative w-full h-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
            <div
              className="absolute inset-0 bg-[#172033] text-white flex items-center justify-center rounded-xl
                  backface-hidden border border-white/10 shadow-lg"
            >
              <span className="text-xl font-semibold">Frontend Portfolio</span>
            </div>
  
            <div
              className="absolute inset-0 bg-primary text-midnight flex items-center justify-center rounded-xl 
                  transform-[rotateY(180deg)] backface-hidden shadow-lg"
            >
              <span className="text-xl font-bold">Presented by Abdo</span>
            </div>
          </div>
        </div>
         */
}
