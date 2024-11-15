// import ArrowIcon from "./../../../public/logo.png";
import cogImage from "./../../../src/sphagetti.png";
import noodleImage from "./../../../src/taco.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Header = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // <div className="tag">Version 2.0 is here</div>
  return (
    <section
      ref={heroRef}
      className="overflow-clip overflow-y-visible bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#4D5D4B,#A3B9A2_100%)] pb-20 pt-8 md:pb-10 md:pt-5"
    >
      <div className="container bg-[../../blurry.svg]">
        <div className="items-center md:flex flex-1">
          <div className="md:w-[700px]">
            <h1 className="mt-6 bg-gradient-to-b from-black to-jade text-jade pb-2 bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
              Cook, Share, Savor Delicious Recipes at Your Fingertips
            </h1>
            <p className="mt-6 text-xl tracking-tight text-[#010d3E]"></p>
            <div className="mt-[30px] flex items-center gap-1">
              <button className="btn btn-primary">
                <span>where culinary creativity meets simplicity.</span>
              </button>
            </div>
          </div>
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <motion.img
              src={cogImage}
              alt="Cog Image"
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none lg:left-0"
              animate={{
                translateY: [-10, 50],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
//
//
// <motion.img
//               src={cylinderImage}
//               alt="Cylinder Image"
//               height={221}
//               width={220}
//               className="-left-32 -top-6 hidden md:absolute md:block"
//               style={{
//                 translateY: translateY,
//               }}
//             />
//<motion.img
//   src={noodleImage}
//   alt="noodle Image"
//   height={219}
//   width={219}
//   className="z-6 absolute left-[448px] top-[524px] hidden rotate-[30deg] lg:block"
//   style={{
//     rotate: 29,
//     translateY: translateY,
//   }}
// />

export default Header;
