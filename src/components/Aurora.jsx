import React from "react";
import Home from "./Home";
function Aurora({ className = "" }) {
  return (
    <>
      <section className={`relative h-screen overflow-hidden sm:-top-16 mb-10 ${className}`}>
        
        {/* Top Aurora Glow */}
        <div className="pointer-events-none inset-0 absolute top-[-10vh] left-0 sm:w-full sm:h-[50vh] z-0">
          <div
            className="sm:w-full h-full"
            style={{
              background: `radial-gradient(circle at 40% 10%, rgba(19, 255, 170, 0.25), transparent 70%)`,
              filter: "blur(100px)",
            }}
          />
        </div>

        {/* First Wave */}
        <svg
          className="absolute hidden sm:block top-0 left-0 w-full z-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0B0F19"
            d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,197.3C1120,192,1280,128,1360,96L1440,64V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
          />
        </svg>

        {/* Second Wave (placed beneath the first) */}
        <svg
          className="absolute hidden sm:block top-[15vh] left-0 sm:w-full z-10 opacity-80"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0B0F19"
            d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,197.3C1120,192,1280,128,1360,96L1440,64V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
          />
        </svg>
      {/* <Home/> */}
      </section>
    </>
  );
}

export default Aurora;
