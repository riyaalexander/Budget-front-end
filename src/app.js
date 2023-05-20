import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import List from './components/List.jsx';
import Show from './components/Show.jsx';
import New from './components/New.jsx';
import Edit from './components/Edit.jsx';
import '.styles.css';
import ViewAll from './components/ViewAll.jsx';

function App() {
  return (
    <Router>
      <div>
      <div className="banner">
        {}
      </div>

        <Route exact path="/" component={List} />
        <Route exact path="/resources/:id" component={Show} />
        <Route exact path="/resources/new" component={New} />
        <Route exact path="/resources/:id/edit" component={Edit} />
      </div>
    </Router>
  );
}

export default App;
