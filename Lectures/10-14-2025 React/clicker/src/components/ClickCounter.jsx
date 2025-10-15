import { Button } from "react-bootstrap";
import "./ClickCounter.css";

const ClickCounter = ({ teamName, scoreValue, onScoreChange }) => {
  return (
    <div className="clickCounterContainer">
      <div className="teamName">{teamName}</div>
      <div className="buttonsContainer">
        <Button onClick={() => onScoreChange(teamName, scoreValue + 1)}>
          Increment
        </Button>
        <div className="score">{scoreValue}</div>
        <Button onClick={() => onScoreChange(teamName, scoreValue - 1)}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default ClickCounter;
