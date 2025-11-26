import Image from "next/image";
export default function TechnicalS() {
  return (
    <section className="flex flex-col md:flex-row gap-8 my-16  justify-center max-w-7xl mx-auto  ">
      <div className="text basis-1/2 flex flex-col justify-start items-start gap-4 bg-darkBlue text-lightBlue px-7  py-5 rounded-lg ">
        <h2 className=" text-3xl  font-bold text-skyBlue">Technical Skills</h2>
        <h3 className="text-blue bold text-2xl lg:text-3xl mb-6">
          My core competencies{" "}
        </h3>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-6 text-lightBlue list-disc text-lg lg:gap-x-7 ml-6">
          <li>React.js</li>
          <li>Next.js</li>
          <li>JavaScript (ES6+)</li>
          <li>Tailwind CSS</li>
          <li>API Integration</li>
          <li>Framer Motion</li>
          <li>UI/UX</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
      <div className="img bg-skyBlue p-2 rounded-2xl ">
        <Image
          width={350}
          height={100}
          src={"/Images/Techimg.png"}
          alt="this image for the about section"
          className=" rounded-4xl skillImg  h-full"
          objectFit="cover"
          unoptimized
        />
      </div>
    </section>
  );
}
