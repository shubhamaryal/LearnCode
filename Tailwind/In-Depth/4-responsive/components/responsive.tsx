import React from "react";

const Responsive = () => {
  return (
    // <div className="text-4xl lg:text-6xl xl:text-9xl font-bold bg-blue-500">
    //   Responsive
    // </div>

    // Last ko breakpiont ma jun property lagako hunxa, tei nae last sammma janxa 
    <div className="flex flex-col shub:flex-row items-center gap-10">
      <div className="h-40 w-40 rounded-2xl bg-neutral-400"></div>
      <div className="h-40 w-40 rounded-2xl bg-red-400"></div>
      <div className="h-40 w-40 rounded-2xl bg-blue-400"></div>
    </div>
  );
};

export default Responsive;

// sm => 640px
// md => 768px
// lg => 1024px
// xl => 1280px
// 2xl => 1536px

// Eg: text-4xl lg:text-6xl xl:text-9xl => this means the on mobile the text is 4xl and then on laptop 6xl then on desktops 9l, the size of the text increases as the screen size increases
