import React from "react";

const Login = () =>{

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