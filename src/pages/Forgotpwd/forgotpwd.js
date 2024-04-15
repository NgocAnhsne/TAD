import React, { useState } from 'react';
import "./style.scss";
import image_login from"~/components/asset/img/login.png";
import { useNavigate } from 'react-router-dom';
function forgotpwd() {
 
return (
  <div className="login_wrapper">
    <div className='login_wrapper-container'>
      <div className='login_wrapper-container_wrap'>
      Quên mật khẩu
      <img src={image_login}></img>
        <div className='login_wrapper-container_wrap-group'>
         
          <label>Email:</label>
          <input type="email" className="form-control" placeholder='Nhập email...'
            

            id="email"/>
        </div>
        <div className='login_wrapper-container_wrap-group'>
          <label>Mật khẩu:</label>
          <input type="password" className="form-control" placeholder='Điền mật khẩu'
            id="password"/>
           
        </div>
       
        <button type="button" className='login-button'>Login</button>
      </div>
    </div>
  </div>
);
}

export default forgotpwd;












