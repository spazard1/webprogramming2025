import Assignment from "./Assignment";

const HTMLCSSJavascript = () => {
  return (
    <Assignment
      title="HTML/CSS/Javascript"
      description={
        "For this first assignment, you will be creating a basic HTML page that contains CSS and javascript. It certainly won’t be fancy looking. That’s fine, but it might have superheroes."
      }
      maxRuleNumber={3}
      existingRuleNumber={0}
      stretchLevelOverview={
        "If you already have a lot of experience with HTML and CSS or you just like superheroes as much as me, try to complete these stretch levels for a reputation bonus."
      }
      stretchLevels={[
        {
          title: "Hawkeye Level",
          description:
            "Make the background of the page two colors instead of one. The left half one color and the right half a different color. The block of text from step 1 should still cover the full page from left to right. No using background images for this either. Do it with block elements.",
        },
        {
          title: "Iron Man Level",
          description:
            "Add a button in the lower right corner that moves the color dividing line from Hawkeye level to a random position. I.e. it starts at a 50% split, but each time you click it the % split will change, perhaps to 10%, 30%, or even 85%. Random numbers!",
        },
        {
          title: "Thor Level",
          description:
            "In Iron Man level you made the vertical split be randomly changeable. Now made the transition happen smoothly over 1 second Don’t forget, no external libraries. Also, no javascript loops allowed! Use CSS.",
        },
      ]}
    >
      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(20 Points) HTML and CSS</div>
        <ol className="assignmentSectionContent">
          <li>
            Your page should contain a big block of text. It is easiest to just
            copy and paste it from somewhere. I like superheroes. It could be
            something about superheroes.
          </li>
          <li>
            The web page should have some background color of your choice, and a
            font of a different color. It would be neat if the colors
            corresponded to the superhero text (if you did the superhero text
            that is, otherwise whatever colors that look good to you)
          </li>
        </ol>
      </div>
      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(20 Points) div tags</div>
        <ol className="assignmentSectionContent">
          <li>
            Your page must have at least three different div tags, all different
            colors.
            <ol className="assignmentSectionSubContent">
              <li>
                The first should be positioned so that it doesn’t move when the
                page scrolls.
              </li>
              <li>
                The second should be positioned on top of the text. Neither
                should be too big though; I want to read about superheroes.
              </li>
              <li>
                The last can be whatever and wherever you want, but put a
                picture inside it.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(10 Points) External Link</div>
        <ol className="assignmentSectionContent">
          <li>
            Somewhere in the text, add a link to some website that relates to
            the text in some way, perhaps to a trailer for a good movie about
            superheroes?
          </li>
        </ol>
      </div>
      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(30 Points) Javascript</div>
        <ol className="assignmentSectionContent">
          <li>
            Add a textarea and a button to the page. Clicking this button will
            parse the text in the textarea as JSON.
          </li>
          <li>
            If the text isn’t valid JSON, display an error on the page.
            (remember rule 2)
          </li>
          <li>
            If the JSON contains the following keys, use the values to change
            things about the page. (remember these are case-sensitive)
            <ol className="assignmentSectionSubContent">
              <li>
                color: Set the color of the text of the page to this value.
              </li>
              <li>
                backgroundColor: Set the background color of the page to this
                value.
              </li>
              <li>
                link: This value will be an object with two keys, href and
                displayText. Use href to change the link destination from your
                external link (step 3 of the assignment) and displayText to
                change the displayed text for your external link.
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </Assignment>
  );
};

export default HTMLCSSJavascript;

HTMLCSSJavascript.propTypes = {};
