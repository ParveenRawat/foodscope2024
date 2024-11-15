import { useEffect, useState } from "react";
import axios from 'axios'
import react from "react";
function Hero() {

    const [imgUrl, setImgUrl ] = useState("")

    useEffect(() => {
        // axios.get("https://foodapi-eilc.onrender.com/recipeOftheDay").then((response) => {
        //     setImgUrl(response.data.payload.img_url)
        //     console.log(response.data.payload.img_url)
           
        // })
        axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
            console.log(response)
           
        })
    },[])

    return (
        <section className="bg-[#D9E4DD] py-12 mt-8">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-[#333333] text-center mb-6">
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
                        <h3 className="text-2xl font-bold text-[#4D5D4B] mb-4">Spicy Chicken Tacos</h3>
                        <p className="text-[#333333] mb-6">
                            A perfect combination of spicy chicken, fresh veggies, and a delicious taco sauce. A quick and easy recipe for any occasion.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#recipe"
                                className="inline-block py-3 px-6 bg-[#E27D60] text-white font-bold rounded hover:bg-[#C2583A] transition duration-300"
                            >
                                View Recipe
                            </a>
                            <a
                                href="#ingredients"
                                className="inline-block py-3 px-6 bg-[#DAB785] text-[#333333] font-bold rounded hover:bg-[#C49A6C] transition duration-300"
                            >
                                See Ingredients
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero