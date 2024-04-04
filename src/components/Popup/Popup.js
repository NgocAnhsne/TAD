import "./style.scss";
import React from "react";
import Login from "~/pages/Login/index";
import Signup from "~/pages/SignUp/Signup";
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
          X
        </button>
        <div className="banner">
          <Signup></Signup>
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
    </div>
  );
}

// import React from 'react'
// import './style.scss'
// export default function Popup(props) {

//   return (props.trigger)?(
//    <div className='popup'>
//     <div className='popup-inline'>
//         <button className='close-btn' onClick={() => props(false)}
//         >Close</button>
//        {props.children}
//         </div>
//         </div>
//   ):"";
// }
