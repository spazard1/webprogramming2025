import { useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import copy from "copy-to-clipboard";

import {
  registerStretchLevels,
  removeStretchLevels,
} from "https://spazard1.github.io/webprogramming2025/src/stretchLevels.module.js";

import "./StretchLevels.css";

const exampleHtmlImport = `
    <script type="module">
      import { registerStretchLevels } from "https://spazard1.github.io/webprogramming2025/src/stretchLevels.module.js";

      window.addEventListener("load", () => {
        registerStretchLevels([
          "Purple Lightsaber Level",
          "Green Lightsaber Level",
          "Blue Lightsaber Level"
        ]);
      });
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

  const copyText = useCallback((textToCopy, copiedMessageId) => {
    copy(textToCopy);
    const copiedMessage = document.getElementById(copiedMessageId);
    if (copiedMessage) {
      copiedMessage.classList.add("visible");
      setTimeout(() => {
        copiedMessage.classList.remove("visible");
      }, 3000);
    }
  }, []);

  return (
    <div className="contentContainer">
      <div className="stretchLevelsContainer">
        <div className="title">Stretch Levels</div>

        <div>
          All assignments offer two or more stretch levels for an additional
          challenge and a reputation bonus.
        </div>
        <div>
          In order to receive credit for a stretch level, you must register it
          on the main page of your assignment. You can use the code below to do
          that for HTML or React pages.
        </div>

        <div className="stretchLevelsExample">
          HTML:{" "}
          <span className="copyToClipboardIcon" title="Copy to clipboard">
            <FontAwesomeIcon
              icon={faCopy}
              onClick={() => copyText(exampleHtmlImport, "htmlCopiedMessage")}
            />
            <span className="copiedMessage" id="htmlCopiedMessage">
              Copied to clipboard
            </span>
          </span>
          <pre>{exampleHtmlImport}</pre>
        </div>

        <div className="stretchLevelsExample">
          React components:{" "}
          <span className="copyToClipboardIcon" title="Copy to clipboard">
            <FontAwesomeIcon
              icon={faCopy}
              onClick={() => copyText(exampleReactImport, "reactCopiedMessage")}
            />
            <span className="copiedMessage" id="reactCopiedMessage">
              Copied to clipboard
            </span>
          </span>
          <pre>{exampleReactImport}</pre>
        </div>
      </div>
    </div>
  );
};

export default StretchLevels;
