import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import React from "react"

const AllTransactions = () => {
    const [allTransactions, setAllTransactions] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/budget`)
        .then((response) => setAllTransactions(response.data))
    }, [])

    return (
        <div>
            <h1>All Transactions</h1> 
            {allTransactions.map((transaction, index) => (
                <div key={index}>
                    <Link to={`/budget/transaction/${index}`}>
                        <h2>Item: {transaction.itemName}</h2>
                    </Link>
                    <p>Amount: ${transaction.amount.toLocaleString()}</p>
                    <p>Date: {transaction.date}</p>
                    <p>From: {transaction.from}</p>
                    <p>Category: {transaction.category}</p>
                </div>
            ))}
        </div>
    )
}

export default AllTransactions;
