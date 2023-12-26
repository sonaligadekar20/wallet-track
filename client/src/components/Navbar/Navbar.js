import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
  <div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Wallet Track</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to= "/" class="nav-link active" aria-current="page" > Home</Link>
        </li>
        <li class="nav-item">
          <Link to = "/addtransaction" class="nav-link" >AddTransaction</Link>
        </li>
        <li class="nav-item">
          <Link to = "/signup" class="nav-link" >Signup</Link>
        </li>
        <li class="nav-item">
        <Link to = "/login"  class="nav-link " href="#">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
)
}

export default Navbar