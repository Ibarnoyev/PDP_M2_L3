import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="container py-1">
        <Link to={"/dashboard"}>Dashboard</Link>
      <p className="h1 text-center display-1">Welcome to shopily</p>
      <p>Lorem ipsum</p>
    </div>
  );
}
