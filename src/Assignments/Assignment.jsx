import PropTypes from "prop-types";
import Rules from "./Rules";

import "./Assignment.css";

const Assignment = ({
  title,
  description,
  sections,
  stretchLevels,
  maxRuleNumber,
  existingRuleNumber,
}) => {
  return (
    <div className="assignmentContainer">
      <div className="assignmentTitle">{title}</div>
      <div className="assignmentDescription">{description}</div>
      <div className="assignmentSections">{sections}</div>
      <div className="assignmentStretchLevels">{stretchLevels}</div>
      <Rules
        maxRuleNumber={maxRuleNumber}
        existingRuleNumber={existingRuleNumber}
      />
    </div>
  );
};

export default Assignment;

Assignment.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.string),
  stretchLevels: PropTypes.arrayOf(PropTypes.string),
  maxRuleNumber: PropTypes.number.isRequired,
  existingRuleNumber: PropTypes.number.isRequired,
};
