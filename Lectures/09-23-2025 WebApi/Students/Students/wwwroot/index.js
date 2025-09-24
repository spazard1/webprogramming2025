const serverUrl = "https://localhost:7191/api";

const simpleResponse = (responseJson) => {
  document.getElementById("results").innerHTML = JSON.stringify(responseJson);
};

const runGet = () => {
  fetch(serverUrl + "/students")
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      simpleResponse(responseJson);
    });
};

const runPost = () => {
  fetch(serverUrl + "/students", {
    method: "POST",
    body: JSON.stringify({
        firstName: document.getElementById("firstNameValue").value,
        lastName: document.getElementById("lastNameValue").value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      simpleResponse(responseJson);
    });
};

const runDelete = () => {
  fetch(serverUrl + "/values/" + document.getElementById("userIndex").value, {
    method: "DELETE",
  });
};

const runPut = () => {
  fetch(serverUrl + "/students/" + document.getElementById("userIndex").value, {
    method: "PUT",
    body: JSON.stringify({
        firstName: document.getElementById("firstNameValue").value,
        lastName: document.getElementById("lastNameValue").value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      simpleResponse(responseJson);
    });
};

window.onload = function () {
  document.getElementById("getButton").onclick = runGet;
  document.getElementById("postButton").onclick = runPost;
  document.getElementById("deleteButton").onclick = runDelete;
  document.getElementById("putButton").onclick = runPut;
};
