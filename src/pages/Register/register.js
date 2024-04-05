import React, { useState } from 'react';
import "./style.scss";
import image_login from"~/components/asset/img/login.png";
import AuthUser from "~/pages/Login/AuthUser"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Register() {

  const navigate = useNavigate();
  const [loading,setLoading]=useState()

  const [userField, setUserField] = useState({
      name: "",
      email: "",
      password: "",
  });

  const changeUserFieldHandler = (e) => {
      setUserField({
          ...userField,
          [e.target.name]: e.target.value
      });
      //console.log(userField);

  }
  
  const onSubmitChange = async (e) => {
      e.preventDefault();
      try {
         await axios.post("http://127.0.0.1:8000/api/register", userField);
          setLoading(true);
      } catch (err) {
          console.log("Something Wrong");
      }
  }
  if(loading){
      return (
          navigate('/rolechooser')
      )
  }

  return (
    <div className="login_wrapper">
      <div className='login_wrapper-container'>
        <div className='login_wrapper-container_wrap'>
        <img src={image_login}></img>
          <div className='login_wrapper-container_wrap-group'>
    
            <label>Tên người dùng:</label>
            <input type="name" className="form-control" placeholder='Nhập tên người dùng'
              name="name"
              title="name"
              required
              onChange={e => changeUserFieldHandler(e)} 
              
              id="email"/>
          </div>
          <div className='login_wrapper-container_wrap-group'>
    
            <label>Email:</label>
            <input type="email" className="form-control" placeholder='Nhập email...'
              name="email"
              title="Email"
              required
              onChange={e => changeUserFieldHandler(e)} />
          </div>
          <div className='login_wrapper-container_wrap-group'>
            <label>Mật khẩu:</label>
            <input type="password" className="form-control" placeholder='Điền mật khẩu'
              name="password"
              title="password"
              required
              onChange={e => changeUserFieldHandler(e)} />
          </div>
          {/* <div className='login_wrapper-container_wrap-group'>
            <label></label>
            <input type="password" className="form-control" placeholder='Nhập lại mật khẩu'
              value={password}
              onChange={handlePasswordChange}
              id="pwd"/>
          </div>
          {error && <div className="error-message">{error}</div>} */}
          <button type="button" onClick={e => onSubmitChange(e)} className='login-button'>Đăng ký</button>
        </div>
      </div>
    </div>
  );
}
