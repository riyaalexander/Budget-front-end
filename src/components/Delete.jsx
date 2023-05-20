import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import React from "react";

const Delete = () => {
  const { index } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");

    if (confirmDelete) {
      axios
        .delete(`$https://localhost:5555/budget/${index}`)
        .then(() => {
          
        })
        .catch((error) => console.log(error));
      
      navigate("src/pages/AllTransactions");
    }
  };

  return (
    <div>
      <form onSubmit={handleDelete}>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Delete;
