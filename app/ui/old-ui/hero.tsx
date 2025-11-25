import Image from "next/image";
import Logo from "../logo";
import img1 from "@/public/main-img1.png";
import img2 from "@/public/main-img2.png";
export default function Hero() {
  return (
    <main className="bg-dark1 text-white font-sans lg:h-full">
      <div className="max-w-7xl mx-auto py-3 px-5">
        <header className="mb-6 relative  headerClipPath">
          <div
            className="bg-darkBlue rounded-extra  flex items-center justify-between rounded-2xl px-6 py-4 lg:py-7
            "
          >
            <div className="p-1.5">
              <h1 className="text-3xl lg:text-7xl  md:text-4xl font-extrabold text-skyBlue ">
                Frontend Developer <br />
              </h1>
              <h2 className="text-skyBlue mb-4 font-extrabold hidden lg:block">
                Building Modern & Fast Web Experiences
              </h2>
              <p className="color-lightBlue hidden lg:block">
                I create clean, responsive, and high-performance websites using
                React, Next.js, and Tailwind CSS.
              </p>
            </div>
            <Logo color={"skyBlue"} />
          </div>
        </header>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative bg-card rounded-xl p-4 border-2 border-[rgba(52,152,219,0.12)]">
              <div className="absolute -top-4 -right-4 w-16 h-8 bg- rounded-tl-lg transform rotate-0"></div>

              <div
                className="
                relative overflow-hidden rounded-lg bg-skyBlue p-3 z-10

                before:content-[''] before:bg-transparent before:absolute before:top-3 before:right-[25%] before:-translate-x-1/3 before:-translate-y-1/3
                before:w-1 before:h-0.5   before:rounded-tr-md before:z-20 
                before:border before:border-transparent before:border-r-skyBlue
                before:border-t-skyBlue     


                  after:content-[''] after:absolute after:top-0 after:right-0
                  after:w-1/4 after:h-8 after:bg-skyBlue after:transform after:skew-x-30 after:rounded-bl-lg 
              "
              >
                <Image
                  src={img1}
                  alt=" this image no1 for the hero section"
                  className=" h-full md:h-80 object-cover block  rounded-lg 
                  "
                  aria-description="this image contain a screen with some code in it"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-card rounded-xl overflow-hidden border border-[rgba(255,255,255,0.03)]">
              <Image
                src={img2}
                alt="this image no2 for the hero section"
                className="h-full  object-cover"
                aria-description="a disk with a labtop on it with some books"
              />
            </div>

            <div className="bg-[rgba(255,255,255,0.03)] rounded-xl p-4">
              <div className="text-lightBlue text-sm">Presented by</div>
              <div className="mt-2 font-semibold text-lightBlue">
                Abdullah Mahmoud
              </div>
            </div>
          </div>
        </section>
      </div>

      {/*
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
       */}
    </main>
  );
}
/* 

     <div className="pt-2.5 px-2.5 flex items-center justify-between w-auto  ">
          <div className="text flex overflow-auto flex-col justify-around items-center">
            <h1 className="  ">
              Frontend Developer — Building Modern & Fast Web Experiences
            </h1>
            <p>
              I create clean, responsive, and high-performance websites using
              React, Next.js, and Tailwind CSS.
            </p>
          </div>
          <Logo />
        </div>
        <div className=" flex justify-between">
          <Image src={mainImg} alt="image for the " className="h-full" />
          <div>
            <p>img</p> <p>text</p>
          </div>
        </div>
*/
