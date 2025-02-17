// // auth.js
// import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";  // Correct usage of useNavigate

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();  // useNavigate works here because it's within Router context

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setUser({ token });
//     }
//   }, []);

//   const login = (token) => {
//     localStorage.setItem("token", token);
//     setUser({ token });
//     navigate("/");  // Use navigate to redirect after login
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");  // Use navigate to redirect after logout
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? { token } : null;
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setUser({ token });

    // Redirect to the last visited page or home
    const redirectTo = location.state?.from?.pathname || "/";
    navigate(redirectTo, { replace: true });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
