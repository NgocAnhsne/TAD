import { useState } from "react";
import "./style.scss";
import logo from "~/components/asset/img/logo.jpg";
import Popup from "~/components/Popup/Popup";
import Button from "~/components/Button/banner_button"
function Header() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  
  return (
    <header class="top_navigation">
      {/* Popup for Login */}
      <Popup openSignUp={openSignUp} setOpenSignUp={setOpenSignUp}></Popup>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}></Popup>
      {/* <!-- header container --> */}
      <div class="header_container">
        {/* <!-- wrapper logo --> */}
        <div class="header_logo">
          <img src={logo} alt="logo_header" />
          <div class="header_logo-title">Folk Learn</div>
        </div>
        {/* <!-- wrapper button --> */}
        <div class="header_btn-wrapper">
          <button
            class="header_btn header_login-btn"
            onClick={() => setOpenPopup(true)}>
            Đăng nhập
          </button>
          <button
            class="header_btn header_signup-btn"
            onClick={() => setOpenSignUp(true)}>
            Đăng ký
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
