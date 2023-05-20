import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import EditButton from "../components/Edit";
import DeleteButton from "../components/Delete";

const DetailTransac = () => {
  const [transaction, setTransaction] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://localhost:5555/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {transaction ? (
        <>
          <h1>{transaction.item_name}</h1>
          <p>Amount: {transaction.amount}</p>
          <p>Date: {transaction.date}</p>
          <p>From: {transaction.from}</p>
          <p>Category: {transaction.category}</p>
          <Link to={`/budget/${id}/edit`}>
            <EditButton />
          </Link>
          <DeleteButton />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailTransac;
