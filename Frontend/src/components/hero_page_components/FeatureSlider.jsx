// FeatureSlider.js
import React from 'react';
import Slider from 'react-slick';

const FeatureSlider = () => {
    const features = [
        {
            title: "Explore Recipes",
            description: "Discover new and exciting recipes tailored to your taste.",
            buttonText: "Go to Explore",
            link: "#explore-recipes",
        },
        {
            title: "Flavor Pairing",
            description: "Find unique and surprising flavor combinations to enhance your dishes.",
            buttonText: "Go to Flavor Pairing",
            link: "#flavor-pairing",
        },
        {
            title: "My Pantry",
            description: "Get recipe suggestions based on ingredients you already have.",
            buttonText: "Go to My Pantry",
            link: "#my-pantry",
        },
        {
            title: "Nutritional Insights",
            description: "Learn more about the nutritional benefits of each ingredient.",
            buttonText: "Go to Insights",
            link: "#nutrition-insights",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <section className="bg-[#FFF9ED] py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-[#333333] mb-8">
                    Our Features
                </h2>
                <Slider {...settings}>
                    {features.map((feature, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 max-w-lg mx-auto">
                                <h3 className="text-2xl font-bold text-[#4D5D4B] mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-[#333333] mb-6">
                                    {feature.description}
                                </p>
                                <a
                                    href={feature.link}
                                    className="inline-block py-3 px-6 bg-[#E27D60] text-white font-bold rounded hover:bg-[#C2583A] transition duration-300"
                                >
                                    {feature.buttonText}
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default FeatureSlider;
