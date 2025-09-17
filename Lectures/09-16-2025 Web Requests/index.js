/*
  REST

  REpresentational State Transfer

  1. Convention over Configuration
  2. Stateless

  CRUD
  Create, Read, Update, Delete

  HTTP Verbs == HTTP Methods

  GET - Reading data from the server
  POST - Create data on the server, server will response with the data that was created
  DELETE - Remove data from the server, returns 204 - NoContent
  PUT - Replace (or create) data on the server at a specific location
  PATCH (MERGE) - Update data (merge it with the existing data) 

  How we talk to the server:
  1. Body/Payload - often text such as JSON, but could be images, videos, etc.
  2. Headers - metadata
    Content-Type: type of the body in the request
    Content-Length: the size of the body, in bytes
    User-Agent: the web browser that you are using
    Accept: Ask the server to return a certain type
    Authorization: The user's login token
  3. URL
    path, query string

  How the server talks to us:
  1. Status Code
  2. Body
  3. Headers
    Location: used by redirect requests, this is where you should go
    Date: date/time of the request/response
    Content-Type: type of the body of the response
    Content-Length: length in bytes of the response


  Status Codes

  XYY - X is the type, Y is the version of that status code

  100

  200 - OK, "the request worked"
    201 - Created, usually from a POST
    202 - Accepted, work is not done yet, but I heard you
    204 - NoContent, literally empty body (Content-Length is 0)

  300 - Redirect "the content is somewhere else"
    301 - Moved Permanently
    307 - Temporary Redirect

  400 - BadRequest, "It's YOUR fault"
    401 - Unauthorized, "you haven't logged in yet"
    403 - Forbidden "you are logged in, but you don't have that permission"
    404 - NotFound, what you are looking for is not at this URL
    429 - Too Many Requests, "you need to slow down"

  500 - InternalServerError - "It's MY fault (the server's fault)"
    Likely the server threw an exception that was uncaught

    503 - Service Unavailable "the server is too busy right now"



*/
const serverUrl = "https://simpleserverbethel.azurewebsites.net";

const simpleResponse = (responseJson) => {
  document.getElementById("results").innerHTML = JSON.stringify(responseJson);
};

const runGet = () => {
  fetch(serverUrl + "/values")
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      simpleResponse(responseJson);
    });
};

const runPost = () => {
  fetch(serverUrl + "/values", {
    method: "POST",
    body: JSON.stringify({
      value: document.getElementById("userValue").value,
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
  fetch(serverUrl + "/values/" + document.getElementById("userIndex").value, {
    method: "PUT",
    body: JSON.stringify({
      value: document.getElementById("userValue").value,
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
