import React, {useState,  useEffect} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem("userWalletTracker") || "{}")
    setUser(storeUser)

  }, [])

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid ">
          <Link to="#" class="navbar-brand fs-5"> Wallet Tracker</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item ms-5 fs-5 ">
                <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li class="nav-item ms-5 fs-5 ">
                <Link to="/addtransaction" class="nav-link" >AddTransaction</Link>
              </li>
              <li class="nav-item ms-5 fs-5">
                <Link to="/mytransaction" class="nav-link" >MyTransaction</Link>
              </li>
              <li class="nav-item ms-5 fs-5">
                <Link to="/signup" class="nav-link" >Signup</Link>
              </li>
              <li class="nav-item ms-5 fs-5">
                <Link to="/login" class="nav-link ">Login</Link>
              </li>
              <li className='text-light nav-link ms-4 fs-5 nav-item'> 👋 Hello,{user.userName || 'User!'}</li>
            </ul>
            {
              user.userName ? (<span className='text-light ms-3 fs-5 logout-link nav-item' onClick={() => {
                localStorage.removeItem('userWalletTrack')
                window.location.href = '/login'
              }}>Logout</span>) : null
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar