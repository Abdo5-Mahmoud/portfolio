import Image from "next/image";
import skillImg from "@/public/skill-img.png";
export default function TechnicalS() {
  return (
    <section className="flex flex-col lg:flex-row gap-8 my-14  justify-center max-w-7xl mx-auto px-4">
      <div className="text basis-1/2 flex flex-col justify-start items-start gap-4 bg-darkBlue text-lightBlue px-7 lg:px-14 py-5 rounded-lg ">
        <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold lg:mb-2 text-skyBlue">
          Technical Skills
        </h2>
        <h3 className="text-blue bold text-3xl mb-6">My core competencies </h3>

        <ul className=" list-disc px-12 lg:px-20 text-2xl">
          <li>HTML & CSS expertise </li>
          <li>JavaScript for interactivity</li>
          <li>React for modern UI</li>
          <li>Git for version control</li>
        </ul>
      </div>
      <div className="img bg-skyBlue p-5 rounded-4xl basis-1/2">
        <Image
          src={skillImg}
          alt="this image for the about section"
          className="w-full object-cover rounded-4xl skillImg"
        />
      </div>
    </section>
  );
}
