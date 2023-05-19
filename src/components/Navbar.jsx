import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/">Budgeteer</Link>
        </div>
        <div className="navbar-right">
          <Link to="/new" className="button">Create New Resource</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
