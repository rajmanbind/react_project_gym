import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";
const NotFond = () => {
  return (<section>
  <div className="container notfound__container">
    <h2>Page Not Found</h2>
    <Link to="/" className="btn">Go Back</Link>
  </div>

  </section>);
};

export default NotFond;
