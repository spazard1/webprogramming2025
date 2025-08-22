import Assignment from "./Assignment";

const WebRequests = () => {
  return (
    <Assignment
      title="Web Requests"
      description={
        'We have arrived at the next assignment. In this assignment, you will be making several different web requests to a server using javascript. The server endpoint you will be using is "https://bethelwebrequestsserver.azurewebsites.net/api/favoritecharacters/". You do not need to write any server-side code for this assignment. All references to the server in this assignment are already written for you and deployed to Azure at the above endpoint URL. Your requirement is only the client-side javascript. The force will be with you, always.'
      }
      maxRuleNumber={3}
      existingRuleNumber={3}
      stretchLevelOverview={
        "If you already have a lot of experience with javascript web requests or feel that the force is with you, try to complete these stretch levels for a reputation bonus."
      }
      stretchLevels={[
        {
          title: "Qui-gon Jinn Level",
          description:
            "Add some CSS to your page to make it look nicer. Background colors, font colors, or anything that looks good.",
        },
        {
          title: "Obi-wan Kenobi Level",
          description:
            'Add a fourth button to your HTML page, "Force Delete." Send a DELETE to the endpoint /favoriteCharacters/{index} with a random index. Again, it should check first to make sure the index exists. Since DELETE requests return no content, after you perform the delete, query the entire list again, and display it. Also display the index that you deleted.',
        },
        {
          title: "Luke Skywalker Level",
          description:
            'You will need to complete Obi-wan Kenobi level first. Change "Force Delete" so that if "Force Read" is used directly before it, it will delete the index that "Force Read" returned. If "Force Read" was not just used, then just delete a random index as normal.',
        },
      ]}
    >
      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (40 Points) Favorite Characters
        </div>
        <ol className="assignmentSectionContent">
          <li>
            HTML: Create an HTML web page that contains a form. The form should
            contain three fields; first name, last name, and favorite Star Wars
            character. There must also be three buttons at the bottom with the
            values “Force Pull,” “Force Push,” and “Force Read.”
          </li>
          <li>
            Force Pull: The button “Force Pull” will GET the data from the
            server endpoint and then display the resulting response text. The
            response will contain the entire list of data stored on the server.
          </li>
          <li>
            Force Push: The button “Force Push” will POST the data in the form
            to the server endpoint and then display the resulting response text.
            The data you post will be added to the server’s database. The
            response will contain the data you just posted. The JSON you send to
            the server must have the fields FirstName, LastName, and
            FavoriteCharacter.
          </li>
          <li>
            Force Read: The button “Force Read” will GET the data from the
            server endpoint /favoriteCharacters/&#123;index&#125;. The
            &#123;index&#125; will be a random index from the list on the
            server.
            <ol className="assignmentSectionSubContent">
              <li>
                In addition to the data that came back from the server, also
                display on the page the random index that was chosen.
              </li>
              <li>
                Hint: To get a random index, first make a normal GET request
                like you did for Force Pull, then use the length of the result
                to get a random index. Then immediately make a second request to
                /favoriteCharacters/&#123;index&#125;. (Don’t display any
                results from the Force Pull used to get the length of the data).
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(40 Points) Views</div>
        <ol className="assignmentSectionContent">
          <li>
            HTML: Create a second form on the page with a text box labeled “View
            Date” and two buttons labeled “Force Insight” and “Watch Movies.”
          </li>
          <li>
            Force Insight: The button “Force Insight” will load the views data
            for the last character that was “Force Read.” The endpoint used is
            /favoriteCharacters/&#123;index&#125;/views
          </li>
          <li>
            Watch Movies: The button “Watch Movies” will POST the data from the
            views form to the endpoint
            /favoriteCharacters/&#123;index&#125;/views. The JSON you send to
            the server must have the field ViewDate.
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) Code style, formatting, completeness, and quality
        </div>
        <ol className="assignmentSectionContent">
          <li>
            Keep in mind that other classmates of yours are using the server
            endpoints at the same time you are. Because of this, you might see
            some of their data returned to you too.
          </li>
          <li>
            The server’s database will only store 30 entries at a time. It will
            automatically empty the list if the number of entries gets too high.
          </li>
        </ol>
      </div>
    </Assignment>
  );
};

export default WebRequests;

WebRequests.propTypes = {};
