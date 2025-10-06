import PropTypes from "prop-types";

import "./Rules.css";

const rules = [
  "No inline styles or inline javascript. Event handlers (e.g. onClick) that call named functions are okay.",
  "Error messages must be “in-page” i.e. no pop-ups or alerts.",
  "Any resources not created by you (images, javascript libraries, etc.) must be referenced using a CDN or URL, not directly included in your assignment submission. " +
    "In addition, do not include any build output folders in your submission. Examples include node_modules, debug, release, bin, and obj.",
  "All requests that submit a body to your server must have their entities validated with appropriate annotations, such as MinLength, Range, or Required.",
  "The main page of your of your application must either be served from the server root path or use a client app in the same directory that can be started locally with npm.",
  "Service/data/model classes must not have any http, request, or response references.",
  "Controller entity classes must not be used directly to store data on the server; translate them into a model (data storage) class before saving the data. Conversely, controllers must not send any model classes to the user; translate them into controller entity classes before sending the response.",
  "All service class instances must be obtained using dependency injection.",
  "You may not use any synchronous methods in your C# code wherever there is an async option.",
  "All controllers (and their corresponding entities) must enforce the usage of an api version. Your namespace and folder structure for controllers and entities must contain the api version.",
];

const Rules = ({ maxRuleNumber, existingRuleNumber }) => {
  return (
    <div className="rulesContainer">
      <div className="sectionHeader">The Rules</div>

      {rules
        .filter((_, index) => maxRuleNumber >= index + 1)
        .map((text, index) => (
          <div className="ruleItem" key={index}>
            <div className="ruleContainer">
              {index + 1}.{" "}
              {existingRuleNumber < index + 1 && (
                <span className="newRuleContainer">(New)</span>
              )}
              {text}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Rules;

Rules.propTypes = {
  maxRuleNumber: PropTypes.number.isRequired,
  existingRuleNumber: PropTypes.number.isRequired,
};
