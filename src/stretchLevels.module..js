function registerStretchLevels(messages) {
  if (!Array.isArray(messages)) {
    console.error("registerStretchLevels expects an array of strings.");
    return;
  }

  const colors = [
    "lightblue",
    "lightgreen",
    "lightpink",
    "lightgoldenrodyellow",
    "lavender",
    "peachpuff",
    "lightcoral",
    "lightsalmon",
  ];

  messages.forEach((text, index) => {
    const id = `fixed-corner-div-${index}`;
    if (document.getElementById(id)) return;

    const div = document.createElement("div");
    div.id = id;

    const bgColor = colors[index % colors.length];

    div.style.cssText = `
        position: fixed;
        bottom: ${index * 50 + 10}px;
        font-size: 20px;
        height: 40px;
        right: 0;
        color: black;
        background-color: ${bgColor};
        border: 1px solid #000;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        font-family: sans-serif;
        padding: 5px;
      `;

    div.innerText = text;

    document.body.appendChild(div);
  });
}

function removeStretchLevels() {
  let index = 0;
  while (true) {
    const div = document.getElementById(`fixed-corner-div-${index}`);
    if (!div) break; // Stop when no more found
    div.remove();
    index++;
  }
}

export { registerStretchLevels, removeStretchLevels };

export default registerStretchLevels;
