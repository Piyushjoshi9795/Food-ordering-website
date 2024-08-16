// src/components/AboutUs.js
import React from 'react';

const About = () => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
            <p className="text-gray-700 mb-4">
                Welcome to Food Junction, where we bring you the finest culinary experiences. Our passion for
                food drives us to create dishes that not only satisfy your hunger but also delight your senses.
            </p>
            <p className="text-gray-700 mb-4">
                Founded in 2024, we have been committed to sourcing the freshest ingredients and crafting meals with
                love and care. Our menu is a blend of traditional recipes and modern flavors, designed to appeal to
                every palate.
            </p>
            <p className="text-gray-700 mb-4">
                At Food Junction, we believe in more than just serving food; we strive to create memorable
                dining experiences. Whether you're here for a quick bite or a special occasion, our team is dedicated to
                making your visit exceptional.
            </p>
            <p className="text-gray-700">
                Thank you for choosing us. We look forward to welcoming you to our table!
            </p>
        </div>
    );
};

export default About;
