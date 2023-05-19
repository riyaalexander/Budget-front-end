import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Show = () => {
  const [resource, setResource] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/resources/${id}`)
      .then((response) => {
        setResource(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleDelete = (event) => {
    event.preventDefault();
    axios
      .delete(`/api/resources/${id}`)
      .then(() => {
        window.location = "/";
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Resource: {resource.title}</h1>
      <p>Description: {resource.description}</p>
      <p>Category: {resource.category}</p>
      <p>Amount: ${resource.amount}</p>
      <Link to={`/resources/${id}/edit`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Show;
