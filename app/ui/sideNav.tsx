"use client";
import { useEffect, useState } from "react";
import Logo from "@/app/ui/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tech Stack", href: "/technoligies" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function SidebarNavbar() {
  const [open, setOpen] = useState(false);
  const data = usePathname();
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function toggle() {
    setOpen((s) => !s);
  }
  function close() {
    setOpen(false);
  }

  return (
    <>
      {/* Desktop sidebar (visible lg+) */}
      <div className="hidden  lg:flex flex-col fixed left-0 top-0 h-full w-56 bg-[#071026] text-white p-6 z-40">
        <div className="flex items-center gap-3 mb-8">
          <Logo color="darkBlue" />
        </div>

        <nav className="flex-1">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={clsx(
                    "block px-3 py-2 rounded-md hover:bg-blue-900/40 transition-colors",
                    data == l.href ? "bg-darkBlue" : ""
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto text-sm text-gray-300">
          <p>abdofwzy9@gmail.com</p>
          <p className="mt-2 text-blue-300">GitHub · LinkedIn</p>
        </div>
      </div>

      {/* Mobile logo button (always visible on small screens) */}
      <div className="lg:hidden fixed  top-1/7 md:top-12 right-4 z-50">
        <button
          onClick={toggle}
          aria-label={"Open menu"}
          className="lg:hidden fixed top-6 left-0 z-50 w-12 h-12 rounded-lg overflow-hidden   "
        >
          <Logo color="skyBlue" />
        </button>
      </div>

      {/* Mobile overlay sidebar */}
      <div
        id="mobile-sidebar"
        className={`fixed inset-0 z-50 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* backdrop */}
        <div
          onClick={close}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            open ? "opacity-100 z-40" : "opacity-0 pointer-events-none z-40"
          }`}
        />

        {/* sliding panel */}
        <aside
          className={`fixed left-0 top-0 h-full w-64 bg-dark1 p-6
            flex flex-col
            text-lightBlue transform transition-transform duration-300 shadow-xl z-50
            ${open ? "translate-x-0" : "-translate-x-full"}
`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Logo color="darkBlue" />
            </div>
            <button
              onClick={close}
              aria-label="Close menu"
              className="p-2 rounded-md hover:bg-white/5"
            >
              ✕
            </button>
          </div>

          <nav>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={close}
                    className={clsx(
                      "block px-3 py-2 rounded-md hover:bg-blue-900/40 transition-colors",
                      data == l.href ? "bg-darkBlue" : ""
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto text-sm text-gray-300">
            <p>abdofwzy9@gmail.com</p>
            <p className="mt-2 text-blue-300">GitHub · LinkedIn</p>
          </div>
        </aside>
      </div>
    </>
  );
}

/* 

import { useEffect, useState } from "react";

export default function SidebarNavbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function toggle() {
    setOpen((s) => !s);
  }
  function close() {
    setOpen(false);
  }

  // logo path (from your uploaded file)
  const logoSrc = "/mnt/data/Screenshot 2025-11-20 202323.jpg";

  const links = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <aside
        className="hidden md:flex flex-col fixed left-0 top-0 h-full w-56 bg-[#071026] text-white p-6 z-30"
        aria-hidden={false}
      >
        <div className="flex items-center gap-3 mb-8">
          <img src={logoSrc} alt="Abdo logo" className="w-12 h-12 rounded-lg object-cover" />
          <h1 className="text-xl font-bold text-blue-400">Abdo</h1>
        </div>

        <nav className="flex-1">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block px-3 py-2 rounded-md hover:bg-blue-900/40 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto text-sm text-gray-300">
          <p>abdofwzy9@gmail.com</p>
          <p className="mt-2 text-blue-300">GitHub · LinkedIn</p>
        </div>
      </aside>

      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggle}
          aria-expanded={open}
          aria-controls="mobile-sidebar"
          aria-label={open ? "Close menu" : "Open menu"}
          className="w-12 h-12 rounded-lg overflow-hidden ring-2 ring-blue-600/30"
        >
          <img src={logoSrc} alt="Abdo logo" className="w-full h-full object-cover" />
        </button>
      </div>

      <div
        id="mobile-sidebar"
        className={`fixed inset-0 z-50 md:hidden pointer-events-none`}
        aria-hidden={!open}
      >
        <div
          onClick={close}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        />

        <aside
          className={`fixed left-0 top-0 h-full w-64 bg-[#071026] text-white p-6 transform transition-transform duration-300 shadow-xl ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img src={logoSrc} alt="Abdo logo" className="w-10 h-10 rounded-md object-cover" />
              <h2 className="text-lg font-semibold text-blue-300">Abdo</h2>
            </div>
            <button
              onClick={close}
              aria-label="Close menu"
              className="p-2 rounded-md hover:bg-white/5"
            >
              ✕
            </button>
          </div>

          <nav>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={close}
                    href={l.href}
                    className="block px-3 py-2 rounded-md hover:bg-blue-900/40 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto text-sm text-gray-300">
            <p>abdofwzy9@gmail.com</p>
            <p className="mt-2 text-blue-300">GitHub · LinkedIn</p>
          </div>
        </aside>
      </div>
    </>
  );
}



*/
