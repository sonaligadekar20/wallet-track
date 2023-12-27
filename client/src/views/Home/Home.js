import React from 'react';
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.js';
import WalletPng from './images/wallet-tracker.png';


function Home() {
    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center mt-4">
                <div >
                    <img src={WalletPng} className="me-5 h-96 ms-0 "
                        style={{ filter: "drop-shadow(9px 8px 4px #a2d9fb)" }}
                    />
                </div>
                <div className=" mt-5 me-5">
                    <h1 className='mt-4'>Welcome to the <span className="text-danger">Wallet</span> <span className='text-primary '>Tracker !</span></h1>
                    <div className="mt-4 fs-5 me-5">
                        <p>A wallet tracker is a tool or application designed to help individuals manage and keep track of their financial transactions, expenses, and overall budget. </p>

                        <p>These trackers are typically digital platforms, either in the form of mobile apps or web applications, that provide users with a convenient way to monitor their spending, income, and savings.</p>

                        <p>A wallet tracker serves as a valuable tool for personal finance management, empowering individuals to make informed decisions about their money and work towards achieving their financial goals.</p>     
                    </div>

                    <button className='btn btn-danger'>Start Here ➡️</button>
                </div>


            </div>

        </div>
    )
}

export default Home