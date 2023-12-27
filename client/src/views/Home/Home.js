import React from 'react';
import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import WalletPng from './images/wallet-tracker.png';


function Home(){
    return(
        <div>
            <Navbar/>
           <div className='d-flex mx-5  mt-4 '>
           <div >
                <img src ={WalletPng} className='img-wallet'
                //  style={{ filter: "drop-shadow(9px 4px 8px #4b1b1b)" }}
                 />  
            </div>
            <div  ><p className='heading'>WALLET TRACKER</p></div>

           </div>
           
        </div>
    )
}

export default Home