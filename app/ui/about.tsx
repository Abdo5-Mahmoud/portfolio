import Image from "next/image";
import aboutImg from "@/public/about-img.png";
export default function About() {
  return (
    <section className="flex flex-col md:flex-row gap-8 my-14 px-5 justify-center max-w-7xl mx-auto ">
      <div className="text basis-1/2 flex flex-col justify-evenly items-center gap-4 bg-dark2 text-lightBlue px-16 py-6 rounded-lg aboutText">
        <h2 className="text-center lg:text-6xl text-3xl font-bold mb-4">
          About me
        </h2>
        <p>
          I’m Abullah, a Frontend Developer focused on building clean, modern,
          and fast web experiences using React, Next.js, and Tailwind CSS.
        </p>
        <p className="text-md">
          Over the past two years, I’ve built a strong understanding of web
          development by learning directly from official documentation and real
          project experience.
        </p>
      </div>
      <div className="img bg-blue p-5 rounded-4xl basis-1/2">
        <Image
          src={aboutImg}
          alt="this image for the about section"
          className="w-full object-cover rounded-4xl aboutImg"
        />
      </div>
    </section>
  );
}
