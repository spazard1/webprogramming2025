import Assignment from "./Assignment";

const ResponsiveDesign = () => {
  return (
    <Assignment
      title="Responsive Design"
      maxRuleNumber={10}
      existingRuleNumber={10}
      videoLink={"https://www.youtube.com/watch?v=aXSP7fHwhqE"}
      description={`Your third Survivor season is about to begin. (The show Survivor has been on for almost 50 seasons; and yes, I’ve seen them all.) In this assignment you will finish your development of the Cloud Storage and Api Versioning project by making it compatible with mobile and responsive design. That means supporting different screen sizes and making elements behave as the user would expect when actions on the page are loading.`}
      stretchLevelOverview={`If you already have a lot of experience with mobile development, or if you just played Survivor for the third time, try to complete these stretch levels for a reputation bonus.`}
      stretchLevels={[
        {
          title: "Parvati Level",
          description: `Add a confirmation modal to the page when the user clicks Purge to confirm if they want to purge the images or not. This modal should block all other input on the page and have two options, “Cancel” and “Purge.” Hint: Remember rule 2, this should not be using anything with javascript alert. This modal should not pause any other javascript running on the page.`,
        },
        {
          title: "Tony Level",
          description: `Preserve the api-version that the user has selected “1.0” or “1.1” so that if the page is refreshed, it uses whatever version was last used on that computer. Hint: it doesn’t need to be preserved across different computers; use the local storage of the web browser.) If you have done the image size from the previous stretch levels, preserve that value too for an additional bonus.`,
        },
      ]}
    >
      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (40 Points) CSS Media Query
        </div>
        <ol>
          <li>
            Start with your completed project, API Versioning and Cloud Storage.
          </li>
          <li>
            Add a media query to your CSS that will activate when the screen
            width is 1000px or less.
          </li>
          <li>
            All elements of the page must flow correctly at the new screen size.
            <ol className="assignmentSectionSubContent">
              <li>
                Use your browser to control the screen size, or use the device
                size toolbar in the developer console to target specific device
                sizes.
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(40 Points) Loading States</div>
        <ol>
          <li>
            Update all of the buttons (and sliders if you did previous
            assignment stretch levels) so that anytime the page is loading, they
            are disabled from input.
            <ol className="assignmentSectionSubContent">
              <li>
                This includes all form of loading, initial page load of the
                images, as well as when an image is being uploaded.
              </li>
              <li>
                Buttons should update their text to display loading messages
                while they are disabled.
              </li>
              <li>
                Ensure that the buttons return to normal when either the upload
                has completed or there was an error.
              </li>
            </ol>
          </li>
          <li>
            During upload of the images, display a toast message that indicates
            the current step or progress of the image upload.
            <ol className="assignmentSectionSubContent">
              <li>
                There are three distinct steps to have a message for here;
                creating the image on the server, uploading to Azure (this could
                have a progress bar if you did previous assignment stretch
                levels), and finally calling upload complete on the image.
              </li>
            </ol>
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

export default ResponsiveDesign;

ResponsiveDesign.propTypes = {};
