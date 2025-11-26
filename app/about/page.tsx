import TextType from "@/app/ui/animation/TextType/texttype";
import Image from "next/image";

export default function About() {
  return (
    <section
      tabIndex={-1}
      className="overflow-x-hidden max-w-7xl mx-auto gap-8  px-5 "
    >
      <h2
        id="about-title"
        className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-8 text-skyBlue text-center"
      >
        About me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-[90%] md:w-full md:h-[60vh]">
        <div className=" text-lightBlue px-6 md:px-16 py-6 rounded-lg aboutText  flex flex-col justify-center h-full">
          <div className="  text-lightBlue leading-relaxed text-lg md:text-xl mb-4 mx-auto">
            <TextType
              text={[
                " I'm a frontend developer focused on building clean, modern, and high-performance interfaces.",
                "I care about simplicity, clarity, and creating smooth UI experiences using React, Next.js, and Tailwind.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
          <div className="text-lightBlue leading-relaxed text-lg md:text-xl">
            My goal is to deliver fast, user-friendly designs that help
            businesses grow and stand out.
          </div>
        </div>
        <div className="h-full w-full flex justify-center">
          <div className=" rounded-4xl overflow-hidden bg-skyBlue/30 p-2">
            <Image
              src={"/Images/aboutImg.png"}
              alt="Photo of a developer working on a laptop"
              width={340}
              height={100}
              className="h-full object-cover rounded-3xl aboutImg block"
              objectFit="cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
