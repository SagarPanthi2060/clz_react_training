import React, { useState } from 'react';
import './MyForm.css'; // Import the CSS file

const MyForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      age: age,
      email: email,
      password: password,
    };
    console.log(data);
  };

  const handleAgeChange = (e) => {
    let inputAge = parseInt(e.target.value);

    // Check if inputAge is NaN or less than 0, set to 0
    if (isNaN(inputAge) || inputAge < 0) {
      inputAge = 0;
    }

    // Check if inputAge is greater than 150, set to 150
    if (inputAge > 150) {
      inputAge = 150;
    }

    setAge(inputAge.toString()); // Convert back to string to maintain input type consistency
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-title">FORM</h1>
      
      <div className="form-group">
        <label htmlFor='a'>Name:</label>
        <input
          id='a'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor='b'>Age:</label>
        <input
          id='b'
          type='number'
          value={age}
          onChange={handleAgeChange}
          className="form-input"
          min="0"
          max="150"
        />
      </div>

      <div className="form-group">
        <label htmlFor='c'>Email:</label>
        <input
          id='c'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor='d'>Password:</label>
        <input
          id='d'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
      </div>

      <button type='submit' className="form-button">Send</button>
    </form>
  );
};

export default MyForm;
