import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Signup.css';
import {Link} from "react-router-dom";
import showToast from "crunchy-toast";
import Navbar from './../../components/Navbar/Navbar.js';


function Signup() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [mobile, setMobile] = useState('');
   const [address, setAddress] = useState('');
   const [gender, setGender] = useState('female');

   const signup = async ()=>{
       if(!name){
         showToast("name is required", "alert", 4000);
           return;
       }

       if(!email){
         showToast("email is required", "alert", 4000);
           return;
       }

       if(!password){
         showToast("password is required", "alert", 4000);
           return;
       }
       if(!mobile){
         showToast("mobile number is required", "alert", 4000);
           return;
       }
       if(!address){
         showToast("address is required", "alert", 4000);
           return;
       }
       const response = await axios.post("/api/signup",{
           name:name,
           email:email,
           password:password,
           mobile: mobile,
           address:address,
           gender:gender
       })
       
       alert(response?.data?.message);
       if(response?.data?.success){
           window.location.href = "/login";
       }
   };

   useEffect(()=>{
       const storageUser = JSON.parse(localStorage.getItem("user") || '{}');

       if(storageUser?.email){
           alert("You are already logged in!");
           window.location.href = "/";
       }
   },[])


   return (
      <div>
         <Navbar/>
         <form className='signup-form'>
            <h2 class='text-center'> Signup Form</h2>

            <div>
               <label htmlFor="name"> Name </label>
               <input type="text"
                  placeholder="Enter your name"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => {
                  setName(e.target.value);
                  }} />
            </div>
            <div>
               <label htmlFor="email">Email</label>
               <input type="email"
                  placeholder="Enter your email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                     setEmail(e.target.value);
                  }} />
            </div>
            <div>
               <label htmlFor="password">Password</label>
               <input type="password"
                  placeholder="Enter password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => {
                     setPassword(e.target.value);
                  }} />
            </div>
            <div>
               <label htmlFor="mobile">Mobile</label>
               <input type="text"
                  placeholder="Enter your mobile"
                  id="mobile"
                  className="form-control"
                  value={mobile}
                  onChange={(e) => {
                     setMobile(e.target.value);
                  }} />
            </div>
            <div>
               <label htmlFor="address">Address</label>
               <input type="text"
                  placeholder="Enter your address"
                  id="address"
                  className="form-control"
                  value={address}
                  onChange={(e) => {
                     setAddress(e.target.value);
                  }} />
            </div>
            <div>
               <input type="radio"
                  id="male"
                  name="gender"
                  className='gender'
                  checked={gender === "male"}
                  onClick={() => {
                     setGender("male")
                  }}
               />
               <label htmlFor="male" className='me-4'>male</label>
               <input type="radio"
                  id="female"
                  name="gender"
                  className='gender'
                  checked={gender === "female"}
                  onClick={() => {
                     setGender("female")
                  }}
               />
               <label htmlFor="female" >Female</label>
            </div>

            <button type="button" className="signup-btn" onClick={signup}>Signup</button>

            <p className="text-right">
               <Link to="/login">Already have an account?</Link>
            </p>

         </form>

      </div>
   )
}
export default Signup
