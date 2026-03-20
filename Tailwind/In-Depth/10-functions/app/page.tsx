import Image from "next/image";
import Link from "next/link";
import { cn } from "./lib/utils";

const popularLinks = [
    "https://github.com",
    "https://stackoverflow.com",
    "https://twitter.com",
    "https://linkedin.com",
    "https://youtube.com",
    "https://google.com",
    "https://amazon.com",
    "https://netflix.com",
    "https://wikipedia.org",
    "https://reddit.com",
    "https://instagram.com",
    "https://facebook.com",
    "https://gmail.com",
    "https://medium.com",
    "https://dev.to",
];

const getRandomLink = () =>
    popularLinks[Math.floor(Math.random() * popularLinks.length)];

export default function Home() {
    return (
        <div className="h-screen w-full max-w-4xl mx-auto pt-20 pb-10 px-4 md:px-8">
            <Header />

            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-2 my-10 lg:border p-1 rounded-3xl lg:border-neutral-200 mask-b-from-50%">
                <Column>
                    <Card
                        href={getRandomLink()}
                        src="/images/1.png"
                        alt="something"
                        className="lg:rounded-tl-[calc(24px-4px)]"
                        // We checked the px for the container's padding and radius, it had p-1 which is 4px and rounded-3xl which is 24px, and if we subtract the padding from the radius, we get perfectly rounded corners for the children with respect to the parent/container
                    />
                    <Card
                        href={getRandomLink()}
                        src="/images/3.png"
                        alt="something"
                        className=""
                    />
                    <Card
                        href={getRandomLink()}
                        src="/images/2.png"
                        alt="something"
                        className=""
                    />
                </Column>
                <Column>
                    <Card
                        href={getRandomLink()}
                        src="/images/15.png"
                        alt="something"
                        className=""
                    />
                    <Card
                        href={getRandomLink()}
                        src="/images/4.png"
                        alt="something"
                        className=""
                    />
                    <Card
                        href={getRandomLink()}
                        src="/images/5.png"
                        alt="something"
                        className=""
                    />
                    <Card
                        href={getRandomLink()}
                        src="/images/6.png"
                        alt="something"
                        className=""
                    />
                </Column>
                <Column>
                    <Card
                        href={getRandomLink()}
                        src="/images/7.png"
                        alt="something"
                        className=""
                    />
                    <Card
                        href={getRandomLink()}
                        src="/images/8.png"
                        alt="something"
                        className=""
                    />
                    <Card
                        href={getRandomLink()}
                        src="/images/9.png"
                        alt="something"
                        className=""
                    />
                    <Card
                        href={getRandomLink()}
                        src="/images/10.png"
                        alt="something"
                        className=""
                    />
                </Column>
                <Column>
                    <Card
                        href={getRandomLink()}
                        src="/images/11.png"
                        alt="something"
                        className="lg:rounded-tr-[calc(24px-4px)]"
                    />
                    <Card
                        href={getRandomLink()}
                        src="/images/13.png"
                        alt="something"
                        className=""
                    />
                    <Card
                        href={getRandomLink()}
                        src="/images/12.png"
                        alt="something"
                        className=""
                    />
                    <Card
                        href={getRandomLink()}
                        src="/images/14.png"
                        alt="something"
                        className=""
                    />
                </Column>
            </div>
        </div>
    );
}

const Card = ({
    src,
    alt,
    className,
    href,
}: {
    src: string;
    alt: string;
    className: string;
    href: string;
}) => {
    return (
        <Link
            href={href}
            target="_blank"
            className={cn(
                "relative rounded-md mb-2 max-w-xl mx-auto overflow-hidden shadow-sm block transition-all duration-200",
                "after:content-[''] after:absolute after:bg-black after:opacity-0 after:w-full after:h-full after:inset-0 hover:after:opacity-90 after:transition-all after:duration-200 w-full",
                "group",
                className,
            )}
        >
            <Image src={src} alt={alt} height={500} width={500} className="" />
            <p className="absolute opacity-0 group-hover:opacity-100 z-20 transition-all duration-200 inset-0 text-white font-medium text-sm flex justify-center items-center">
                {href.split("https://")[1]}
            </p>
        </Link>
    );
};

const Column = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>;
};

const Header = () => {
    return (
        <>
            <h1 className="text-4xl font-bold tracking-tighter text-neutral-700">
                Bento grids are cool, you should try it sometimes
            </h1>
            <p className="text-base text-neutral-700 max-w-xl mt-4">
                Discover innovative solutions that transform the way you work
                and create. Out cutting edge tools are designed to empower your
                creativity and boost your productibbity like never before.
            </p>
        </>
    );
};
