import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthProvider } from "~/pages/Login/AuthContext";

const privateRoutes = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {user} = useContext(AuthProvider);

    if(user && !user.auth){
        return <>
            you don't have permission to access this route
        </>
    }

    return(
        <>
            {props.children}
        </>
    )
}
export default privateRoutes;