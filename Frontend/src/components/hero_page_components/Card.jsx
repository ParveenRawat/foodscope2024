// RecipeCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
const Card = ({ title, description, image, url, res }) => {

    const navigate = useNavigate();
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 border w-96 border-gray-200">
            {/* Recipe Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
            />

            {/* Recipe Title */}
            <h3 className="text-2xl font-bold text-[#4D5D4B] mb-2 max-w-sm">
                {title}
            </h3>

            {/* Recipe Description */}
            <p className="text-[#333333] mb-4">{description}</p>

            {/* Action Buttons */}
            <div className="flex justify-between">
                <a
                    href={url}
                    className="py-2 px-4 bg-[#E27D60] text-white font-bold rounded hover:bg-[#C2583A] transition duration-300"
                >
                    View Recipe
                </a>
                <Modal title="badf" res={res}/> 
            </div>
        </div>
    );
};

export default Card;
