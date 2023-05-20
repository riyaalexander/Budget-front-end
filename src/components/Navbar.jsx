import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Budgeteer</div>
      <div className="navbar-links">
        <Link to="/all-transactions">All Transactions</Link>
        <Link to="/budget-form">Budget Form</Link>
        <Link to="/detail-transac">Transactions Details</Link>
        <Link to="/edit-form">Edit Form</Link>
      </div>
    </nav>
  );
};

export default Navbar;
