// Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/register.css"; 

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "", password: "" });
  const [error, setError] = useState(null); // Store error message
  const navigate = useNavigate();

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields before sending
    if (!user.name || !user.email || !user.phone || !user.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        navigate('/login');  // Redirect to login page after successful registration
      } else {
        const errorData = await response.json();  // Get the error message from backend
        setError(errorData.message || 'Registration failed');
      }
    } catch (error) {
      setError('An error occurred during registration');
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      {error && <div className="error-message">{error}</div>} {/* Display error message if any */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
