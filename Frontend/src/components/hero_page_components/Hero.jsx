import { useEffect, useState } from "react";
import axios from 'axios'
import react from "react";
import Modal from "../modal/Modal";
function Hero() {

    const [imgUrl, setImgUrl ] = useState("")
    const [recipeTitle, setRecipeTitle] = useState("")
    const [recipeUrl, setRecipeUrl ] = useState("")
    const [res, setRes] = useState({})

    useEffect(() => {
        axios.get("https://cosylab.iiitd.edu.in/recipe/recipeOftheDay").then((response) => {
            setImgUrl(response.data.payload.img_url)
            setRecipeTitle(response.data.payload.Recipe_title)
            setRecipeUrl(response.data.payload.url)        
            setRes(response)    
           
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
                        <h3 className="text-2xl font-bold text-[#4D5D4B] mb-4">{recipeTitle}</h3>
                        <p className="text-[#333333] mb-6">
                            A perfect combination of spicy chicken, fresh veggies, and a delicious taco sauce. A quick and easy recipe for any occasion.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={recipeUrl}
                                className="inline-block py-3 px-6 bg-[#E27D60] text-white font-bold rounded hover:bg-[#C2583A] transition duration-300"
                            >
                                View Recipe
                            </a>                          
                            <Modal title="testing" desc="test desc" res={res}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero