import Assignment from "./Assignment";

const APIVersioning = () => {
  return (
    <Assignment
      title="API Versioning"
      maxRuleNumber={10}
      existingRuleNumber={9}
      videoLink={"https://www.youtube.com/watch?v=qW1ciSCsIEI"}
      description={`It’s time to return to Survivor. Many have had the opportunity to play more than once, and there are some who have played four times. Just like the returning players of Survivor have learned from the mistakes of their first plays, hopefully you have learned from your past assignments. In this revisiting of the cloud storage assignment, you will add a new field to your controller and React, but must also support the existing version from the previous assignment at the same time.`}
      stretchLevelOverview={`If you already have a lot of experience with api versioning, or if you just won Survivor for the second time (only two people have ever done this!), try to complete these stretch levels for a reputation bonus.`}
      stretchLevels={[
        {
          title: "Sandra Level",
          description: `Also support date versions on your controllers. Version 1.0 would map to “2023-11-01” and version 1.1 would map to “2023-11-15”. Specifying the versions as 1.0 and 1.1 must continue to work.`,
        },
        {
          title: "Cochran Level",
          description: `Support the date versions like you did in the Sandra stretch level, but instead of using annotations on the controller, specify the versions in Startup.cs using Conventions. If you do this stretch level, you will automatically also receive credit for the Sandra level, since doing this stretch level replaces that work. Hint: Be careful with your using statements for your controllers at the top of Startup.cs! It will probably be easiest to fully qualify your controller names (i.e. full namespace path) at the place you reference them and skip the using at the top of the file altogether.`,
        },
      ]}
    >
      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(40 Points) React</div>
        <ol>
          <li>Start with the base project from Cloud Storage.</li>
          <li>
            Add two buttons that allow the user to change between version 1.0
            and 1.1. The user should be able to tell which of the buttons is
            currently selected.
          </li>
          <li>
            Javascript: Update your fetch requests to add the api-version query
            parameter. The api-version that is sent should match the version
            displayed on the page. If the description field is available (if
            version 1.1 is currently selected), then also send that field in the
            JSON body to the server when posting new images. Display an error
            message if the description field is not at least 5 characters long
            and then don’t make a request to the server.
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(40 Points) Server</div>
        <ol>
          <li>Start with the base project from Cloud Storage.</li>
          <li>
            Controller: Update your folder structure and namespaces to add a
            second ImagesController. They should be tagged with the api versions
            of 1.0 and 1.1. All new changes will be done to the 1.1 version of
            the controller.
          </li>
          <li>
            Entities: Update your folder structure and namespaces to add a
            second ImageEntity. The new ImageEntity should add a Description
            string that is required and has a minimum length of 5. Hint: Make
            sure each controller is using the correct matching version of
            ImageEntity.
          </li>
          <li>
            ImageModel: Modify ImageModel to also store the description field.
            The conversion methods to and from ImageEntity and ImageModel will
            also need to copy the description field (in the 1.1 version).
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) Code style, formatting, completeness, and quality.
        </div>
      </div>
    </Assignment>
  );
};

export default APIVersioning;

APIVersioning.propTypes = {};
