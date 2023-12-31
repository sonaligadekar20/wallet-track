import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateTransaction.css';
import { useParams } from 'react-router-dom';
import showToast from 'crunchy-toast';
import Navbar from '../../components/Navbar/Navbar.js';


function UpdateTransaction() {
   const [user, setUser] = useState({});
   const [amount, setAmount] = useState('')
   const [type, setType] = useState('')
   const [category, setCategory] = useState('')
   const [description, setDescription] = useState('')

   const {id} = useParams();
   const loadTransactions = async () =>{
      const response = await axios.get(`/api/transaction/${id}`)
      const {amount, type, description, category} = response?.data?.data;
   
      setAmount(amount);
      setType(type);
      setDescription(description);
      setCategory(category);
     }
     useEffect(() => {
      loadTransactions();
    }, []);

   const updateTransaction = async () => {
    
      const response = await axios.put(`/api/transaction/${id}`, {
         user,
         amount,
         type,
         description,
         category
      })

      showToast(response?.data?.message, 'success', 3000);
      
      setAmount('')
      setCategory('')
      setDescription('')
      setType('')

      if (response?.data?.success) {
         window.location.href = "/mytransaction"
      }
   };

   useEffect(() => {
      const storeUser = JSON.parse(localStorage.getItem("user") || "{}");

      if (storeUser?.email) {
         setUser(storeUser);
      } else {
         showToast("You are not logged in!", "danger", 5000);
         window.location.href = "/login";   
      }
   }, 
   []);

   return (
      <div>
         <Navbar />
         <div className='addtransaction-container'>
            <form className='addtransaction-form'>
            <h2 className='text-center mt-2'>Update Transaction</h2>
               <div>
                  <label className='mt-4'>Amount : </label>
                   <input type="string" className="form-control mt-1"
                     placeholder='Enter Amount here ...'
                     value={amount}
                     onChange={(e) => {
                        setAmount(e.target.value)
                     }}
                  />
               </div>

               <div>
                  <label className='mt-2'>Type : </label>
                  <input type="radio"
                     name="amounttype"
                     value="credit"
                     className='ms-3'
                     checked={type === "credit"}
                     onChange={(e) => {
                        if (e.target.checked) {
                           setType(e.target.value)
                        }
                     }}
                  />
                  <label className="type-text ms-2 ">Credit</label>
                      <input
                        type="radio"
                        id="debit"
                        name="amounttype"
                        className="ms-3"
                        value="debit"
                        checked={type === "debit"}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setType(e.target.value);
                          }
                        }}
                      />
                      <label className="type-text ms-2">Debit</label>
               
               </div>

               <div>
                  <label  className='mt-3'>Category</label>
                  <br />
                  <select value={category} onChange={(e) => {
                     setCategory(e.target.value)
                  }} className='mt-2 category-select form-control' >
                     <option disabled >select category here </option>
                     <option value="food">Food</option>
                     <option value="shopping">Shopping</option>
                     <option value="rent">Rent</option>
                     <option value="entertainment">Entertainment</option>
                     <option value="travel">Travel</option>
                     <option value="salary">Salary</option>
                     <option value="other">Other</option>
                  </select>

               </div>
               <div className="mb-3">
                  <label className='fs-5  mt-2'>Description</label>
                  <input type="text" className="form-control mt-1"
                     placeholder="Enter  here .... "
                     value={description}
                     onChange={(e) => { setDescription(e.target.value) }}
                  />

                  <div class="d-grid gap-2">
                     <button className="btn btn-primary text-light fs-5 fw-medium mt-3 "
                        type="button" onClick={updateTransaction}> Update Transacation </button>
                  </div>

               </div>

            </form>

         </div>

      </div>
   )
}

export default UpdateTransaction








