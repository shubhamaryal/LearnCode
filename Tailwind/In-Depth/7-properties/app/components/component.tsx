import React from "react";

const cn = (...classes: string[]) => classes.join(" ");

export const Component = () => {
    return (
        <div
            className={cn(
                "w-full rounded-2xl min-h-100 bg-neutral-100 dark:bg-neutral-800",
                // "[background-image:radial-gradient(#000000_1px,transparent_1px)]",
                "bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
                "dark:bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)]",
                "[background-size:10px_10px]",
                "p-8 flex flex-col items-center justify-center",
                "group",
                // If we want the child or the image to act on hover of the parent then we need to use the group property on the parent
            )}
        >
            <h1
                className={cn(
                    "text-2xl font-bold mt-8 mb-2 tracking-tight",
                    // "bg-clip-text text-transparent bg-linear-to-r from-pink-500 via-blue-600 to-purple-500",
                    // "bg-clip-text text-transparent bg-linear-to-r from-neutral-800 to-neutral-600",
                    // hamle "bg-clip-text text-transparent" garera background ma image/gradient/video or j kura rakhye ni, tyo text vitra dekhinxa

                    "text-neutral-800 dark:text-neutral-100 text-shadow-sm text-shadow-neutral-300 dark:text-shadow-neutral-700",
                    // shadow should be tonned down color of the original color
                )}
            >
                Easily modify scale with Tailwind
            </h1>

            <p
                className={cn(
                    "max-w-sm mx-auto text-sm text-center mb-8",
                    "bg-clip-text text-transparent bg-linear-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-600",
                )}
            >
                Hover over the image below to see a smooth 3D transformation
                effect. The card rotates and scales using CSS tranforms and
                Tailwind's built-in classes.
            </p>

            <div
                className={cn(
                    "size-60 rounded-2xl border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-600 transition-colors duration-200 group-hover:border-neutral-300",
                    "bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]",
                    "dark:bg-[radial-gradient(var(--color-neutral-600)_1px,transparent_1px)]",
                    "[background-size:10px_10px]",
                    "shadow-2xl relative perspective-distant",
                    // using perspective-distant will make the image look a bit 3D
                    "group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 dark:group-hover:border-neutral-600",
                )}
            >
                <img
                    src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className={cn(
                        "transition-transform duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]",
                        "h-full w-full object-cover object-top-left rounded-2xl",
                        "transform rotate-x-30 rotate-z-30 -rotate-y-30 translate-z-20",
                        "group-hover:rotate-x-0 group-hover:rotate-z-0 group-hover:rotate-y-0 group-hover:scale-85",
                    )}
                    alt="avatar"
                />
            </div>
        </div>
    );
};

/**
 * "bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",]
 * "[background-size:10px_10px]",
 *
 * The second property is required to make the dots repeat and create the pattern.
 */

/**
 * when the image overflows, or goes outside of the container, and we want to fit on the dimension of it's container then we can provide
 * "h-full w-full"
 *
 * If the image feels stretched, then we can use "object-cover" ; but this can cause some part of the image to be cut
 *
 * "object-contain" will show the whole picture but can leave spaces
 *
 * In the "object-cover" case, we can use "object-top" to show the top part of the image, or "object-bottom" to show the bottom part of the image, and so on.
 */

/**
 * If we want different groups then we can name them
 * On parent: "group/name"
 * On child: "group-hover/name:<property>"
 */
