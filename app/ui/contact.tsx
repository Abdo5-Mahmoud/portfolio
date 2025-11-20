import Image from "next/image";
import contactImg from "@/public/contact-img.png";
import Logo from "./logo";
export default function Contact() {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-3 px-5">
        <header className="mb-6 relative headerClipPath headerClipPath">
          <div
            className="bg-skyBlue rounded-extra  flex items-center justify-between rounded-2xl px-6 py-8
            "
          >
            <div className="py-6">
              <h1 className="text-3xl lg:text-7xl  md:text-4xl font-extrabold text-lightBlue ">
                Get in Touch
              </h1>
            </div>
          </div>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2  gap-6 justify-items-center ">
          <Image src={contactImg} alt="this img for the cantact me section" />
          <div className="w-full flex flex-col justify-between items-start bg-darkBlue px-14 py-12 rounded-2xl">
            <div className="flex gap-8 items-center">
              <div className="w-8 ">
                <Logo color="skyBlue" size="small" />
              </div>
              <div className="text-lightBlue">
                <h2>Email</h2>
                <a href="abofwzy9@gmail.com">abofwzy9@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="w-8 ">
                <Logo color="skyBlue" size="small" />
              </div>
              <div className="text-lightBlue">
                <h2>Email</h2>
                <a href="abofwzy9@gmail.com">abofwzy9@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="w-8 ">
                <Logo color="skyBlue" size="small" />
              </div>
              <div className="text-lightBlue">
                <h2>Email</h2>
                <a href="abofwzy9@gmail.com">abofwzy9@gmail.com</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
