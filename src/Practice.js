import React, { useState } from 'react';

const Practice = () => {
  let [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-5 bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Increment and Decrement the value</h1>
        <div className="text-4xl text-center mb-4 p-2 border rounded bg-gray-50">
          {count}
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button
            className="bg-red-500 text-white py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 ease-in-out col-span-2"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrement
          </button>
          <button
            className="bg-green-500 text-white py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out col-span-2"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button>
          <button
            className="bg-blue-500 text-white py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out col-span-4"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;
