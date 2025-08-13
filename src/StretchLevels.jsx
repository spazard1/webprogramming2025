import { useEffect } from "react";
import "./StretchLevels.css";

import { registerStretchLevels, removeStretchLevels } from "https://spazard1.github.io/webprogramming2025/src/stretchLevels.module.js";

const exampleHtmlImport = `
    <script type="module">
      import { registerStretchLevels } from "https://spazard1.github.io/webprogramming2025/src/stretchLevels.module.js";

      window.onload = () => {
        registerStretchLevels([
          "Purple Lightsaber Level",
          "Green Lightsaber Level",
          "Blue Lightsaber Level"
        ]);
      };
    </script>`;

const exampleReactImport = `
    import React, { useEffect } from 'react';
    import { registerStretchLevels } from '"https://spazard1.github.io/webprogramming2025/src/stretchLevels.module.js";

    export default SomeComponent = () => {
      useEffect(() => {
        registerStretchLevels([
          "Hawkeye level",
          "Iron Man level"
        ]);
      }, []);

      return <div>Your component content here</div>;
    }`;

const StretchLevels = () => {

  useEffect(() => {
    // Register stretch levels with example messages
    registerStretchLevels([
      "I’m in the corner!",
      "Second div up!",
      "Third one here!",
      "Fourth in line!",
      "Fifth div",
    ]);
    
    return () => {
      // Cleanup stretch levels on component unmount
      removeStretchLevels();
    };
  }, []);

  return (
    <div>
      <div>
        All assignments offer stretch levels for an additional challenge.
        Completing these stretch levels gives you a reputation bonus.
      </div>
      <div>
        In order to receive credit for a stretch level, you must register it in
        your assignment. Here is how you can do that for HTML or React pages.
      </div>

      <div className="stretchLevelsExample">
        HTML:
        <pre>{exampleHtmlImport}</pre>
      </div>

      <div className="stretchLevelsExample">
        React components:
        <pre>{exampleReactImport}</pre>
      </div>
    </div>
  );
};

export default StretchLevels;
