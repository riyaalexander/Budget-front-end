import { useNavigate } from "react-router-dom";
import React from 'react';

const Edit = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/budget/edit');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default Edit;
