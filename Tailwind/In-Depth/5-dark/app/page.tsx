"use client";

import { SiGooglegemini } from "react-icons/si";
import { RiClaudeFill } from "react-icons/ri";
import { AiFillOpenAI } from "react-icons/ai";
import { FaMeta } from "react-icons/fa6";

export default function Home() {
    const icons = [
        {
            title: "Claude",
            circle: "circle-1",
            icon: <SiGooglegemini className="size-4" />,
        },
        {
            title: "OpenAI",
            circle: "circle-3",
            icon: <RiClaudeFill className="size-4" />,
        },
        {
            title: "Meta",
            circle: "circle-4",
            icon: <AiFillOpenAI className="size-6" />,
        },
        {
            title: "Gemini",
            circle: "circle-5",
            icon: <FaMeta className="size-4" />,
        },
    ];

    const handleThemeChange = () => {
        const currentTheme = document.documentElement.classList.contains("dark")
            ? "light"
            : "dark";
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", currentTheme); // this is to have the same mode when user comes back to the site, we are saving the preference in local storage
    };

    return (
        <div className="relative h-full w-full flex items-center justify-center">
            <div className="relative z-10 h-100 w-80 bg-neutral-50 dark:bg-neutral-900 shadow-2xl border border-neutral-100 dark:border-neutral-800 rounded-xl overflow-hidden">
                {/* mask is used for fade out effect */}
                <div className="relative mask-r-from-50% mask-l-from-50% mask-t-from-50% mask-b-from-50% ">
                    <Pattern />
                    <div className="flex items-center gap-4 justify-center h-40 animate-marquee">
                        {icons.map((item, index) => (
                            <div
                                key={item.title}
                                className={`rounded-full dark:bg-neutral-800 bg-neutral-300 flex items-center justify-center size-10`}
                            >
                                {item.icon}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="font-bold dark:text-neutral-100 text-neutral-600 text-sm">
                        These LLMs are getting out of hand
                    </h2>
                    <p className="text-neutral-400 dark:text-neutral-350 font-semibold mt-2 text-[8px]">
                        I swear to god there's always another AI dropping and
                        twitter fores crazy. It's all a myth guys. Like
                        seriously, one day it's Claude, then it's Gemini, then
                        it's Meta, then it's OpenAI.When will it end? They're
                        all just fancy autocomplete.
                    </p>

                    <button
                        onClick={() => handleThemeChange()}
                        className="px-2 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-400 text-[10px] text-neutral-500 mt-4 cursor-pointer"
                    >
                        Switch me
                    </button>
                </div>
            </div>
        </div>
    );
}

const Pattern = () => {
    return (
        <div className="absolute inset-0 z-0 rounded-lg m-auto bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px]"></div>
    );
};
