import productImage from "../../../src/taco.png";
import productImage2 from "../../../src/omlette.png";
import { useEffect, useState } from "react";
import axios from "axios";
import react from "react";
import Modal from "../modal/Modal";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Hero() {
    const [imgUrl, setImgUrl] = useState("");
    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeUrl, setRecipeUrl] = useState("");
    const [res, setRes] = useState({});

    useEffect(() => {
        axios
            .get("https://cosylab.iiitd.edu.in/recipe/recipeOftheDay")
            .then((response) => {
                setImgUrl(response.data.payload.img_url);
                setRecipeTitle(response.data.payload.Recipe_title);
                setRecipeUrl(response.data.payload.url);
                setRes(response);
            });
    }, []);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
    // bg-[radial-gradient(ellipse_630%_100%_at_top_left,#94a372,#FFF9ED)]
    return (
        <section
            ref={heroRef}
            className="bg-[#D9E4DD] overflow-x-clip bg-gradient-to-b from-[#94a372]  to-[#FFF9ED]  pb-20"
        >
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[80px] font-bold top-80 text-[#333333] text-center font-doto mb-12 -translate-y-16">
                    Recipe of the Day
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-lg">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <img
                            src={imgUrl} // Placeholder image for the recipe
                            alt="Recipe of the Day"
                            className="h-72 rounded-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                        <h3 className="text-2xl font-bold text-[#4D5D4B] mb-4">
                            {recipeTitle}
                        </h3>
                        <p className="text-[#333333] mb-6">
                            A perfect combination of spicy chicken, fresh veggies, and a
                            delicious taco sauce. A quick and easy recipe for any occasion.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={recipeUrl}
                                className="inline-block py-3 px-6 bg-[#E27D60] text-white font-bold rounded hover:bg-[#C2583A] transition duration-300"
                            >
                                View Recipe
                            </a>
                            <Modal title="testing" res={res} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <motion.img
                    src={productImage}
                    alt="Food Image"
                    height={600}
                    width={600}
                    className="absolute -right-52 -top-72 hidden  md:block"
                    style={{
                        translateY,
                    }}
                />
                <motion.img
                    src={productImage2}
                    alt="Food Image"
                    height={600}
                    width={600}
                    className="absolute -left-60 -top-[400px] hidden md:block"
                    style={{
                        translateY,
                    }}
                />
            </div>
        </section>
    );
}
// <motion.img
//                     src={tubeImage.src}
//                     alt="Tube Image"
//                     height={248}
//                     width={248}
//                     className="absolute -left-36 bottom-24 hidden md:block"
//                     style={{
//                         translateY,
//                     }}
//                 />

export default Hero;
