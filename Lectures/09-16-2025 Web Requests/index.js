const parse = () => {
  let errorDiv = document.getElementById("error");
  errorDiv.innerText = "";

  let userInput = document.getElementById("userInput").value;

  try {
    let userInputObject = JSON.parse(userInput);
    if (userInputObject.color) {
      document.getElementById("firstDiv").style.color = userInputObject.color;
    } else {
      errorDiv.innerText = "No color property found";
    }
  } catch {
    errorDiv.innerText = "Invalid JSON";
  }
};

window.onload = function () {
  document.getElementById("parseButton").onclick = parse;
};
