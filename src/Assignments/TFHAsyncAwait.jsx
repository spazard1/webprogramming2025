import Assignment from "./Assignment";

const TFHAsyncAwait = () => {
  return (
    <Assignment
      title="TFH, async, await"
      maxRuleNumber={9}
      existingRuleNumber={8}
      videoLink={"https://www.youtube.com/watch?v=PohJqq00xeo"}
      description={
        <>
          Grab a star and run like crazy. This assignment is full of koopas,
          goombas, and pirana plants. In this assignment you’ll be creating a
          controller that is dependent on another service. There is a problem
          though. This service doesn’t allow more than one request per second.
          That is certainly going to be annoying.
        </>
      }
      stretchLevelOverview={
        <>
          If you already have a lot of experience with transient fault handling
          or just really want to rescue the princess, try to complete these
          stretch levels for a reputation bonus.
        </>
      }
      stretchLevels={[
        {
          title: "Toad House Level",
          description: (
            <>
              Retry polices work best when they add some “fuzziness” to the time
              between requests so that multiple retry policies don’t make all
              their requests in sync. Change the function that returns the
              TimeSpan delay between requests to add some randomness. It should
              still follow an exponential increase in time, but instead of the
              time being 200, 400, 800, etc., it would look like (as an example,
              there are plenty of good ranges or random numbers to choose) 100 –
              300, 300 – 500, 700 – 900, etc.
            </>
          ),
        },
        {
          title: "Luigi’s Mansion Level",
          description: (
            <>
              Make Mario smoothly transition whenever he moves instead of
              instantly moving to the new location. Use CSS to do this, not
              javascript. Then use CSS (and the javascript toggleClass method)
              to make Mario jump upwards on the screen whenever that action is
              selected. Hint: Use setTimeout to toggle the class back off again
              to end the jump after a short duration.
            </>
          ),
        },
        {
          title: "Bowser’s Castle Level",
          description: (
            <>
              The external service returns a NextStep in addition to a message.
              Modify your MarioService and MarioLevelController to pass NextStep
              as part of your JSON response (this will be in addition to the
              Message field). Then instead of randomly choosing the next action
              Mario will take, use the value from NextStep.
            </>
          ),
        },
      ]}
    >
      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (40 Points) Html and Javascript
        </div>
        <ol>
          <li>
            Create an html page with javascript that looks like a level from a
            Mario game. Some ideas of things you can add are a background with
            sky and ground, a flag pole, clouds, blocks, and anything else that
            looks great. The main thing to make sure you have is an image of
            Mario on the left side of the screen.
          </li>
          <li>
            Add a button to the HTML page that begins the level.{" "}
            <ol className="assignmentSectionSubContent">
              <li>
                The button should not be active while the level is in progress.
              </li>
            </ol>
          </li>
          <li>
            When the level begins, start by making a request to your
            MarioLevelController with a random value selected from the four
            actions. (walk, jump, wait, or run) If the server returns a
            successful response, then move Mario towards the right side based on
            the action that was selected.
            <ol className="assignmentSectionSubContent">
              <li>
                The amount to move Mario for each action type is Walk: 5%, Jump:
                5%, Wait: 0%, Run: 10%, where these are percentages of the
                screen. The jump does not need to have any animations so it will
                look the same on the screen as “Walk.”
              </li>
              <li>
                After the request is successful, then make another request with
                another random action (walk, jump, wait, or run). Keep on making
                these requests until Mario reaches the right hand side of the
                screen or the server returns that Mario has died.
              </li>
              <li>
                Each time you make a request to the server, also display the
                message that comes back in the response.
              </li>
              <li>
                Hint: The URL that you will use to make requests to your server
                from your javascript will look like /api/mariolevel/{"{move}"},
                where {"{move}"} is the random action that your javascript
                selects. (This is not the same as the url for the external
                service.)
              </li>
              <li>
                Hint: Your javascript code will not be making any requests to
                the external server. It will only be communicating with the
                server you create, so the URL it will be using will start with
                “https://localhost”.
              </li>
              <li>
                Hint: If you put the Mario image inside of a div tag, then you
                can use javascript to change the “left” CSS attribute of that
                div tag to move it. Div tags can only be moved with the “left”
                attribute if you set the “position” attribute also.
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) MarioLevelController
        </div>
        <ol>
          <li>
            Create a controller with a single method which will accept GET
            requests and one string URL parameter. Hint: You can use HttpGet[“
            {"{move}"}”] and a string parameter “move” in your method to get the
            value that your javascript is sending.
          </li>
          <li>
            Validate that the URL parameter sent to MarioLevelController is one
            of the four valid actions, “walk”, “jump”, “wait”, or “run.”
          </li>
          <li>
            MarioLevelController needs to return a MoveEntity (as a JsonResult)
            which contains only a single string field “message.” This message
            will come from a method you create in a class you create called
            MarioService. If the MarioService throws an exception (either from
            running out of its RetryPolicy or the external server returned a
            500, then MarioLevelController should catch the exception and then
            return a message indicating that Mario died. This would still be a
            200-OK response, since you are hiding the external failure.
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) MarioService and IMarioService
        </div>
        <ol>
          <li>
            Create a class called MarioService and create an interface
            IMarioService that it implements.
          </li>
          <li>
            MarioService (and IMarioService) needs a single method that will
            make a request to an external server. This method takes one string
            parameter, called “move”, which is the value that was sent to your
            controller as a URL parameter.
            <ol className="assignmentSectionSubContent">
              <li>
                The URL to use for the request is
                https://bethelwebprogrammingmario.azurewebsites.net/api/mario/
                {"{move}"}.
              </li>
              <li>
                The request must be wrapped in a Retry Policy with a maximum of
                10 retries. Your policy should wait progressively longer with
                each retry.
              </li>
              <li>
                The external request has three possible responses:
                <ol>
                  <li>
                    200 – OK: A JSON document with Message and NextStep keys.
                    Message is a friendly string of what happened to Mario. The
                    method can return this string so that it can be sent as a
                    JSON response. NextStep is only used if you are doing the
                    Luigi’s mansion stretch level.
                  </li>
                  <li>
                    503 – Service Unavailable: The server can’t process the
                    request because another request was processed too recently.
                    This is a transient failure and should be retried.
                  </li>
                  <li>
                    500 – Internal Server Error: Mario died. Any request to the
                    external server has a small chance for this response. This
                    is NOT a transient failure. If this is encountered, your
                    MarioService method should let the exception go to the
                    controller immediately without retrying.
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            The IMarioService/MarioService should not expose any fields or
            methods that would imply that it is making requests to a server to
            perform its work.
          </li>
          <li>
            Use dependency injection to give an instance of this service to your
            controller. The controller should use the IMarioService interface,
            not the MarioService class directly.
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) Code style, formatting, completeness, and quality.
        </div>
        <ol>
          <li>
            The javascript code should never be exposed to any errors from the
            external service, nor should it have any knowledge that the external
            service is being used by MarioLevelController.
          </li>
        </ol>
      </div>
    </Assignment>
  );
};

export default TFHAsyncAwait;

TFHAsyncAwait.propTypes = {};
