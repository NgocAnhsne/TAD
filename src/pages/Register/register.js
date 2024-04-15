import React, { useState } from 'react';
import "./style.scss";
import image_login from"~/components/asset/img/login.png";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from "~/components/Popup/Popup";

export default function Register() {
  const navigate = useNavigate();
  const [openForgotpwd, setOpenForgotpwd] = useState(false);
  const [loading, setLoading] = useState(false);
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
      console.log(userField);
  }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/register", userField);
            setLoading(true);
            const { id } = response.data; // Assuming the response contains the user ID
            navigate(`/rolechooser/${id}`); // Navigating to the next page with the user ID in the URL
        } catch (err) {
            console.log("Something Wrong");
        }
    }

  return (
    <div className="login_wrapper">
           <Popup openPopup={openForgotpwd} setOpenPopup={setOpenForgotpwd}></Popup>
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
              onChange={e => changeUserFieldHandler(e)}
              required
               />
          </div>
          <div className='login_wrapper-container_wrap-group'>
            <label>Mật khẩu:</label>
            <input type="password" className="form-control" placeholder='Điền mật khẩu'
              name="password"
              title="password"
              required
              onChange={e => changeUserFieldHandler(e)} 
             />
          </div>
          
          <button type="button" onClick={onSubmitChange} className='login-button'>Đăng ký</button>
          <a onClick={() => setOpenForgotpwd(true)}>quen mat khau ?  </a>
        </div>
      </div>
    </div>
  );
}
