import React, { useState } from 'react';
import "./style.scss";
import image_login from"~/components/asset/img/login.png";
import AuthUser from "./AuthUser"
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      console.log(data.data.role)
      if (data.data.role === '2') {
        navigate('/admin')
      } else if (data.data.role === '0') {
        navigate('/student/history');
      } else if (data.data.role === '1') {
        navigate('/teacher');
      }
    } catch (error) {
      setError('Đăng nhập thất bại. Vui lòng thử lại.');
    }
  };

return (
  <div className="login_wrapper">
    <div className='login_wrapper-container'>
      <div className='login_wrapper-container_wrap'>
      <img src={image_login}></img>
        <div className='login_wrapper-container_wrap-group'>
  
          <label>Email:</label>
          <input type="email" className="form-control" placeholder='Nhập email...'
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"/>
        </div>
        <div className='login_wrapper-container_wrap-group'>
          <label>Mật khẩu:</label>
          <input type="password" className="form-control" placeholder='Điền mật khẩu'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="button" onClick={handleLogin} className='login-button'>Login</button>
      </div>
    </div>
  </div>
);
}

export default Login;

