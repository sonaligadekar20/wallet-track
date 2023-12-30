import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./MyTransaction.css";
import { useParams } from 'react-router-dom';
import showToast from 'crunchy-toast';
import Navbar from '../../components/Navbar/Navbar';

function MyTransaction() {
    const [user, setUser] = useState({});
    const [transactions, setTransactions] = useState([]);
    const [creditSum, setCreditSum] = useState(0);
    const [debitSum, setDebitSum] = useState(0);

    const CATEGORY_EMOJI_MAP = {
        "food": "🍔",
        "entertainment": "🎹",
        "rent": "🏠",
        "shopping": "🛍️",
        "travel": "✈️",
        "education": "🏫",
        "salary": "💰",
        "freelancing": "💛 ",
        "side-hussle": "🖇️ ",
        "other": " 👩‍💻"
    }

    const loadTransactions = async () => {
        const response = await axios.get("/api/transactions");
        const transactionsData = response?.data?.data;

        let totalCredit = 0;
        let totalDebit = 0;

        transactionsData.forEach((transaction) => {

            if (transaction.type === "credit") {
                totalCredit += transaction.amount;
            } else {
                totalDebit += transaction.amount;
            }
        })

        setCreditSum(totalCredit);
        setDebitSum(totalDebit);
        setTransactions(transactionsData);
    };
   
      const updateTransaction = async( id )=>{
        window.location.href=`/updatetransaction/${id}`
      }

    const deleteTransaction = async (id) =>{
        const response = await axios.delete(`/api/transaction/${id}`)
        if (response?.data?.success){
            loadTransactions();
        }
        showToast('delete transaction successfully', 'success', 6000);
    };

    // useEffect(() => {
    //     loadTransactions();
    // }, [])

    // showToast(response?.data?.message, 'success', 3000);

    // if (response?.data?.success) {
    //    window.location.href = "/mytransacation"
    // }

 useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (storeUser?.email) {
       setUser(storeUser);
    } else {
       showToast("You are not logged in!", "danger", 5000);
       window.location.href = "/login";
    }  
    loadTransactions ()
 }, []);


    return (
        <div>
            <Navbar />
            <div className='my-transaction'>
                <h2 className='text-center'> My Transaction </h2>

                <h4 className='text-success mt-4'>Credit : {creditSum} </h4>
                <h4 className='text-danger'> Debit : {debitSum} </h4>
                {
                    transactions?.map((transactions, index) => {
                        const { _id, amount, type, category, description, createdAt } = transactions;

                        const date = new Date(createdAt).toLocaleDateString();
                        const time = new Date(createdAt).toLocaleTimeString();

                        return (<div key={index} className='transaction-card'>
                            <span className={`transaction-amount ${type === "debit" ? "debit-amount" : "credit-amount"}`}>
                                {type === "debit" ? "-" : "+"} {" "}
                                {amount}
                            </span>
                            <span className='ms-4'>
                                {
                                 type === "debit" ? "debited" : "credited"
                                } on {date} at {time}
                            </span>
                            <span className='transaction-category'>
                                {CATEGORY_EMOJI_MAP[category]}
                                {category}
                            </span>
                            <hr />
                            <p>
                                {description}
                            </p>
                            <span className='delete-icon' onClick={()=>{
                            deleteTransaction(_id)
                            }}>🗑️</span>

                            <span className='edit-icon' onClick={()=>{
                           updateTransaction(_id)
                            }}>✏️</span>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyTransaction





