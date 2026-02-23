import Keys from "./keys";

export default function Home() {
  const keysList = [
    [
      { text1: "esc", text2: "", width: "w-20", height: "h-15" },
      { text1: "F1", text2: "", width: "w-15", height: "h-15" },
      { text1: "F2", text2: "", width: "w-15", height: "h-15" },
      { text1: "F3", text2: "", width: "w-15", height: "h-15" },
      { text1: "F4", text2: "", width: "w-15", height: "h-15" },
      { text1: "F5", text2: "", width: "w-15", height: "h-15" },
      { text1: "F6", text2: "", width: "w-15", height: "h-15" },
      { text1: "F7", text2: "", width: "w-15", height: "h-15" },
      { text1: "F8", text2: "", width: "w-15", height: "h-15" },
      { text1: "F9", text2: "", width: "w-15", height: "h-15" },
      { text1: "F10", text2: "", width: "w-15", height: "h-15" },
      { text1: "F11", text2: "", width: "w-15", height: "h-15" },
      { text1: "F12", text2: "", width: "w-15", height: "h-15" },
      { text1: "", text2: "", width: "w-15", height: "h-15" },
    ],
    [
      { text1: "`", text2: "~", width: "w-15", height: "h-15" },
      { text1: "1", text2: "!", width: "w-15", height: "h-15" },
      { text1: "2", text2: "@", width: "w-15", height: "h-15" },
      { text1: "3", text2: "#", width: "w-15", height: "h-15" },
      { text1: "4", text2: "$", width: "w-15", height: "h-15" },
      { text1: "5", text2: "%", width: "w-15", height: "h-15" },
      { text1: "6", text2: "^", width: "w-15", height: "h-15" },
      { text1: "7", text2: "&", width: "w-15", height: "h-15" },
      { text1: "8", text2: "*", width: "w-15", height: "h-15" },
      { text1: "9", text2: "(", width: "w-15", height: "h-15" },
      { text1: "0", text2: ")", width: "w-15", height: "h-15" },
      { text1: "-", text2: "_", width: "w-15", height: "h-15" },
      { text1: "=", text2: "+", width: "w-15", height: "h-15" },
      { text1: "del", text2: "", width: "w-28", height: "h-15" },
    ],
    [
      { text1: "tab", text2: "", width: "w-24", height: "h-15" },
      { text1: "Q", text2: "", width: "w-15", height: "h-15" },
      { text1: "W", text2: "", width: "w-15", height: "h-15" },
      { text1: "E", text2: "", width: "w-15", height: "h-15" },
      { text1: "R", text2: "", width: "w-15", height: "h-15" },
      { text1: "T", text2: "", width: "w-15", height: "h-15" },
      { text1: "Y", text2: "", width: "w-15", height: "h-15" },
      { text1: "U", text2: "", width: "w-15", height: "h-15" },
      { text1: "I", text2: "", width: "w-15", height: "h-15" },
      { text1: "O", text2: "", width: "w-15", height: "h-15" },
      { text1: "P", text2: "", width: "w-15", height: "h-15" },
      { text1: "[", text2: "{", width: "w-15", height: "h-15" },
      { text1: "]", text2: "}", width: "w-15", height: "h-15" },
      { text1: "\\", text2: "|", width: "w-24", height: "h-15" },
    ],
    [
      { text1: "caps lock", text2: "", width: "w-28", height: "h-15" },
      { text1: "A", text2: "", width: "w-15", height: "h-15" },
      { text1: "S", text2: "", width: "w-15", height: "h-15" },
      { text1: "D", text2: "", width: "w-15", height: "h-15" },
      { text1: "F", text2: "", width: "w-15", height: "h-15" },
      { text1: "G", text2: "", width: "w-15", height: "h-15" },
      { text1: "H", text2: "", width: "w-15", height: "h-15" },
      { text1: "J", text2: "", width: "w-15", height: "h-15" },
      { text1: "K", text2: "", width: "w-15", height: "h-15" },
      { text1: "L", text2: "", width: "w-15", height: "h-15" },
      { text1: ";", text2: ":", width: "w-15", height: "h-15" },
      { text1: "'", text2: '"', width: "w-15", height: "h-15" },
      { text1: "return", text2: "", width: "w-28", height: "h-15" },
    ],
    [
      { text1: "shift", text2: "", width: "w-36", height: "h-15" },
      { text1: "Z", text2: "", width: "w-15", height: "h-15" },
      { text1: "X", text2: "", width: "w-15", height: "h-15" },
      { text1: "C", text2: "", width: "w-15", height: "h-15" },
      { text1: "V", text2: "", width: "w-15", height: "h-15" },
      { text1: "B", text2: "", width: "w-15", height: "h-15" },
      { text1: "N", text2: "", width: "w-15", height: "h-15" },
      { text1: "M", text2: "", width: "w-15", height: "h-15" },
      { text1: ",", text2: "<", width: "w-15", height: "h-15" },
      { text1: ".", text2: ">", width: "w-15", height: "h-15" },
      { text1: "/", text2: "?", width: "w-15", height: "h-15" },
      { text1: "shift", text2: "", width: "w-36", height: "h-15" },
    ],
    [
      { text1: "fn", text2: "", width: "w-15", height: "h-15" },
      { text1: "^", text2: "ctrl", width: "w-15", height: "h-15" },
      { text1: "", text2: "opt", width: "w-15", height: "h-15" },
      { text1: "", text2: "cmd", width: "w-17", height: "h-15" },
      { text1: "", text2: "", width: "w-96", height: "h-15" },
      { text1: "", text2: "opt", width: "w-15", height: "h-15" },
      { text1: "", text2: "cmd", width: "w-17", height: "h-15" },
      { text1: "<", text2: "", width: "w-13", height: "h-7" },
      {
        isArrowGroup: true,
        arrows: [
          { text1: "^", text2: "", width: "w-13", height: "h-7" },
          { text1: "v", text2: "", width: "w-13", height: "h-7" },
        ],
      },
      { text1: ">", text2: "", width: "w-13", height: "h-7" },
    ],
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-500">
      <div className="h-120 w-284 bg-neutral-700 rounded-2xl shadow-2xl shadow-black/50 inset-shadow-sm inset-shadow-black/50">
        <div className="p-6 w-full flex flex-col gap-3">
          {keysList.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-between items-end">
              {row.map((key, keyIndex) =>
                key.isArrowGroup ? (
                  <div key={keyIndex} className="flex flex-col gap-[5px]">
                    {key.arrows.map((arrow, arrowIndex) => (
                      <Keys
                        key={arrowIndex}
                        text1={arrow.text1}
                        text2={arrow.text2}
                        width={arrow.width}
                        height={arrow.height}
                      />
                    ))}
                  </div>
                ) : (
                  <Keys
                    key={keyIndex}
                    text1={key.text1 ?? ""}
                    text2={key.text2 ?? ""}
                    width={key.width ?? ""}
                    height={key.height ?? ""}
                  />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
