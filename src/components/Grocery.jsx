// src/components/Grocery.js
import React from 'react';

const Grocery = () => {
    // Example grocery items data
    const groceryItems = [
        {
            id: 1,
            name: 'Fresh Apples',
            image: 'https://via.placeholder.com/150',
            price: '$3.99 / lb'
        },
        {
            id: 2,
            name: 'Organic Bananas',
            image: 'https://via.placeholder.com/150',
            price: '$1.29 / lb'
        },
        {
            id: 3,
            name: 'Carrots',
            image: 'https://via.placeholder.com/150',
            price: '$2.99 / bunch'
        },
        {
            id: 4,
            name: 'Broccoli',
            image: 'https://via.placeholder.com/150',
            price: '$2.49 / lb'
        }
        // Add more items as needed
    ];

    return (
        <div className="bg-white p-6 rounded-md shadow-md max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Grocery Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {groceryItems.map(item => (
                    <div key={item.id} className="border rounded-lg p-4 shadow-md">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-32 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-bold">{item.name}</h3>
                        <p className="text-gray-700 mt-2">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Grocery;
