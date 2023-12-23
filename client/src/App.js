import react, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"

function App() {
  const [ transactions, setTransactions ] = useState([]);

  const loadTransactions = async () => {
    const response = await axios.get("/api/transactions");
    const transactionsData = response?.data?.data;
    setTransactions(transactionsData);
  }

  useEffect(() => {
    loadTransactions();
  }, [])



  return (
    <div className='App'>
      <h1>All Expense</h1>
      {
        transactions?.map((transaction, index) => {
          const { _id, amount, type, category, description, createdAt, updatedAt} = transaction;

          const date = new Date(createdAt).toLocaleDateString();
          const time = new Date(createdAt).toLocaleTimeString();

          return (<div key={index} className='transaction-card'>
            <span className={`transaction-amount ${type==='debit' ? "debit-amount": "credit-amount"}`}>
            {type==="debit" ? "-": "+"} {" "}
            {amount}
            </span>
            <span>
              {
                type==="debit" ? "debited" : "credited"
              } on {date} at {time}
            </span>
            <span className='transaction-category'>{category}</span>
            
          </div>)

        })
      }
    </div>
  )
}

export default App