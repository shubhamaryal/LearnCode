import { motion } from "motion/react";

const App = () => {
    return (
        <div
            className="[perspective:1000px] [tramsform-style:preserve-3d] h-screen w-full bg-neutral-950 flex items-center justify-center"
            style={{
                backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
                backgroundSize: "12px 12px",
                backgroundRepeat: "repeat",
            }}
        >
            <motion.button
                // initial={{ rotate: 0 }}
                // animate={{
                //     // rotate: 20,
                //     rotate: [0, 50, 0],
                // }}
                // transition={{ duration: 1, ease: "easeInOut" }}

                whileHover={{
                    // rotate: 30,
                    rotateX: 25,
                    rotateY: 10,
                    boxShadow: "0px 10px 20px rgba(6,182,212,0.5)",
                    y: -5,
                }}
                whileTap={{
                    y: 5,
                }}
                style={{
                    translateZ: 100,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
            >
                <span className="group-hover:text-cyan-500 transition-all duration-300">
                    Subscribe
                </span>
                <span className="absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent h-1 w-full mx-auto blur-sm"></span>
            </motion.button>
        </div>
    );
};

export default App;
