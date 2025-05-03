import { useContext, useEffect } from "react"
import { DataContext } from "../context"
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () =>{
    const {token} = useContext(DataContext);
    useEffect(()=>{
        if((!token) || (token == undefined) || token == null){
            navigate('/login');
        }
    },{token});
    
    const navigate = useNavigate();
    if((!token) || (token == undefined) || token == null){
        navigate('/login');
        return;
    }
    return <Outlet />
}

export default ProtectedRoutes;