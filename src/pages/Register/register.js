import React, { useState } from 'react';
import './style.scss';
import image_login from '~/components/asset/img/login.png';
import { useAuth } from '../Login/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      // Kiểm tra người dùng mới đăng ký sau khi đăng ký thành công
      const newUser = JSON.parse(localStorage.getItem('user'));
      if (newUser) {
        // Nếu người dùng mới đăng ký tồn tại trong localStorage, chuyển hướng đến trang rolechooser
        navigate('/rolechooser');
        console.log(newUser)
      } else {
        // Nếu không, hiển thị thông báo lỗi
        setError('Đăng ký thất bại. Vui lòng thử lại.');
      }
    } catch (error) {
      setError('Đăng ký thất bại. Vui lòng thử lại.');
    }
  };

  return (
    <div className="login_wrapper">
      <div className="login_wrapper-container">
        <div className="login_wrapper-container_wrap">
          <img src={image_login} alt="login" />
          <div className="login_wrapper-container_wrap-group">

            <label>Tên người dùng:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên người dùng"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="login_wrapper-container_wrap-group">
            <label>Email:</label>
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
            <label>Mật khẩu:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Điền mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="button" onClick={onSubmitChange} className="login-button">
            Đăng ký
          </button>
          {error && <div>{error}</div>}

        </div>
      </div>
    </div>
  );
}
