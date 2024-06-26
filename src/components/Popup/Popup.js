import "./style.scss";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import Login from "~/pages/Login/index";
import Register from "~/pages/Register/register";
export default function Popup(props) {
  const { openPopup, setOpenPopup, openSignUp, setOpenSignUp } = props;
  return (
    <div>
      <dialog open={openSignUp} className="popup">
        <button
          className="banner_btn"
          onClick={() => {
            setOpenSignUp(false);
          }}>
          <AiOutlineClose />
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
          }}> <AiOutlineClose />
        </button>
        <div className="banner">
          <Login></Login>
        </div>
      </dialog>

      
    </div>
  );
}

