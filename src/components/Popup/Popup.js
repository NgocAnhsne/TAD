import React from 'react'
import './style.scss'
function Popup(props) {
  return (props.trigger)?(
    <div className='popup'>
         <div className='popup-inline'>  
            <button className='close-btn' onClick={() => props.S}>Close</button>{props.children}
             </div> 
      </div> 
  ): "";
}

export default Popup

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
