import React, { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#mission", label: "Mission" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#programs", label: "Programs" },
  { href: "#register", label: "Register" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      {/* CONSISTENT CONTAINER */}
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 font-semibold shrink-0"
          >
            
              
              <div className="grid h-8 w-8 place-items-center rounded-md bg-blue-600 text-white text-xs font-bold">
                AF
              </div>
            
            <span className="truncate">Anshumat Foundation</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-700"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#register"
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
            >
              Get Involved
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden rounded-lg border px-3 py-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center gap-4 text-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-700"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#register"
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
              onClick={() => setOpen(false)}
            >
              Get Involved
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

