import Assignment from "./Assignment";

const React = () => {
  return (
    <Assignment
      title="React"
      maxRuleNumber={9}
      existingRuleNumber={9}
      videoLink={"https://www.youtube.com/watch?v=R18Drrxoz5w"}
      description={
        <>
          Water. Earth. Fire. Air. <br />
          <br />
          Long ago, the four nations lived together in harmony. Then, everything
          changed when the Fire Nation attacked. Only the Avatar, master of all
          four elements, could stop them, but when the world needed him most, he
          vanished. A hundred years passed and my brother and I discovered the
          new Avatar, an airbender named Aang, and although his airbending
          skills are great, he has a lot to learn before
          {" he's"} ready to save anyone. But I believe Aang can save the world.
          <br />
          <br />
          In this assignment, you’ll be using React to create components
          representing the four nations that will create and destroy rocks that
          represent the battle of the lands. Let’s hope that the fire nation
          does not triumph.
        </>
      }
      stretchLevelOverview={
        <>
          If you already have a lot of experience with React or are an element
          bender, try to complete these stretch levels for a reputation bonus.
        </>
      }
      stretchLevels={[
        {
          title: "Appa Level",
          description: (
            <>
              Add some CSS to your page to make it look nicer. Background
              colors, font colors, or anything that looks good.
            </>
          ),
        },
        {
          title: "Katara Level",
          description: (
            <>
              Instead of having the rocks only render at one of three sizes,
              make them render in at least 100 different sizes. (Hint: you won’t
              be using CSS classes for this.)
            </>
          ),
        },
        {
          title: "Zuko Level",
          description: (
            <>
              Add an onClick event to the Rock component. When a rock is
              clicked, it will change it size, with a smooth transition to the
              new size.
            </>
          ),
        },
      ]}
    >
      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(10 Points) App component</div>
        <ol>
          <li>
            The root App component created by create-react-app will control the
            state of your application. (the rocks themselves, as well as any
            other state you need)
          </li>
          <li>
            Create three div containers, one for the rocks, one for the four
            element components, and one to show the current number of rocks.
            <ol className="assignmentSectionSubContent">
              <li>
                The rocks and element containers should be styled with flex so
                the rocks and element buttons are centered on the screen.
              </li>
              <li>
                The rocks should not overflow the horizontal direction of the
                screen, i.e. they should wrap if there are more than can be
                rendered in a single row.
              </li>
            </ol>
          </li>
          <li>The maximum number of rocks that should be rendered is 1,000.</li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(10 Points) Rock component</div>
        <ol>
          <li>
            Each rock component must render an image or SVG at a random size,
            small, medium, or large.
          </li>
          <li>
            Rock components will not change after they are created, so they
            should be exported using memo.
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (20 Points) Earth component
        </div>
        <ol>
          <li>
            The Earth component will create rocks. It must render three buttons.
            <ol className="assignmentSectionSubContent">
              <li>
                The three buttons should create 1, 2, or 3 rocks respectively.
              </li>
              <li>
                If the number of rocks is already at the maximum, the Earth
                buttons should be disabled.
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">
          (10 Points) Water component
        </div>
        <ol>
          <li>
            The Water component will create rocks. It must render one button.
            <ol className="assignmentSectionSubContent">
              <li>
                The button will double the current number of rocks, but stopping
                at the maximum number of rocks.
              </li>
              <li>
                If there are zero rocks, or the number of rocks is already at
                the maximum, the Water button should be disabled.
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(10 Points) Air component</div>
        <ol>
          <li>
            The Air component will remove rocks. It must render one button.
            <ol className="assignmentSectionSubContent">
              <li>The button will half the current number of rocks.</li>
              <li>
                If there are zero rocks, the Air button should be disabled.
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className="assignmentSectionContainer">
        <div className="assignmentSectionTitle">(20 Points) Fire component</div>
        <ol>
          <li>
            The Fire component will destroy rocks. It must render one button.
            <ol className="assignmentSectionSubContent">
              <li>The button will destroy all of the rocks.</li>
              <li>
                If there are zero rocks, the Fire button should be disabled.
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

export default React;

React.propTypes = {};
