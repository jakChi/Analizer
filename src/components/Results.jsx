/* eslint-disable react/prop-types */
import { useState } from "react";

const Results = ({picUploaded}) => {
  const [rating, setRating] = useState(null); 
  
  const calculateRating = () => {
    const randomizer = Math.random() * 10;
    const rounded = randomizer.toFixed(1);
    return rounded;
  }

  const handleRating = () => {
    setRating(calculateRating)
  }

  return (
    <div className="results">
      <button onClick={handleRating} className="run-btn">run programme</button>
      <h2>Results of rating</h2>
      <p className="rating">{rating && picUploaded ? rating : 0.0}</p>
    </div>
  );
};

export default Results;
