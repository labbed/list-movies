import React from "react";

function Moviecard({ movies }) {
  return (
    <div className="card">
      <img src={movies.pooster} alt="" />
      <div className="card-content">
        <div className="card-content-title">
          <h2>{movies.title}</h2>
          <span style={{ display: "flex" }}>
            {movies.rating}
            {""}
            <img
              style={{ width: "20px" }}
              src="https://www.kindpng.com/picc/m/293-2935131_gold-star-clipart-glitter-gold-glitter-star-png.png"
              alt=""
            ></img>
          </span>
        </div>
        <p>{movies.description}</p>
      </div>
    </div>
  );
}

export default Moviecard;
