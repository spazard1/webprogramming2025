import Assignment from "./Assignment";

const JWT = () => {
  return (
    <Assignment
      title="JWT"
      maxRuleNumber={10}
      existingRuleNumber={10}
      description={`You are approaching another test chamber. Cake and grief counseling will be available at the conclusion of the assignment. There is a good chance that the cake is a lie. In this assignment you will be using JWT to validate requests against a server. Most of the JWT generation and validation code is provided for you. Your job is to use it in your controllers, filters, and javascript.

This assignment will have one WebApi project with two controllers and an html page with javascript that will make requests to the controllers. The javascript must keep track of a current JWT that can be sent along with requests to the server.`}
      stretchLevelOverview={`If you already have a lot of experience with JWT and authorization, or if you just want to use momentum to your advantage to reach high ledges, try to complete these stretch levels for a reputation bonus.`}
      stretchLevels={[
        {
          title: "Glados Level",
          description: `Add some CSS to your page to make it look nicer. Background colors, font colors, or anything that looks good.`,
        },
        {
          title: "Wheatley Level",
          description: `Modify your server to use a constant public and private key (Hint: from an xml string) so that if your server is restarted, your token in local storage will continue to be valid (until it expires).`,
        },
        {
          title: "Companion Cube Level",
          description: `Update SecurityProvider to support validation of another issuer, “www.tokensareneat.com”. When tokens are created, randomly choose which issuer is saved in the token. Make sure both issuers validate correctly when they are in tokens. Do the same thing with audience but use “www.ilovetokens.com” for the second audience.`,
        },
      ]}
    >
      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (10 Points) UserDatabase/UserModel
        </div>
        <ol>
          <li>
            Create a model class to store individual users and a database to
            store list of users. Users should be stored with two strings:
            username and password.
          </li>
          <li>
            The database should be initialized with a few usernames and
            passwords. One of those users must be the username “glados” with the
            password “cake”.
          </li>
          <li>
            UserDatabase should have a method for checking if a user exists in
            the database as well as a method to validate a user’s password.
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) LoginController
        </div>
        <ol>
          <li>
            Create a controller that will allow a user to login. It should
            accept POST requests with a username and password sent as JSON.
          </li>
          <li>
            The LoginController should check if the username and password
            combination being requested exists in the database.
            <ol className="assignmentSectionSubContent">
              <li>
                If the user doesn’t exist or their password doesn’t match,
                return appropriate status codes.
              </li>
              <li>
                If the user does exist, use ISecurityProvider (found on the
                class github) to generate and return a token to the user in a
                JSON document with a single key, named “token”. The token should
                be generated with a single claim, “username” with a value equal
                to the username sent to the server.
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (10 Points) GladosController
        </div>
        <ol>
          <li>
            Create a controller that has a single GET method which returns a
            random quote from Glados.
            <ol className="assignmentSectionSubContent">
              <li>
                There should be at least five quotes. Hint: Don’t do too much
                work in the controller here. Use a service.
              </li>
            </ol>
          </li>
          <li>
            Requests to GladosController should only succeed if there is a valid
            token sent in the request in the appropriate header and format.
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) AuthorizationFIlter
        </div>
        <ol>
          <li>
            Create a filter that will validate tokens sent in the Authorization
            header. Verify the header is in the correct format and use
            ISecurityProvider to validate the token. Stop the request and return
            the appropriate status code if the token is not validated.
          </li>
          <li>This filter should only be applied to the GladosController.</li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) Html and Javascript
        </div>
        <ol>
          <li>
            Create an html page that can make requests to the server. It should
            have buttons for Login, Logout, and Quote. It should also have
            appropriate input fields for username and password.
            <ol className="assignmentSectionSubContent">
              <li>
                Login should send username and password to the LoginController.
                On a successful response, it should store the token in the
                browser’s local storage. Hint: local storage is not the same
                thing as a javascript variable. Local storage is persisted even
                if the browser is closed and reopened.
              </li>
              <li>
                Quote should request a quote from GladosController. Since
                GladosController is protected with AuthorizationFilter, you will
                need to send along the token in the Authorization header.
              </li>
              <li>
                Logout should delete the stored token out of the local storage.
              </li>
            </ol>
          </li>
          <li>
            The html page should display if the user is currently logged in.
          </li>
          <li>
            The html page must show error messages and status codes when
            requests fail (such as not having a correct token)
          </li>
          <li>Store the user’s login token using local storage.</li>
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

export default JWT;

JWT.propTypes = {};
