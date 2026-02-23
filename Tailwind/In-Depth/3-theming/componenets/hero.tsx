import React from "react";

const Hero = () => {
  return (
    <div className="font-shubham my-40 flex w-full flex-col items-center">
      <h1 className="max-w-2xl bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intrutive finance.
      </h1>

      <p className="mx-auto mt-10 max-w-xl text-center text-neutral-400 selection:bg-white">
        Say goodbye to the <span className="text-primary">outdated</span>{" "}
        financial tools. Every small business owner, regardless of the
        background, can now manage their{" "}
        <span className="text-primary">business</span> like a pro. Simple.
        Intuitive. And never boring.
      </p>

      <div className="mt-8 flex w-full max-w-lg justify-center">
        <input
          type="text"
          className="mr-4 flex-1 rounded-xl border border-neutral-700 px-4 text-white transition duration-200 placeholder:text-neutral-500 focus:ring-1 focus:ring-sky-500 focus:outline-none"
          placeholder="Enter your email"
        />

        <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white">
          <div className="absolute inset-x-0 -bottom-px h-px w-full bg-linear-to-r from-transparent via-sky-500 to-transparent"></div>
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default Hero;

// tracking => between letters
// leading => between lines

// bg-clip-text => this will take whatever the backgroud we provide to the text
// To apply gradient in the text, we need to make it transparrent and apply the required gradient

// selection:bg-white => when we select by default there is blue kind of background, we can change it using this. We can also change the text color or any property white selection.

// There are many properties of input field which we can change. (Focus and hover)

// flex-1 => It means, it takes all the remaining width, Eg: there are 2 componenets and they are taking like 10px 10px space and the total width is 50px then if we have flex-1 in any element then it will take 40px and other won't be changed, it will have the width it had earlier.

// focus: => It is used to have properties on the input field when it is selected or when we click it to write

// ring => this property resembles border but it used box-shadow to create border.
