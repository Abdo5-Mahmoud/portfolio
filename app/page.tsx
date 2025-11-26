import Logo from "@/app/ui/logo";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <div className=" text-lightBlue font-sans lg:min-h-full">
      <div className="max-w-7xl mx-auto py-6 px-5">
        <header className="mb-6 relative headerClipPath">
          <div
            className="bg-darkBlue flex items-center justify-between rounded-2xl px-6 py-4 lg:py-7
            "
            aria-labelledby="hero-title"
          >
            <div className="p-1.5 ">
              <h1
                id="hero-title"
                className="text-3xl md:text-4xl  font-extrabold text-skyBlue leading-tight "
              >
                Frontend Developer <br />
              </h1>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-skyBlue mb-4 hidden lg:block">
                Building Modern &amp; Fast Web Experiences
              </h2>
              <p className="text-lightBlue mt-4 hidden lg:block max-w-[60ch]">
                I create clean, responsive, and high-performance websites using
                React, Next.js, and Tailwind CSS.
              </p>
            </div>
            <div className="w-28 h-28 flex items-center" aria-hidden="true">
              <Logo color={"skyBlue"} />
            </div>
          </div>
        </header>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2">
            <div className="relative bg-card rounded-xl p-4 border-2 border-[rgba(52,152,219,0.12)] overflow-hidden">
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
                  width={100}
                  height={100}
                  src={"/Images/main-img1.png"}
                  alt=" Screen showing code editor on desktop monitor"
                  className=" w-full md:h-80 object-cover block  rounded-lg 
                  "
                  aria-describedby="hero-image-desc"
                  objectFit="cover"
                  unoptimized
                />
                <p id="hero-image-desc" className="sr-only">
                  This image contains a screen with some code in it.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-between h-full">
            <div className="bg-card rounded-xl overflow-hidden border border-[rgba(255,255,255,0.03)]">
              <Image
                width={100}
                height={100}
                src={"/Images/main-img2.png"}
                alt="A desk with a laptop and books"
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
                aria-description="a disk with a labtop on it with some books"
                objectFit="cover"
                unoptimized
              />
              <p id="desk-image-desc" className="sr-only">
                A disk with a laptop and some books on the desk.
              </p>
            </div>
            <Link
              className=" text-2xl bg-darkBlue rounded-xl text-center w-full px-4 py-2 mx-auto hover:bg-blue   "
              href={"/contact"}
            >
              Hire Me
            </Link>
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
    </div>
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
