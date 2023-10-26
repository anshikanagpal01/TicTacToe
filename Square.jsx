import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "2px solid",
        height: "100px",
        width: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      className={`square ${props.value === "X" ? "blue" : props.value === "O" ? "green" : ""}`}
    >
      <h3>{props.value}</h3>
    </div>
  );
};

export default Square;
