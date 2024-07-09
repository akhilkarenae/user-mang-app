import React, { useEffect, useState } from "react";
import { getAuthenticatedUserData } from "../services/api";
import { Link, useNavigate } from 'react-router-dom';

const Login = () =>{
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();
    console.log("from login")
    
    const fetchUserData = async() => {
        const isAuthenticated = await getAuthenticatedUserData()
        console.log(isAuthenticated," is authenticated")
        setIsAuthorized(true)
    }
    // useEffect(()=>{
    //     fetchUserData()
    // })


    if(isAuthorized){
        navigate(`/`);
    }
    const loginWithGoogle = () =>{
        window.open("http://localhost:8000/auth/google/callback","_self")
    }

    return (
        <>
        <div className="login-page">
            <h1 style={{textAlign:"center"}}>Login</h1>
            <button className="login-width-google-btn" onClick={loginWithGoogle}>Sign in with Google</button>
        </div>
        </>
    )
}

export default Login