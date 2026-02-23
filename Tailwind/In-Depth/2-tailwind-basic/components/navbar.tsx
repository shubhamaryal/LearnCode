import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const links = [
    { title: "Founders", href: "/founders" },
    { title: "Guide", href: "/guide" },
    { title: "Pricing", href: "/pricing" },
    { title: "Login", href: "/login" },
  ];

  return (
    <div className="flex items-center justify-between py-4 px-4">
      <Link href="/">
        <Image
          draggable={false}
          loading="lazy"
          src="/logo.svg"
          height={100}
          width={100}
          alt="logo"
        />
      </Link>
      <div className="flex items-center gap-8">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="text-neutral-800 font-medium hover:text-neutral-500 transition duration-200"
          >
            {link.title}
          </Link>
        ))}
        <button className="bg-[#2579F4] px-4 py-2 text-white font-bold rounded-lg shadow-lg text-shadow-md tracking-wide">
          Get started
        </button>
      </div>
    </div>
  );
};
