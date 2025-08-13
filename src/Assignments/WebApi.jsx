import Assignment from "./Assignment";

const WebApi = () => {
  return (
    <Assignment
      title="WebApi"
      description={`In this assignment, we will be returning to Star Wars. “I think my eyes are getting better. Instead of a big dark blur, I’m seeing a big bright blur.” In the web requests assignment, you wrote javascript that communicated with a server that was hosted on Azure. In this assignment, you’ll be recreating that server. You’ll be able to use your previous assignment code to test your new server. Also, the server from that assignment is still deployed to Azure at "https://webrequestsserverbethel.azurewebsites.net/api/favoritecharacters" so you can verify if your server is acting in the same way. Your server will be tracking a list of people and their favorite Star Wars characters. Your server does not need to persist any data, so it is okay if data is lost when your server is stopped.`}
      maxRuleNumber={7}
      existingRuleNumber={3}
      stretchLevelOverview={
        <>
          If you already have some experience with WebApi, or if you aren’t
          frozen in carbonite, try to complete these stretch levels for a
          reputation bonus.
        </>
      }
      stretchLevels={[
        {
          title: "Purple Lightsaber Level",
          description:
            "Instead of using StatusCode or StatusCodeResult, use ContentResult to also return a helpful message about what was wrong with the request.",
        },
        {
          title: "Green Lightsaber Level",
          description:
            "Add a new endpoint for retrieving a specific view from an entry. Be careful that you are still returning well-formatted JSON! Also, watch your error messages here so that it is clear which index is out of range (either the view or the favorite character).",
        },
        {
          title: "Blue Lightsaber Level",
          description:
            "Add a PATCH method to your controller that changes the FirstName, LastName, or FavoriteCharacter only if they are not null and not empty strings in the request body. PATCH was not a part of assignment two, so you will need to write some new javascript or use a tool like Swagger to test your new method. Hint: You will need a new entity class with different annotations. Second Hint (we’ve had one yes, what about SECOND hint?): PATCH requests edit a particular entry in the list, so it would be easiest to use the index chosen by Force Read as the index that you should PATCH.",
        },
      ]}
    >
      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(20 Points) POST</div>
        <ol className="assignmentSectionContent">
          <li>
            Accept JSON data for FirstName, LastName, and FavoriteCharacter and
            save it on the server. The CreatedTime should be saved in the model,
            but the value should not be changeable by the client.
          </li>
          <li>
            Validate that FirstName and Character are sent in the JSON and have
            length of at least 1 using entity annotations.
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(10 Points) GET</div>
        <ol className="assignmentSectionContent">
          <li>
            Return a JSON object of all the entries currently stored on the
            server.
            <ol className="assignmentSectionSubContent">
              <li>
                The returned object should have a single key
                “favoriteCharacters” which is an array of all the favorite
                character entities on the server.
              </li>
              <li>
                The “views” key should be set for each entry in your response
                JSON equal to the number of views that entry has so far (as an
                int).
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (10 Points) GET/&#123;index&#125;
        </div>
        <ol className="assignmentSectionContent">
          <li>
            Return a JSON object containing the name, favorite character, and
            created time data for the specified index.
            <ol className="assignmentSectionSubContent">
              <li>
                The “views” key should be set for this entry in your response
                JSON equal to the number of views this entry has so far (as an
                int).
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (10 Points) DELETE /&#123;index&#125;
        </div>
        <ol className="assignmentSectionContent">
          <li>Delete the entry at the index from the server.</li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (10 Points) GET /&#123;index&#125;/views
        </div>
        <ol className="assignmentSectionContent">
          <li>
            Return a JSON object of views for a particular entry stored on the
            server.
            <ol className="assignmentSectionSubContent">
              <li>
                The returned object should have a single key “viewDates” which
                is an array of all the view date entities on the server.
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) POST /&#123;index&#125;/views
        </div>
        <ol className="assignmentSectionContent">
          <li>
            Accept JSON data for a view date. It only has a single key/value
            pair, “ViewDate.” The value for this “ViewDate” key will be a
            string.
          </li>
          <li>
            Validate that ViewDate is sent in the JSON and has a length of at
            least 1 using entity annotations.
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) Code style, formatting, completeness, and quality
        </div>
        <ol className="assignmentSectionContent">
          <li>
            Be careful with the names of your controller and the names of the
            entity properties. They must match the names written here so that
            the code from your previous assignment works with this server. Make
            sure to have “api” in the Route for your controller and that it is
            named correctly.
          </li>
          <li>
            All indices should be validated to make sure the entry exists. If it
            does not, return an appropriate status code.
          </li>
          <li>
            The list of entries should begin with one entry, and the size of the
            list should be capped at 30. During a POST request to create a new
            entry, clear the list first if it has too many entries.
          </li>
          <li>Remember that POST requests should return the created data.</li>
        </ol>
      </div>
    </Assignment>
  );
};

export default WebApi;

WebApi.propTypes = {};
