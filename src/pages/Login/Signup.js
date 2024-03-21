import React, { useState } from 'react';
import "./style.scss";
import image_signup from"~/components/asset/img/signup_banner.png";

function Signup() {
  // Tạo state để lưu trữ giá trị của input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <div className="login_container">
      <img src={image_signup}></img>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
           
            <input
              type="text"
              id="name"
              value={email}
              onChange={handleEmailChange}
              placeholder="Tên người dùng"
            />
          </div>
          <div className="form-group">
        
            <input
              type="text"
              id="mail"

              placeholder="Email"
            />

<input
              type="password"
              id="password"
              onChange={handlePasswordChange}
              value={password}
              placeholder="Mật khẩu"
            /> 
          </div>
          <button type="submit" className="login-button">Đăng ký</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
