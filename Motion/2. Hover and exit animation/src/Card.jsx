import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import { AnimatePresence, motion } from "motion/react";
import CloseIcon from "@mui/icons-material/Close";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useState } from "react";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

const Card = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.98,
                            filter: "blur(10px)",
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.98,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        className="bg-white w-92 min-h-138 h-138 rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-6 flex flex-col"
                    >
                        <h2 className="font-bold text-[18px]">UI Components</h2>
                        <p className="text-neutral-500 mt-2 text-[14px]">
                            A collection of beautiful UI components, let's get
                            on with it.
                        </p>
                        <div className="flex items-center justify-center">
                            <button
                                onClick={() => setOpen(false)}
                                className="flex cursor-pointer items-center gap-2 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1"
                            >
                                <img
                                    src="/logo.webp"
                                    alt="img"
                                    height={50}
                                    width={50}
                                    className="h-4 w-4"
                                />
                                Clerk
                                <CloseIcon
                                    className="h-2 w-2 text-neutral-400"
                                    fontSize="small"
                                />
                            </button>
                        </div>

                        <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-neutral-200 relative">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.98,
                                    filter: "blur(10px)",
                                }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1.05,
                                    filter: "blur(0px)",
                                }}
                                transition={{
                                    // duration: 0.3,
                                    // ease: "easeInOut",
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                className="absolute inset-0 h-full w-full border border-neutral-200 rounded-lg bg-white divide-y divide-neutral-200"
                            >
                                <div className="p-4 gap-2 flex items-center">
                                    <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                        <AccessTimeRoundedIcon
                                            className="text-neutral-600"
                                            fontSize="small"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1px] font-bold text-neutral-600">
                                            Time
                                        </p>
                                        <p className="text-neutral-400 text-sm">
                                            Delivery for everything under 3 days
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 gap-2 flex items-center">
                                    <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                        <AutoAwesomeRoundedIcon
                                            className="text-neutral-600"
                                            fontSize="small"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[8px] font-bold text-neutral-600">
                                            Simplicity
                                        </p>
                                        <p className="text-neutral-400 text-sm">
                                            Simple to tweak and change
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 gap-2 flex items-center">
                                    <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                        <SmartToyOutlinedIcon
                                            className="text-neutral-600"
                                            fontSize="small"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[8px] font-bold text-neutral-600">
                                            AI Assist
                                        </p>
                                        <p className="text-neutral-400 text-sm">
                                            24/7 AI assist to help
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 gap-2 flex items-center">
                                    <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                        <ChatBubbleOutlineRoundedIcon
                                            className="text-neutral-600"
                                            fontSize="small"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[8px] font-bold text-neutral-600">
                                            UI Components
                                        </p>
                                        <p className="text-neutral-400 text-sm">
                                            A collection of beautiful UI
                                            component
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 gap-2 flex items-center justify-center">
                                    <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                        <AddCircleOutlineOutlinedIcon
                                            className="text-neutral-600"
                                            fontSize="small"
                                        />
                                    </div>
                                    <p className="text-neutral-400 text-sm">
                                        Create project
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Card;
