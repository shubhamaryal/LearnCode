import { SVGComponent } from "./component/svg-component";
import { SVGLines } from "./component/svg-lines";

export default function Home() {
    return (
        <main className="h-screen bg-gray-50 max-w-4xl mx-auto flex items-center flex-col py-20">
            {/* <SVGComponent /> */}
            <SVGLines />
        </main>
    );
}
