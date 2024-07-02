import React from 'react';

const Practice3 = () => {
  let product = [
    { name: "laptop", price: 100000, quantity: 10 },
    { name: "mobile", price: 20000, quantity: 5 },
    { name: "Tv", price: 100000, quantity: 8 },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Our Product</h1>
      <div className="grid gap-4 lg:grid-cols-3">
        {product.map((value, i) => (
          <div key={i} className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Product name: {value.name}</h3>
            <p className="text-lg mb-2">Price: ${value.price}</p>
            <p className="text-lg">Quantity available: {value.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice3;
