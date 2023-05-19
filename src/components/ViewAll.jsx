import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewAll = () => {
  const [finances, setFinances] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/budget`)
      .then((response) => {
        setFinances(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>View All Finances</h1>
      {finances.map((finance) => (
        <div key={finance.id}>
          <h2>Item: {finance.itemName}</h2>
          <p>Finance: ${finance.amount.toLocaleString()}</p>
          <p>Date: {finance.date}</p>
          <p>Finance: {finance.from}</p>
          <p>Category: {finance.category}</p>
          <Link to={`/budget/finance/${finance.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ViewAll;
