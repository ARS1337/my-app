import React from "react";
import { Link } from "react-router-dom";

export default function Test() {
  return (
    <div>
      {" "}
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Invoice">Invoices</Link> |{" "}
        <Link to="/Expenses">Expenses</Link>
      </nav>
    </div>
  );
}
