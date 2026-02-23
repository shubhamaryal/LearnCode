"use client";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Project",
      href: "/project",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex relative md:rounded-full bg-white md:shadow-aceternity border-neutral-200 justify-between items-center px-2 py-2 md:mt-4 max-w-4xl mx-auto">
        <Image
          src="https://ui.aceternity.com/logo.png"
          alt="logo"
          width={30}
          height={30}
          className="rounded-full"
        />

        <div className="hidden md:flex items-center gap-4 text-sm text-neutral-500 mr-10">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="hover:text-neutral-900"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <IconMenu2 />
        </button>
        {open && (
          <div className="absolute inset-x-0 top-14 bg-white rounded-md shadow-aceternity max-w-[95%] mx-auto">
            <div className="flex flex-col items-start gap-4 text-sm text-neutral-500 p-4 md:hidden">
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="hover:text-neutral-900"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
