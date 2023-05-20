import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EditForm from './pages/EditForm';
import DetailTransaction from './pages/DetailTransac';
import BudgetForm from './pages/BudgetForm';
import AllTransactions from './pages/AllTransactions';

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/edit" element={<EditForm />} />
      <Route path="/detail/:id" element={<DetailTransaction />} />
      <Route path="/budget" element={<BudgetForm />} />
      <Route path="/transactions" element={<AllTransactions />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
