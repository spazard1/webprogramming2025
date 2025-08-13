import PropTypes from "prop-types";
import Rules from "./Rules";

import "./Assignment.css";

const Assignment = ({
  title,
  description,
  children,
  maxRuleNumber,
  existingRuleNumber,
}) => {
  return (
    <div className="assignmentContainer">
      <div className="assignmentTitle">{title}</div>
      <div className="assignmentDescription">{description}</div>
      <div className="assignmentContentContainer">{children}</div>
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
  maxRuleNumber: PropTypes.number.isRequired,
  existingRuleNumber: PropTypes.number.isRequired,
};
