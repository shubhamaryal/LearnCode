import React from "react";

export const Hero = () => {
  return (
    <div className="hero-root">
      <div className="badge">
        <span>What are form 1099 filing requirements?</span>
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8H-6.5"
          ></path>
        </svg>
      </div>

      <h1 className="hero-title">
        Magically simplify <br /> accounting and taxes
      </h1>

      <p className="hero-subtitle">
        Automated bookkeeping, effortless tax filing, real-time insights. Set up
        in 10mins. Back to building by 4:28pm.
      </p>

      <div className="hero-cta">
        <button className="btn">Start free trial</button>
        <button className="btn-secondary">
          <span>Pricing</span>
          <svg width="16" height="16" fill="none">
            <path
              stroke="#1E1F25"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8H-6.5"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
