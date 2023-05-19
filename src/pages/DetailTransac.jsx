import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import EditButton from "../components/Edit";
import DeleteButton from "../components/Delete";

const DetailTransac = () => {
  const [transaction, setTransaction] = useState({});
  const { index } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/budget/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => console.log(error));
  }, [index]);

  return (
    <div>
      {transaction ? (
        <>
          <h1>{transaction.itemName}</h1>
          <p>Amount: {transaction.amount}</p>
          <p>Date: {transaction.date}</p>
          <p>From: {transaction.from}</p>
          <p>Category: {transaction.category}</p>
          <Link to={`/budget/${index}/edit`}>
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
