import { useState } from "react";
import { Button } from "react-bootstrap";
import "./ClickCounter.css";

const ClickCounter = ({ teamName, startingScore }) => {
  const [scoreValue, setScoreValue] = useState(startingScore ?? 0);

  return (
    <div className="clickCounterContainer">
      <div className="teamName">{teamName}</div>
      <div className="buttonsContainer">
        <Button onClick={() => setScoreValue(scoreValue + 1)}>Increment</Button>
        <div className="score">{scoreValue}</div>
        <Button onClick={() => setScoreValue(scoreValue - 1)}>Decrement</Button>
      </div>
    </div>
  );
};

export default ClickCounter;
