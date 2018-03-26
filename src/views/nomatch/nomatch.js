import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => (
  <div>
    <h1>404 - We can't find that page.</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About page</Link>
      </li>
    </ul>
  </div>
);

export default NoMatch;
