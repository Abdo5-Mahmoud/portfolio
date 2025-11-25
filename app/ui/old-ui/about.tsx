import Image from "next/image";
import aboutImg from "@/public/about-img.png";
export default function About() {
  return (
    <section className="max-w-7xl mx-auto gap-8 my-16 px-5 justify-center  ">
      <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-8 text-skyBlue text-center">
        About me
      </h2>
      <div className="flex flex-col md:flex-row gap-10 ">
        <div className=" md:w-1/2 bg-dark2 text-lightBlue px-16 py-6 rounded-lg aboutText  flex flex-col justify-evenly">
          <p className="text-lightBlue leading-relaxed text-xl">
            I{`'`}m a frontend developer focused on building clean, modern, and
            high-performance interfaces. I care about simplicity, clarity, and
            creating smooth UI experiences using React, Next.js, and Tailwind.
          </p>
          <p className="text-lightBlue leading-relaxed text-xl">
            My goal is to deliver fast, user-friendly designs that help
            businesses grow and stand out.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center bg-blue p-5 rounded-4xl basis-1/2">
          <Image
            src={aboutImg}
            alt="this image for the about section"
            className="w-full object-cover rounded-4xl aboutImg"
          />
        </div>
      </div>
    </section>
  );
}
