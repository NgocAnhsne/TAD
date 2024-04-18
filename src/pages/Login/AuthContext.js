import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password
      });
      const data = response.data;
      console.log(error)
      if (!data.data) {
        throw new Error('Login failed');
      }

      
      localStorage.setItem('user', JSON.stringify(data.data));

      setUser(data.data);
      setError(null);

      if (data.data.role === '2') {
        navigate('/admin');
      } else if (data.data.role === '0') {
        navigate('/student/profile');
      } else if (data.data.role === '1') {
        navigate('/teacher/profile');
      }
    } catch (error) {
      setError('Đăng nhập thất bại. Vui lòng thử lại.');
    }
  };
  const register = async (name, email, password) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        name,
        email,
        password
      });
      const data = response.data;
     
      if (!data) {
        throw new Error('Registration failed');
      }

      localStorage.setItem('user', JSON.stringify(data));
      
      setUser(data);
      setError(null);
        
    } catch (error) {
      setError('Đăng ký thất bại. Vui lòng thử lại.');
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  
  return (
    
    <AuthContext.Provider value={{ user, error, login , register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



export const useAuth = () => useContext(AuthContext);
