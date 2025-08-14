import Assignment from "./Assignment";

const CloudStorage = () => {
  return (
    <Assignment
      title="Cloud Storage"
      maxRuleNumber={9}
      existingRuleNumber={9}
      description={
        <>
          You’re at tribal council, not sure if you can trust everyone who is
          sitting around you. Perhaps some of them really are on your side, or
          perhaps they are about to blindside you. Whatever the outcome, it is
          the people who learn to outwit, outplay, and outlast who will be at
          the final tribal council. In this assignment, you will be using azure
          cloud storage to save table entities and images. Here’s to hoping that
          Jeff does not snuff out your torch.
          <br />
          <br />
          Staying on track with this assignment will set you up for future
          success in this class, since two upcoming assignments will build on
          this one.
        </>
      }
      stretchLevelOverview={`If you already have a lot of experience with azure storage accounts, or if you just won an immunity challenge, try to complete these stretch levels for a reputation bonus.`}
      stretchLevels={[
        {
          title: "Cirie Level",
          description: `Add some CSS to your page to make it look nicer. Background colors, font colors, or anything that looks good.`,
        },
        {
          title: "Rupert Level",
          description: `Add a progress bar to your page that updates as the image is being uploaded.`,
        },
        {
          title: "Boston Rob Level",
          description: `Add a slider to the page that controls image size.`,
        },
      ]}
    >
      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(40 Points) React</div>
        <ol>
          <li>
            imagesContainer: The front end should display a list of images that
            have been uploaded to your Azure blob container. These image
            elements should be created dynamically from the JSON response of
            image entities received from the server.
            <ol className="assignmentSectionSubContent">
              <li>
                Each image should be enforced to have a reasonable max height
                and width and must use the name of the image for the alt
                attribute.
              </li>
              <li>
                Hint: the “img” element causes the browser to make a GET request
                to whatever URL is in the src tag. This can be used to call the
                server endpoint that returns a single image (which will then
                redirect to the image itself in the Azure blob container).
              </li>
            </ol>
          </li>
          <li>
            uploadComplete: The image upload is a three-step process. First, a
            POST request is sent to create the image, then the image is
            uploaded, and finally, an upload complete is sent to the server to
            save that the image has finished uploading. The first two of these
            steps are already done in App.js.
            <ol className="assignmentSectionSubContent">
              <li>
                After the POST request that created the image has been
                completed, send another fetch to save that the image upload is
                complete. Then use the response from the upload complete to
                display the new image on the page.
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (40 Points) ImagesController
        </div>
        <ol>
          <li>
            GetAsync(id): Return a URL to an image that is stored in an Azure
            blob container as a temporary redirect.
            <ol className="assignmentSectionSubContent">
              <li>The redirect should be cached for seven hours.</li>
            </ol>
          </li>
          <li>
            PostAsync: Accept an ImageEntity JSON that allows the client to
            specific the image name to be created. The response JSON should have
            a URL that can be used to upload an image to an Azure blob
            container.
          </li>
          <li>
            UploadCompleteAsync: Accept a string id that is an id of an image
            previously created. Update that image in the database to save that
            the upload has completed (and therefore can be viewed by the
            client).
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

export default CloudStorage;

CloudStorage.propTypes = {};
