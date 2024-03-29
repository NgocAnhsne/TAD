import React, { useEffect } from "react";
import NotFoundImage from "~/components/asset/img/NotFound.jpeg";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found";
  });

  return (
    <>
      <div className="notfound text-center">
        <Link to={`/`}>
          <img src={NotFoundImage} alt="page not found" style={{marginTop:'150px', objectFit:`cover`,height:'50vh' }} />
        </Link>
      </div>
    </>
  );
};

export default NotFound;
