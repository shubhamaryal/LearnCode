import Image from "next/image";
import Form from "./component/form";

export default function Home() {
    return (
        <main className="min-h-screen flex-col max-w-4xl mx-auto flex items-center">
            <Form />
        </main>
    );
}

/**
 * pseudo classes - hover, focus, focus-active, active
 * pseudo elements - ::after, ::before, ::placeholder, ::selection
 * others - ::has
 */
