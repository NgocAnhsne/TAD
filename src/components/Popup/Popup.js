import "./style.scss";

import React from "react";
import Login from "~/pages/Login/index";
import Register from "~/pages/Register/register";
import openForgotpwd from "~/pages/Forgotpwd/forgotpwd" 
export default function Popup(props) {
  const { openPopup, setOpenPopup, openSignUp, setOpenSignUp,openForgotpwd,setOpenForgotpwd } = props;
  return (
    <div>
      <dialog open={openSignUp} className="popup">
        <button
          className="banner_btn"
          onClick={() => {
            setOpenSignUp(false);
          }}>
          X
        </button>
        <div className="banner">
          <Register></Register>
        </div>
      </dialog>

      <dialog open={openPopup} className="popup">
        <button
          className="banner_btn"
          onClick={() => {
            setOpenPopup(false);
          }}> X
        </button>
        <div className="banner">
          <Login></Login>
        </div>
      </dialog>

      <dialog open={openForgotpwd} className="popup">
        <button
          className="banner_btn"
          onClick={() => {
            setOpenForgotpwd(false);
          }}>
          X
        </button>
        <div className="banner">
          <openForgotpwd></openForgotpwd>
        </div>
      </dialog>
    </div>
  );
}

