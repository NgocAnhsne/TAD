import React, { useState } from 'react';
import "./style.scss";
import Popup from "../../components/Popup/Popup";
import image_login from"~/components/asset/img/login_banner.JPG";
function Login() {
  // Tạo state để lưu trữ giá trị của input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async(event) => {
    event.preventDefault();
  }
  // Hàm xử lý sự kiện khi giá trị của input email thay đổi
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Hàm xử lý sự kiện khi giá trị của input password thay đổi
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Hàm xử lý sự kiện khi form được gửi
  const handleSubmit = (event) => {
    event.preventDefault();
    // Thực hiện xử lý đăng nhập ở đây, ví dụ:
    console.log('Email:', email);
    console.log('Password:', password);
    // Đặt lại các trường đầu vào sau khi form được gửi
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login_wrapper">
      <form onSubmit={handleLogin}>
      <div className="login_container">
      <img src={image_login}></img>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
           
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
        
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Mật khẩu"
            />
          </div>
          <div>
              <a className='changePass_link' ></a>
          </div>
          <button type="submit" className="login-button">Đăng nhập</button>
        </form>
      </div>
      </form>
    </div>
  );
}

export default Login;
