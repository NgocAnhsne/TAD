import React, { useState } from 'react';
import "./style.scss";
import image_login from"~/components/asset/img/login.png";
import AuthUser from "./AuthUser"

function Login() {
  const { http, setToken } = AuthUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(null); // Xóa lỗi khi email thay đổi
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(null); // Xóa lỗi khi mật khẩu thay đổi
  };

  const submitForm = () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    http.post('/login',{email:email,password:password })
      .then((res) => {
        console.log(res.data);
        setToken(res.data.user,res.data.access_token);
      })
      .catch((error) => {
        setError("Tên tài khoản/ mật khẩu không hợp lệ");
      });
  }

return (
  <div className="login_wrapper">
    <div className='login_wrapper-container'>
      <div className='login_wrapper-container_wrap'>
      <img src={image_login}></img>
        <div className='login_wrapper-container_wrap-group'>
  
          <label>Email:</label>
          <input type="email" className="form-control" placeholder='Nhập email...'
            value={email}
            onChange={handleEmailChange}
            id="email"/>
        </div>
        <div className='login_wrapper-container_wrap-group'>
          <label>Mật khẩu:</label>
          <input type="password" className="form-control" placeholder='Điền mật khẩu'
            value={password}
            onChange={handlePasswordChange}
            id="pwd"/>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="button" onClick={submitForm} className='login-button'>Login</button>
      </div>
    </div>
  </div>
);
}

export default Login;












