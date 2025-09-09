import PropTypes from "prop-types";
import Rules from "./Rules";
import { Helmet } from "react-helmet-async";

import "./Assignment.css";

const Assignment = ({
  title,
  description,
  videoLink,
  children,
  maxRuleNumber,
  existingRuleNumber,
  stretchLevelOverview,
  stretchLevels,
}) => {
  return (
    <>
      <Helmet>
        <title>Bethel Web Programming - {title}</title>
      </Helmet>
      <div className="title">{title}</div>

      <div className="assignmentContainer">
        <div className="assignmentDescription">{description}</div>

        {videoLink && (
          <div className="sectionHeader">
            Watch an overview of this assignment at{" "}
            <a href={videoLink} target="_blank">
              {videoLink}
            </a>
            .
          </div>
        )}

        <div className="assignmentContentContainer">{children}</div>
        <Rules
          maxRuleNumber={maxRuleNumber}
          existingRuleNumber={existingRuleNumber}
        />
        <div className="stretchLevelsContainer">
          <div className="sectionHeader">Stretch Levels</div>

          <div className="stretchLevelsOverview">
            {stretchLevelOverview} In order to receive credit for a stretch
            level, you must register it in your assignment. Learn how at the{" "}
            <a href="/stretchLevels">stretch levels</a> page.
          </div>
          {stretchLevels.map((level, index) => (
            <div className="stretchLevel" key={index}>
              <div className="stretchLevelTitle">{level.title}</div>
              <div className="stretchLevelDescription">{level.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Assignment;

Assignment.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  videoLink: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  maxRuleNumber: PropTypes.number.isRequired,
  existingRuleNumber: PropTypes.number.isRequired,
  stretchLevelOverview: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  stretchLevels: PropTypes.arrayOf(PropTypes.object),
};
