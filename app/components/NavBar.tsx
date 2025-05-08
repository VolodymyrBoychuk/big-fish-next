"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { to: "/", label: "Home" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/about-us", label: "About Us" },
  { to: "/focus-areas", label: "Focus Areas" },
  { to: "/technology", label: "Technology" },
  { to: "/projects", label: "Projects" },
  { to: "/blogs/1", label: "Blog" },
  { to: "/contacts", label: "Contacts" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-[1000] bg-[#0c1650] px-10 py-2.5 flex justify-between items-center">
      <div className="flex items-center space-x-12">
        <span className="text-[#4a90e2] text-[28px] font-bold tracking-tight">
          Big Fish
        </span>

        <div className="flex space-x-9 text-[15px] text-[#D7DDE4]">
          {links.map(({ to, label }) => {
            const isActive = pathname === to;

            return (
              <Link
                key={to}
                href={to}
                className={`cursor-pointer transition-colors duration-200 hover:text-[#4a90e2] hover:underline ${
                  isActive ? "text-[#4a90e2] font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>

      <Link
        href="/contacts"
        className="bg-[#4a90e2] text-white text-base font-medium px-4.5 py-2.5 rounded hover:bg-[#3a78c2] transition-colors duration-200"
      >
        Let&apos;s talk
      </Link>
    </nav>
  );
};

export default NavBar;
