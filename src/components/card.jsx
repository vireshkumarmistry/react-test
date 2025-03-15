import React from "react";

export default function Card({ title, id }) {
  const handleNavigation = () => {};

  return (
    <div className="card" onClick={handleNavigation}>
      <div className="card-content">
        <h3>POST ID: {id}</h3>
        <h4>{title}</h4>
      </div>
    </div>
  );
}
