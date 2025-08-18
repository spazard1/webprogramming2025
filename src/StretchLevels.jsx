import { useEffect } from "react";
import "./StretchLevels.css";

import {
  registerStretchLevels,
  removeStretchLevels,
} from "https://spazard1.github.io/webprogramming2025/src/stretchLevels.module.js";

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
    import { registerStretchLevels } from "https://spazard1.github.io/webprogramming2025/src/stretchLevels.module.js";

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
    registerStretchLevels([
      "will look like.",
      "registered stretch levels",
      "This is what",
    ]);

    return () => {
      removeStretchLevels();
    };
  }, []);

  return (
    <div>
      <div className="title">Stretch Levels</div>

      <div>
        All assignments offer two or more stretch levels for an additional
        challenge and a reputation bonus.
      </div>
      <div>
        In order to receive credit for a stretch level, you must register it on
        the main page of your assignment. You can use the code below to do that
        for HTML or React pages.
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
