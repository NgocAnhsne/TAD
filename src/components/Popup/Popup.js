import './style.scss'
import React from 'react'

export default function Popup(props) {

  const {openPopup,setOpenPopup} = props;
  return(      
    <div open={openPopup}>
      <div className='popup'>asdadadsada</div>
    </div>
  )
 
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
