// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [user, setUser] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`http://localhost:5000/api/auth/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Error: ', errorData.message);  // Log error from the backend
//         alert(errorData.message || 'Login failed');  // Show error message
//         return;
//       }

//       const data = await response.json();
//       console.log('Login successful:', data);  // Log successful login

//       // Save token to localStorage and navigate to the homepage
//       localStorage.setItem('token', data.token);
//       navigate('/'); // Redirect to the home page

//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('An unexpected error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth"; 
import "../../styles/login.css"; // Import modern CSS

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth(); // Use Auth Context
  const navigate = useNavigate();

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset errors

    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      login(data.token); // Use Auth Context to set token
      navigate("/"); // Redirect to home

    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
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
          <button type="submit">Login</button>
        </form>
        <p className="register-link">
          Not registered? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

