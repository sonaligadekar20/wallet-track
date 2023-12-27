import React, {useState,  useEffect} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem("user") || "{}")
    setUser(storeUser)

  }, [])

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-secondary">
        <div class="container-fluid ">
          <Link to="#" class="navbar-brand fs-4 fw-bolder text-danger"> WALLET <span className='text-primary'>TRACKER</span></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item me-5 fs-5 fw-semibold ">
                <Link to="/" class="nav-link active text-primary" aria-current="page fw-semibold" >Home</Link>
              </li>
              <li class="nav-item me-5 fs-5 fw-semibold">
                <Link to="/addtransaction" class="nav-link text-primary">AddTransaction</Link>
              </li>
              <li class="nav-item me-5 fs-5 fw-semibold">
                <Link to="/mytransaction" class="nav-link text-primary" >MyTransaction</Link>
              </li>
              <li class="nav-item me-5 fs-5 fw-semibold">
                <Link to="/signup" class="nav-link text-primary" >Signup</Link>
              </li>
              <li class="nav-item me-5 fs-5 fw-semibold">
                <Link to="/login" class="nav-link text-primary">Login</Link>
              </li>
              <li  className='text-Dark nav-link fs-5 nav-item fw-semibold text-primary'> 👋 Hello, <span className='text-danger'> {user.name || 'User!'}</span></li>
            </ul>
            {
              user?.name ? (<span className='text-dark me-4 fs-5 logout-link nav-item fw-semibold text-primary' onClick={() => {
                localStorage.removeItem('user')
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