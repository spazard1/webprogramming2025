import Assignment from "./Assignment";

const IfMatch = () => {
  return (
    <Assignment
      title="If-Match"
      maxRuleNumber={9}
      existingRuleNumber={9}
      description={
        <>
          One thousand years ago, superstition and the sword ruled. It was a
          time of darkness; it was a world of fear. It was the age of Gargoyles.
          (
          <a href="https://www.youtube.com/watch?v=ygrEVnrg3Ic" target="_blank">
            https://www.youtube.com/watch?v=ygrEVnrg3Ic
          </a>
          ) In this assignment, you’ll be ensuring that updates to your
          gargoyles don’t overwrite each other, since perhaps more than one
          person would be writing to your server at the same time. Maybe David
          Xanatos is using your controller...he never was too fond of the
          gargoyles. This assignment will have one WebApi project with a
          GargoyleController and an html page with javascript that will make
          requests to the controller. The javascript must keep track of a
          current ETag with GET requests so it can use PATCH with If-Match.
        </>
      }
      stretchLevelOverview={`If you already have a lot of experience with optimistic concurrency control, or if you just turn to stone during the day, try to complete these stretch levels for a reputation bonus.`}
      stretchLevels={[
        {
          title: "Hudson Level",
          description: `Add some CSS to your page to make it look nicer. Background colors, font colors, or anything that looks good.`,
        },
        {
          title: "Lexington Level",
          description: `Add another button to your html page that sends a PATCH request with “*” as your If-Match header value, forcing the update to be accepted.`,
        },
        {
          title: "Goliath Level",
          description: `Implement If-None-Match in GET requests to your server. This means that if the ETag matches on a GET request, the server will return an empty body with a 304-Not Modified status code. When this is the response from your server, ensure that your html page also displays that the data has not been modified since the last GET request.`,
        },
      ]}
    >
      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(10 Points) GargoyleModel</div>
        <ol>
          <li>Create a class that represents a gargoyle, GargoyleModel.</li>
          <li>
            All gargoyles have four string properties; Name, Color, Size, and
            Gender. These properties should have a length of at least three if
            they are specified, but only Name is required. Gargoyles also have
            an “Updated” property that is of type DateTime which has a value of
            when the gargoyle was last updated.
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) GargoyleDatabase
        </div>
        <ol>
          <li>
            Create a GargoyleDatabase that maintains a list of gargoyles
            currently in the system. The Name of the gargoyle is the “key” of
            the database, so there must never be two gargoyles in the database
            with the same name. (Hint: Dictionary instead of List)
          </li>
          <li>
            It will need methods that allow the creation and lookup of
            GargoyleModels.
          </li>
          <li>
            It should be initialized with at least two values when the server
            starts.
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (30 Points) GargoyleController
        </div>
        <ol>
          <li>
            GargoyleController must support five endpoints. GET (all gargoyles),
            GET (a specific gargoyle by Name), POST, PUT, and PATCH
          </li>
          <li>
            GET / return all gargoyles currently on the server. This endpoint
            will not send any ETags.
          </li>
          <li>
            GET /[name] (a specific gargoyle by name) must set an ETag header
            representing the gargoyle in some way. GET should use the gargoyle’s
            Name as the URL parameter.
          </li>
          <li>
            POST / must not allow two gargoyles with the same name to be in the
            system at the same time. If a second gargoyle is attempted to be
            created and it already exists in the database, return the
            appropriate error status code (Hint: There is a better status code
            to use than just the generic BadRequest).
          </li>
          <li>
            PUT /[name] must replace a gargoyle already in the database that has
            the same name or create it if it doesn’t exist. PUT should validate
            that the gargoyle name that is being added/replaced matches the URL
            name parameter. It also must verify that the If-Match header of the
            request either is a wild card “*”, or matches the ETag value of the
            gargoyle to be replaced.
          </li>
          <li>
            PATCH requests must verify that the If-Match header of the request
            either is a wild card “*”, or matches the ETag value of the gargoyle
            to be edited. Return appropriate status codes if the If-Match header
            value is not a value that allows an update.
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) Html and Javascript
        </div>
        <ol>
          <li>
            Create an html page that can make requests to the server. It should
            have buttons for GET all, GET, POST, PUT, and PATCH. It should also
            have input fields for the four text properties of a gargoyle.
          </li>
          <li>
            The html page should display the current ETag (after making any GET
            request for a specific gargoyle).
          </li>
          <li>
            The html page must show error messages and status codes when
            requests fail (such as not having the correct If-Match header
            values)
          </li>
          <li>
            PATCH must only send the text fields that are non-empty. This means
            your JSON structure that you are sending to the server will change
            depending on which text fields have values on your html page.
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

export default IfMatch;

IfMatch.propTypes = {};
