const Keys = ({
  height,
  width,
  text1,
  text2,
}: {
  height: string;
  width: string;
  text1: string;
  text2: string;
}) => {
  return (
    <button
      className={`${height} ${width} ring-2 ring-black rounded-xl cursor-pointer bg-neutral-900 shadow-lg shadow-white/45 hover:shadow-black/60 transition duration-200 active:bg-neutral-800`}
    >
      <div className="text-neutral-400">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </button>
  );
};

export default Keys;
