// /orders and /neworder are protected routes
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const {isLoggedIn} = useSelector((store) => store.isLoggedIn)
    if(!isLoggedIn){
        return <Navigate to='/login' replace={true}/>
    }    
    return children
};
