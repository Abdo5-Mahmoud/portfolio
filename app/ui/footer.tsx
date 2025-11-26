import Link from "next/link";

// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#05101a] border-t border-gray-900 ">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-lightBlue">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-md" />
          <div>
            <p className="text-sm text-white font-semibold">Abdo</p>
            <p className="text-xs text-gray-400">Frontend Developer</p>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Abdullah Mahmoud Fawzy. All rights
          reserved.
        </div>

        <div className="flex gap-4">
          <Link href="mailto:abdofwzy9@gmail.com" className="hover:text-gray-">
            Email
          </Link>
          <Link
            href="https://github.com/Abdo5-Mahmoud"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/abdo-fwzy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
