import React, { useEffect, useState } from 'react';
import "./style.scss";
import image_login from"~/components/asset/img/login.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { Button, Spinner } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userData, setUserData] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); 
  const { login } = useAuth();
  useEffect(() => {
      fetchData();
  }, [])
  
  
  const fetchData = async () => {
      try {
          const result = await axios.get("http://127.0.0.1:8000/api/alluser");
          setUserData(result.data.data)
      } catch (err) {
          setError('Đang cập nhập dữ liệu');
      }
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        await login(email, password);
        setError('Đăng nhập thất bại. Vui lòng thử lại.');
        setIsLoading(false);
    } catch (error) {
        setError('Đăng nhập thất bại. Vui lòng thử lại.');
    }
};
function Upload() {
  return (
      <div className="text-center">
          <Button>
              <Spinner
                  
                  as='span'
                  animation="grow"
                  size="sm"
                  role='status'
                  aria-hidden='true' />
              &nbsp;Đang đăng nhập . . .
          </Button>
      </div>
  )
};

return (
  <div className="login_wrapper">
    <div className='login_wrapper-container'>
      <div className='login_wrapper-container_wrap'>
        <img src={image_login} alt="login"></img>
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
        {isLoading ? <Upload animation="border" size="sm" />:""}
        <button type="button" onClick={handleLogin} className='login-button'>
         Login
        </button>
      </div>
    </div>
  </div>
);
}
export default Login;