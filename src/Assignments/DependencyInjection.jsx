import Assignment from "./Assignment";

const DependencyInjection = () => {
  return (
    <Assignment
      title="Dependency Injection"
      maxRuleNumber={8}
      existingRuleNumber={7}
      description={
        <>
          Your next assignment is full of dependencies and hobbits. Frodo and
          Sam are dependent on Aragorn and the humans distracting Sauron. Gondor
          is dependent on help from Rohan. You are dependent on the code from
          GitHub found at{" "}
          <a
            href="https://github.com/spazard1/WebProgramming2025/"
            target="_blank"
          >
            https://github.com/spazard1/WebProgramming2025/
          </a>{" "}
          in the Assignments/DependencyInjection folder. This is a project that
          has four services that need to be updated to use dependency injection.
          The wwwroot folder of the project contains some helper HTML and
          JavaScript to test your server code.
        </>
      }
      stretchLevelOverview={
        <>
          If you already have a lot of experience with dependency injection, or
          if you just want to go hunt some orc, try to complete these stretch
          levels for a reputation bonus.
        </>
      }
      stretchLevels={[
        {
          title: "Gandalf Level",
          description:
            "Add some CSS to your page to make it look nicer. Background colors, font colors, or anything that looks good.",
        },
        {
          title: "Legolas Level",
          description:
            "ConsoleLogger (ILogger) shouldn’t be logging requests directly in the controller. Create a new filter or middleware that logs the request path, query, and method, then remove all ILogger references from HobbitController.",
        },
        {
          title: "Aragorn Level",
          description:
            "Update StopWatchFilter to also add the total request time in a different header called ‘totaltime.’ Be sure this header is usable by the browser. (Hint: CORS!)",
        },
      ]}
    >
      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(20 Points) MemoryDatabase</div>
        <div className="assignmentSectionContent">
          <ol>
            <li>
              HobbitController keeps track of a list of hobbits in a database.
              However, it is currently coupled with MemoryDatabase. Update the
              controller so that it receives an instance of an IDatabase in the
              constructor.
            </li>
            <li>
              Create an IDatabase interface based on the MemoryDatabase class.
            </li>
            <li>
              There should only ever be one instance of MemoryDatabase created
              for the lifetime of the application.
            </li>
            <li>
              Don’t create an instance of MemoryDatabase yourself. Let it be
              created for you by the framework.
            </li>
          </ol>
        </div>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(20 Points) ConsoleLogger</div>
        <div className="assignmentSectionContent">
          <ol>
            <li>
              ConsoleLogger is a singleton class. It creates its own instance
              that is then used everywhere else in the application to write
              debug messages.
            </li>
            <li>
              Create an ILogger interface based on the ConsoleLogger class.
            </li>
            <li>
              Update all references to ConsoleLogger to depend on and use
              ILogger instead.
            </li>
            <li>
              There should only ever be one instance of ConsoleLogger created
              for the lifetime of the application.
            </li>
            <li>
              The only change you should make to ConsoleLogger is to implement
              an interface.
            </li>
          </ol>
        </div>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) RequestIdGenerator
        </div>
        <div className="assignmentSectionContent">
          <ol>
            <li>
              Create an IRequestIdGenerator interface based on the
              RequestIdGenerator class.
            </li>
            <li>
              A new IRequestIdGenerator instance should be created once per
              request.
            </li>
            <li>
              RequestIdFilter is supposed to add a unique request-id header to
              each response. However, currently it only is using the static
              string “local-id.” Update the RequestIdFilter so it depends on an
              IRequestIdGenerator and uses it to add a real request id to the
              request-id header.
            </li>
          </ol>
        </div>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) StopWatchService
        </div>
        <div className="assignmentSectionContent">
          <ol>
            <li>
              StopwatchFilter tracks the amount of time each step of the request
              is taking. It then outputs the result into a response header.
            </li>
            <li>
              Update all references to StopWatchService so that during a request
              all references share the same instance.
            </li>
            <li>
              You do not need to create an interface for StopWatchService. You
              may use it directly.
            </li>
          </ol>
        </div>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) Code style, formatting, completeness, and quality
        </div>
        <div className="assignmentSectionContent">
          <ol>
            <li>
              Running all the tests on the index.html page will help a lot in
              making sure your updates are working correctly. The tests are not
              exhaustive to all possible scenarios. Make sure to double check
              your work even if all the tests are passing.
            </li>
            <li>
              ConsoleLogger doesn’t have any tests in the provided HTML or
              JavaScript. You’ll have to ensure this is working on your own.
            </li>
          </ol>
        </div>
      </div>
    </Assignment>
  );
};

export default DependencyInjection;

DependencyInjection.propTypes = {};
