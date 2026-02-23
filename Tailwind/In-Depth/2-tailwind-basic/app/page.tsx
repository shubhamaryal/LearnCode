import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
      <div className="max-w-5xl mx-auto absolute inset-0 h-full w-full z-0">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
      </div>
      <Container className="">
        <Navbar />
        <Hero />
      </Container>
      <div className="relative w-full">
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-r from-neutral-300/50 via-neutral-200 to-neutral-300/50 pointer-events-none z-0"></div>
        <div className="max-w-5xl mx-auto p-5">
          <Image
            src="/banner.webp"
            alt="banner image"
            width={1000}
            height={1000}
            className="w-full rounded-xl object-cover object-top-left border-neutral-200 shadow-md mask-b-from-20% to-40%"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Tailwind
 */
// inset-y-0 means top 0 and bottom 0