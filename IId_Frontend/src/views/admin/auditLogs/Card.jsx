import React from "react";

export default function Card() {
  return (
    <div className="feature col">
      <div className="d-flex flex-row  justify-content-between">
        <h3 className="m-2 fs-2 text-light">Audit title</h3>
        <span className="badge bg-secondary h-5 mt-2">17-10-2023</span>
      </div>
      <p className="text-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima
        accusantium eum, quidem tempore mollitia dolorum assumenda culpa,
        consequatur inventore similique fuga.
      </p>
    </div>
  );
}
