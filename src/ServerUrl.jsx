let serverUrl = "https://server.webprogrammingthequest.net/";

if (window.location.host.indexOf("localhost") >= 0) {
  serverUrl = "https://localhost:44333/";
}

export default serverUrl;
