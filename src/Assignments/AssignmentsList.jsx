import HTMLCSSJavascript from "./HTMLCSSJavascript";
import WebRequests from "./WebRequests";
import WebApi from "./WebApi";
import DependencyInjection from "./DependencyInjection";
import TFHAsyncAwait from "./TFHAsyncAwait";
import React from "./React";
import Queues from "./Queues";
import CloudStorage from "./CloudStorage";
import IfMatch from "./IfMatch";
import APIVersioning from "./APIVersioning";
import JWT from "./JWT";
import ResponsiveDesign from "./ResponsiveDesign";

const assignments = {
  HTMLCSSJavascript: {
    title: "HTML, CSS, and JavaScript",
    component: () => <HTMLCSSJavascript />,
  },
  WebRequests: {
    title: "Web Requests",
    component: () => <WebRequests />,
  },
  WebApi: {
    title: "Web API",
    component: () => <WebApi />,
  },
  DependencyInjection: {
    title: "Dependency Injection",
    component: () => <DependencyInjection />,
  },
  TFHAsyncAwait: {
    title: "TFH async/await",
    component: () => <TFHAsyncAwait />,
  },
  React: {
    title: "React",
    component: () => <React />,
  },
  Queues: {
    title: "Queues",
    component: () => <Queues />,
  },
  CloudStorage: {
    title: "Cloud Storage",
    component: () => <CloudStorage />,
  },
  IfMatch: {
    title: "If-Match",
    component: () => <IfMatch />,
  },
  APIVersioning: {
    title: "API Versioning",
    component: () => <APIVersioning />,
  },
  JWT: {
    title: "JWT",
    component: () => <JWT />,
  },
  ResponsiveDesign: {
    title: "Responsive Design",
    component: () => <ResponsiveDesign />,
  },
};

export default assignments;
