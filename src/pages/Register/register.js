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
           
              
              id="email"/>
          </div>
          <div className='login_wrapper-container_wrap-group'>
    
            <label>Email:</label>
            <input type="email" className="form-control" placeholder='Nhập email...'
              name="email"
              title="Email"
              required
               />
          </div>
          <div className='login_wrapper-container_wrap-group'>
            <label>Mật khẩu:</label>
            <input type="password" className="form-control" placeholder='Điền mật khẩu'
              name="password"
              title="password"
              required
             />
          </div>
          
          <button type="button"  className='login-button'>Đăng ký</button>
        </div>
      </div>
    </div>
  );
}
