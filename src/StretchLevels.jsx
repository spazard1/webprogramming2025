import "./StretchLevels.css";

//import "https://raw.githubusercontent.com/spazard1/webprogramming2025/refs/heads/main/src/stretchLevels.js";

const StretchLevels = () => {
  return (
    <div>
      <div>
        All assignments offer stretch levels for an additional challenge.
        Completing these stretch levels gives you a reputation bonus.
      </div>
      <div>
        In order to receive credit for a stretch level, you must register it in
        your assignment. To do that, add the stretch level javascript into your
        main page, and then call the function on page load.
      </div>

      <div>
        Include a link to this javascript file (this will go in your index.html
        or root page, whatever that happens to be called.):
        <pre>&lt;script src="/stretchLevels.js"&gt;&lt;/script&gt;</pre>
      </div>
    </div>
  );
};

export default StretchLevels;
