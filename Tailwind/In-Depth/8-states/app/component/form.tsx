import React from "react";
import { cn } from "../lib/utils";

export default function Form() {
    return (
        <div className="h-full w-full bg-gray-50 px-8 py-14">
            {/* <h1 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-neutral-800 to-neutral-700">
                This is a{" "}
                <div className="relative inline-block ">
                    <span className="relative z-20 text-white">crazy</span>
                    <span className="absolute inset-0 z-10 bg-red-500"></span>
                </div>{" "}
                good form.
            </h1> */}

            <h1 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-neutral-800 text-center to-neutral-700 selection:bg-black selection:text-white">
                This is a{" "}
                <span
                    className={cn(
                        "inline-block relative z-10 text-white ",
                        "after:content-[''] after:-z-10 after:absolute after:inset-0 after:w-full after:h-full after:bg-red-500 after:-skew-2",
                        // instead of using the form, we can use divs to do the same things which is done in commented code above, but the exact and proper use of after is in the code below
                    )}
                >
                    crazy
                </span>{" "}
                good form.
            </h1>

            <div className="my-12 flex flex-col gap-8 max-w-sm mx-auto">
                <Group>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input
                        disabled
                        name="firstname"
                        type="text"
                        placeholder="Enter your name"
                        className="disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                </Group>

                <Group>
                    <Label
                        htmlFor="email"
                        className="after:content-['*'] after:ml-[2] after:text-red-500"
                    >
                        Email
                    </Label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="invalid:border-red-500 invalid:shadow-none"
                    />
                </Group>

                <Group>
                    <Label
                        htmlFor="company"
                        className="after:content-['*'] after:ml-[2] after:text-red-500"
                    >
                        Company
                    </Label>
                    <Input
                        name="company"
                        type="text"
                        placeholder="Enter your company"
                    />
                </Group>

                <Group>
                    <Label
                        htmlFor="message"
                        className="after:content-['*'] after:ml-[2] after:text-red-500"
                    >
                        Message
                    </Label>
                    <Input
                        name="message"
                        type="text"
                        placeholder="Enter your message"
                    />
                </Group>

                <button className="bg-black hover:bg-neutral-700 transition-all duration-150 text-white px-4 py-2 rounded-md cursor-pointer hover:-translate-y-0.5 active:scale-98 after:content-[''] after:w-1/2 after:h-[400px] after:absolute after:bg-white/10 relative overflow-hidden after:-left-20 after:-top-20 after:rotate-10 after:-translate-x-20 hover:after:translate-x-[200%] after:backdrop-blur-[0.5px] after:transition-all after:duration-500">
                    Send that text now.
                </button>
            </div>
        </div>
    );
}

const Group = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col gap-2 has-invalid:bg-red-100 p-2 rounded-md",
                className,
            )}
        >
            {children}
        </div>
    );
};

const Label = ({
    children,
    className,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
    return (
        <label
            {...props}
            className={cn("text-neutral-700 font-medium", className)}
        >
            {children}
        </label>
    );
};

const Input = ({
    className,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            {...props}
            className={cn(
                "focus:outline-none border focus:ring-2 focus:ring-gray-300 focus:ring-offset-4 focus:bg-gray-100 focus:border-gray-300 border-transparent px-4 py-2 bg-white rounded-lg shadow-input transition-all duration-200 placeholder:text-neutral-300",
                className,
            )}
            // ring offset makes the box shadow go a bit far/outside from the input field
        />
    );
};
