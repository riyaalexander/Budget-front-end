import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import List from './src/components/List';
import Show from './src/components/Show';
import New from './src/components/New';
import Edit from 'src/components/Edit.jsx';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resources/new">Create New</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={List} />
        <Route exact path="/resources/:id" component={Show} />
        <Route exact path="/resources/new" component={New} />
        <Route exact path="/resources/:id/edit" component={Edit} />
      </div>
    </Router>
  );
}

export default App;
