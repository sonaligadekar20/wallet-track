import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './views/Home/Home.js';
import AddTransaction from './views/AddTransaction/AddTransaction.js';
import MyTransaction from './views/MyTransaction/MyTransaction.js';
import Login from './views/Login/Login.js';
import Signup from './views/Signup/Signup.js';


const router = createBrowserRouter([{
  path: '/',
  element:<Home/>
  },
  {
    path: '/addtransaction',
    element: <AddTransaction/>
  },
  {
    path: '/mytransaction',
    element: <MyTransaction/>
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

