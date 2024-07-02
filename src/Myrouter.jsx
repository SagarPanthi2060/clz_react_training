import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Myrouter = () => {
  return (
    <div className="container mx-auto mt-8">
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

const HomePage = () => (
  <div className="bg-blue-200 p-8 rounded-md shadow-md">
    <h1 className="text-3xl font-bold text-blue-800">Welcome to Home Page</h1>
  </div>
);

const AboutPage = () => (
  <div className="bg-green-200 p-8 rounded-md shadow-md">
    <h1 className="text-3xl font-bold text-green-800">About Us</h1>
  </div>
);

const ContactPage = () => (
  <div className="bg-yellow-200 p-8 rounded-md shadow-md">
    <h1 className="text-3xl font-bold text-yellow-800">Contact Us</h1>
  </div>
);

const ProductPage = () => (
  <div className="bg-purple-200 p-8 rounded-md shadow-md">
    <h1 className="text-3xl font-bold text-purple-800">Our Products</h1>
  </div>
);

export default Myrouter;
