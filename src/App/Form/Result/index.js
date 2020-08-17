import React from "react";
import "./style.css";

export const Result = ({ result }) => (
  <p className="result">
    {result !== undefined && (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
        {" "}
        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
      </>
    )}
  </p>
);

// const Result = () => (
//   <div className="result__container">
//     <p className="result"></p>
//     <p className="result__footer">Wg średnich kursów z dnia 19.06.2020, za: npb.pl</p>
//   </div>
// );