import React, { useState } from 'react';
import './style.scss';
import image_login from '~/components/asset/img/login.png';
import { useAuth } from '../Login/AuthContext';
import { useNavigate } from 'react-router-dom';
import Upload from '~/pages/Upload';
export default function Register() {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
 const [isLoading, setIsLoading] = useState(false); 



  const onSubmitChange = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register(name, email, password);
      
      // Check if user exists in localStorage after registration
      const newUser = JSON.parse(localStorage.getItem('user'));
      if (newUser) {
        // Navigate to the desired page after successful registration
        navigate('/rolechooser');
        console.log(newUser);
      } else {
        setError('Đăng ký thất bại. Vui lòng thử lại.');
        setIsLoading(false);
      }
    } catch (error) {
      setError('Đăng ký thất bại. Vui lòng thử lại.');
      console.log(error);
    }
  };

  return (
    <div className="login_wrapper">
      <div className="login_wrapper-container">
        <div className="login_wrapper-container_wrap">
          <img src={image_login} alt="login" />
          <div className="login_wrapper-container_wrap-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên người dùng"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="login_wrapper-container_wrap-group">
            <input
              type="email"
              className="form-control"
              placeholder="Nhập email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login_wrapper-container_wrap-group">
            <input
              type="password"
              className="form-control"
              placeholder="Điền mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isLoading ? <Upload animation="border" size="sm" />:""}
          <button type="button" onClick={onSubmitChange} className="login-button">
            Đăng ký
          </button>
          {error && <div>{error}</div>}
        </div>
      </div>
    </div>
  );
}
