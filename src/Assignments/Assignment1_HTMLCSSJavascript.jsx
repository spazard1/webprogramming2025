import Assignment from "./Assignment";

const Assignment1_HTMLCSSJavascript = () => {
  return (
    <Assignment
      title="Html/CSS/Javascript"
      description={
        "For this first assignment, you will be creating a basic HTML page that contains CSS and javascript. It certainly won’t be fancy looking. That’s fine, but it might have superheroes."
      }
      stretchLevels={[
        {
          title: "Basic",
          description: "Complete the assignment with the minimum requirements.",
        },
        {
          title: "Intermediate",
          description: "Add some additional features or styling.",
        },
        {
          title: "Advanced",
          description: "Implement advanced JavaScript functionality.",
        },
      ]}
      maxRuleNumber={5}
      existingRuleNumber={2}
    >
      <div key="1">Introduction to HTML</div>,
      <div key="2">Introduction to CSS</div>,
      <div key="3">Introduction to JavaScript</div>,
    </Assignment>
  );
};

export default Assignment1_HTMLCSSJavascript;

Assignment1_HTMLCSSJavascript.propTypes = {};
