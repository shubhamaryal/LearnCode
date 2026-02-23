import React from "react";
import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-5xl mx-auto w-full px-4 relative z-10", className)}>
      {children}
    </div>
  );
};

// We passed the children and it is for rendering everything inside it. Eg: Navbar and other contents.
// The cn is used to fix the hierarchy of repeated class and merge them safely

/**
 * Tailwind
 */
// max width: restricted content
// mx-auto: center aligned, we dont want the content right or left