import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const List = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios
      .get('/api/resources')
      .then((response) => {
        setResources(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderResources = () => {
    return resources.map((resource) => {
      return (
        <tr key={resource.id}>
          <td>{resource.id}</td>
          <td>{resource.name}</td>
          <td>{resource.category}</td>
          <td>
            <Link to={`/show/${resource.id}`} className="btn btn-primary">
              Show
            </Link>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1>Resources</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderResources()}</tbody>
      </table>
      <Link to="/new" className="btn btn-primary">
        New Resource
      </Link>
    </div>
  );
};

export default List;
