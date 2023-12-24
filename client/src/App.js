import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"

function App() {
  const [transactions, setTransactions ] = useState([]);
  const [creditSum, setCreditSum] = useState(0);
  const [debitSum, setDebitSum] = useState(0);

  const CATEGORY_EMOJI_MAP ={
    "food": "🍔",
    "entertainment": "🎹",
    "rent": "🏠",
    "shopping":"🛍️",
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

    transactionsData.forEach((transaction)=>{
      
      if(transaction.type==="credit"){
        totalCredit += transaction.amount;
      } else {
        totalDebit += transaction.amount;
      }
    })

    setCreditSum(totalCredit);
    setDebitSum(totalDebit);

    setTransactions(transactionsData);
  };

  useEffect(() => {
    loadTransactions();
  }, [])



  return (
    <div className='App'>
      <h1>All Expense</h1>

      <h2>Credit: {creditSum} </h2>
      <h2>Debit: {debitSum} </h2>
      {
        transactions?.map((transactions, index) => {
          const { _id, amount, type, category, description, createdAt} = transactions;


         

          const date = new Date(createdAt).toLocaleDateString();
          const time = new Date(createdAt).toLocaleTimeString();

          return (<div key={index} className='transaction-card'>
            <span className={`transaction-amount ${type==="debit" ? "debit-amount": "credit-amount"}`}>
            {type==="debit" ? "-": "+"} {" "}
            {amount}
            </span>
            <span>
              {
                type==="debit" ? "debited" : "credited"
              } on {date} at {time}
            </span>
            <span className='transaction-category'>
            {CATEGORY_EMOJI_MAP [category]}
            {category}

            </span>
            <hr/>
            <p>
              {description}    
            </p>
           
          </div>
          )

        })
      }
    </div>
  )
}

export default App