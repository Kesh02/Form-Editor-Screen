import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  //validate the email format
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setError('Invalid email format');
    } else {
      setError('');
    }
  };

  return (
    // <div>
    //   <input
    //     type="email"
    //     placeholder="Enter your email"
    //     value={email}
    //     onChange={handleChange}
    //   />
    //   {error && <p style={{ color: 'red' }}>{error}</p>}
    // </div>
    <div className="email-form">
    <label>Email:</label>
    <input
      type="email"
      className="email-input"
      placeholder="Enter your email"
      value={email}
      onChange={handleChange}
    />
    {error && <p className="error-message">{error}</p>}
  </div>
  );
};

export default EmailInput;
