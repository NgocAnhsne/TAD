import React from 'react';

// Re use button :
// import "banner_button"


const banner_button = ({type,variant,className,id,onClick,children}) => {
  return (
    <button
      type={type ? type : "button"}
      variant={variant}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}  
      onClick={onClick}
    >
          {children}
        </button>
  );
}

export default banner_button;
