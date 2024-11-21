import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "*Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "*Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "*Email is invalid";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "*Password is required";
      isValid = false;
    } else if (password.length < 6) {  
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const result = await fetch('http://localhost:3000/signup', {
          method: 'POST',
          body: JSON.stringify({ name, email, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await result.json();
        if (data.success) {
          alert('Account created successfully!');
          navigate('/signin');
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error(error);
        alert('Error signing up');
      }
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1>Create an Account</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
        <button type="submit" className="signup-button">SIGN UP</button>
        <p className="signin-link">
          Already have an account?{' '}
          <span onClick={() => navigate('/signin')} className="signin-redirect">
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
