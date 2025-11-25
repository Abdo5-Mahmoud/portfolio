import "@/app/ui/globals.css";
import type { Metadata } from "next";
import Footer from "./ui/footer";
import SideNave from "./ui/sideNav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Abdo Fawzy - Frontend Developer",
  description: "This is Abdullah Mahmoud portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dark1 text-lightBlue antialiased">
        {/* skip link for accessibility */}
        <Link
          href={"/projects"}
          className="sr-only focus:not-sr-only focus:absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded z-60
"
        >
          Skip to content
        </Link>
        <div className="min-h-screen flex flex-col lg:flex-row ">
          <aside className=" lg:block lg:w-56 lg:shrink-0">
            <SideNave />
          </aside>
          <main className="flex flex-1 flex-col justify-between">
            <div className="flex-1  md:px-12 px-5 py-8 ">{children}</div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
/* 
<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
*/
