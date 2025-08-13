import PropTypes from "prop-types";
import Rules from "./Rules";

import "./Assignment.css";

const Assignment = ({
  title,
  description,
  children,
  stretchLevels,
  maxRuleNumber,
  existingRuleNumber,
}) => {
  return (
    <div className="assignmentContainer">
      <div className="assignmentTitle">{title}</div>
      <div className="assignmentDescription">{description}</div>
      <div className="assignmentSections">{children}</div>
      <div className="assignmentStretchLevels">
        {stretchLevels.map((stretchLevel, index) => (
          <div key={index} className="stretchLevel">
            <div className="stretchLevelTitle">{stretchLevel.title}</div>
            <div className="stretchLevelDescription">
              {stretchLevel.description}
            </div>
          </div>
        ))}
      </div>
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  stretchLevels: PropTypes.arrayOf(PropTypes.object),
  maxRuleNumber: PropTypes.number.isRequired,
  existingRuleNumber: PropTypes.number.isRequired,
};
