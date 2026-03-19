import Image from "next/image";
import { Component } from "./components/component";

export default function Home() {
    return (
        <main className="h-screen max-w-4xl mx-auto flex items-center">
            <Component />
        </main>
    );
}
