import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const BudgetForm = () => {
  const [length, setLength] = useState([]);
  const [create, setCreate] = useState({
    id: uuidv4(),
    itemName: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/budget`, length)
      .then((response) => {
        setLength(response.data.length);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCreate((previousState) => ({ ...previousState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_API}/budget`, create)
      .then(() => {})
      .catch((error) => console.log(error));
    navigate(`/budget/finance/${length}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Create New</h1>
          <label>Item</label>
          <br />
          <input
            type="text"
            name="itemName"
            id="itemName"
            required
            value={create.itemName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Amount</label>
          <br />
          <input
            type="number"
            name="amount"
            id="amount"
            required
            value={create.amount}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Date</label>
          <br />
          <input
            type="date"
            name="date"
            id="date"
            required
            value={create.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>From</label>
          <br />
          <input
            type="text"
            name="from"
            id="from"
            required
            value={create.from}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Category</label>
          <br />
          <select
            name="category"
            id="category"
            required
            value={create.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
          </select>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default BudgetForm;
