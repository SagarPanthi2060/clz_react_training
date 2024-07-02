import React, { useState } from "react";

const College = ({ name, location, collegecode }) => {
  const defaultEmail = "sagar12@gmail.com";
  const [email, setEmail] = useState(defaultEmail);

  const handleChangeEmail = () => {
    setEmail("ddddd@gmail.com"); // Change email to new value
  };

  const handleRevertEmail = () => {
    setEmail(defaultEmail); // Revert email to default value
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-md flex items-center justify-center">
      
      <div className="mb-4">
        <h3 className="text-lg">My email is {email}</h3>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
        onClick={handleChangeEmail}
      >
        Change Email
      </button>
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        onClick={handleRevertEmail}
      >
        Revert Email
      </button>
    </div>
  );
};

export default College;
