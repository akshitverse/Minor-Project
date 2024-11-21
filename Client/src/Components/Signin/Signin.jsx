import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import GoogleButton from 'react-google-button';
import './Signin.css';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
          Accept: 'application/json',
        },
      })
        .then((res) => {
          const profileData = {
            googleId: res.data.id,
            email: res.data.email,
            name: res.data.name,
            profilePic: res.data.picture,
          };
          // Send profile data to backend
          axios.post('http://localhost:3001/api/google-login', profileData)
            .then(() => {
              localStorage.setItem('user', JSON.stringify(profileData));
              navigate('/');
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  }, [user, navigate]);

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

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
        const result = await fetch('http://localhost:3001/signin', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await result.json();
        if (data.success) {
          localStorage.setItem('user', JSON.stringify(data.user));
          navigate('/');
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error(error);
        alert('Error signing in');
      }
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h1>Sign In</h1>
        <div className="btn">
          <GoogleButton
            style={{ background: 'white', color: 'grey', width: '100%' }}
            onClick={() => login()}
          />
        </div>
        <span className="span">or use your email to sign in</span>
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
        <button type="submit" className="signin-button">SIGN IN</button>
        <p className="signup-link">Don't have an account? <a href="/signup">Sign up</a></p>
      </form>
    </div>
  );
}

export default Signin;
