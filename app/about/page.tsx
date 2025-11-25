import Image from "next/image";
import aboutImg from "@/public/about-img.png";
import TextType from "@/app/ui/animation/texttype";

export default function About() {
  return (
    <section
      tabIndex={-1}
      className="overflow-x-hidden max-w-7xl mx-auto gap-8 mt-16 px-5 "
    >
      <h2
        id="about-title"
        className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-8 text-skyBlue text-center"
      >
        About me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
        <div className=" text-lightBlue px-6 md:px-16 py-6 rounded-lg aboutText  flex flex-col justify-center">
          <p className="text-lightBlue leading-relaxed text-lg md:text-xl mb-4">
            <TextType
              text={[
                " I'm a frontend developer focused on building clean, modern, and high-performance interfaces",
                ". I care about simplicity, clarity, and creating smooth UI experiences using React, Next.js, and Tailwind.",
                "Happy coding!",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </p>
          <p className="text-lightBlue leading-relaxed text-lg md:text-xl">
            My goal is to deliver fast, user-friendly designs that help
            businesses grow and stand out.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="h-full rounded-4xl overflow-hidden bg-blue p-2">
            <Image
              src={aboutImg}
              alt="Photo of a developer working on a laptop"
              width={800}
              height={1000}
              className="w-full h-auto object-cover rounded-3xl aboutImg block"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
