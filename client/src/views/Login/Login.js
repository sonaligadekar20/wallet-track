import React,{useEffect, useState} from 'react';
import axios  from 'axios';
import {Link} from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import "./Login.css";
import showToast from "crunchy-toast";

function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async()=>{
        if(!email){
            alert("Email is required");
            return;
        }
        const response = await axios.post("/api/login",{
            email : email,
            password: password
        })

        showToast(response.data.message, "success", 3000);

        if(response?.data?.success){
            localStorage.setItem("user", JSON.stringify(response?.data?.data))
            window.location.href = "/";
        }
    }

    useEffect(()=>{
        const storageUser = JSON.parse(localStorage.getItem("user") || '{}');

        if(storageUser?.email){
            showToast("You are already logged in!", "danger", 5000);
            window.location.href = "/";
        }
    },[])
    
    return(
        <div>
            <Navbar/>

            <div>
               
                <form className='login-form'>
                <h2 className='text-center'>Login Form</h2>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    placeholder="Enter your email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) =>{
                       setEmail(e.target.value);
                    }}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    placeholder="Enter password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) =>{
                       setPassword(e.target.value);
                    }}/>
                </div>

                <button type="button" className='login-btn' onClick={login}>Login</button>

                <p  className='text-right'>
                <Link to="/signup">Create a new account?</Link>
                </p>
  
            </form>
                </div>
            </div>
          
    )
}

export default Login