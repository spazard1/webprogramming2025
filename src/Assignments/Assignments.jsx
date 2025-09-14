import { useParams } from "react-router";

import "./Assignments.css";

import assignments from "./AssignmentsList";

const Assignments = () => {
  let { assignment } = useParams();

  const AssignmentComponent = assignments[assignment].component;

  return (
    <div className="contentContainer">
      <div className="assignmentsContainer">
        {assignments[assignment] && <AssignmentComponent />}
      </div>
    </div>
  );
};

export default Assignments;

Assignments.propTypes = {};
