import { useParams } from "react-router";
import HTMLCSSJavascript from "./HTMLCSSJavascript";

import "./Assignments.css";

const assignments = {
  HTMLCSSJavascript: () => <HTMLCSSJavascript />,
};
const Assignments = () => {
  let { assignment } = useParams();

  const AssignmentComponent = assignments[assignment];

  return (
    <div className="assignmentsContainer">
      {assignments[assignment] && <AssignmentComponent />}
    </div>
  );
};

export default Assignments;

Assignments.propTypes = {};
