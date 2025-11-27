import TextType from "@/app/ui/animation/TextType/texttype";
import Image from "next/image";

export default function About() {
  return (
    <section
      tabIndex={-1}
      className="overflow-x-hidden max-w-7xl mx-auto gap-8 px-5"
    >
      <h2
        id="about-title"
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-skyBlue text-center"
      >
        About me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center w-[90%] md:w-full h-screen md:h-[60vh]">
        {/* TEXT COLUMN */}
        <div className="flex flex-col justify-center min-h-full">
          <div className="text-lightBlue px-6 md:px-16 py-6 rounded-lg aboutText flex flex-col justify-center h-full">
            {/* reserve fixed area so typing won't push layout */}
            <div className="w-full max-w-[720px]">
              <div className="min-h-[110px] md:min-h-[140px] lg:min-h-40 text-lg">
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
            </div>

            <div className="text-lightBlue leading-relaxed text-lg  mt-2">
              My goal is to deliver fast, user-friendly designs that help
              businesses grow and stand out.
            </div>
          </div>
        </div>

        {/* IMAGE COLUMN */}
        <div className="h-full w-full flex justify-center items-center">
          {/* make image container NOT shrink and keep fixed size to avoid reflow */}
          <div className="rounded-4xl overflow-hidden bg-skyBlue/30 p-2  w-[340px] h-[340px] md:w-[380px] md:h-[380px]">
            <Image
              src={"/Images/aboutImg.png"}
              alt="Photo of a developer working on a laptop"
              width={380}
              height={380}
              className="w-full h-full object-cover rounded-3xl aboutImg block"
              unoptimized
              // priority
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/*             <div className="w-full max-w-[720px]">
              <div className="min-h-[110px] md:min-h-[140px] lg:min-h-[160px]">
                <TextType
                  text={[
                    " I'm a frontend developer focused on building clean, modern, and high-performance interfaces.",
                    "I care about simplicity, clarity, and creating smooth UI experiences using React, Next.js, and Tailwind.",
                    "   My goal is to deliver fast, user-friendly designs that help businesses grow and stand out.",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </div>
            </div>
 */
