import HTMLCSSJavascript from "./HTMLCSSJavascript";
import WebRequests from "./WebRequests";
import WebApi from "./WebApi";
import DependencyInjection from "./DependencyInjection";
import TFHAsyncAwait from "./TFHAsyncAwait";
import React from "./React";
import Queues from "./Queues";
import CloudStorage from "./Cloud Storage";

const assignments = {
  HTMLCSSJavascript: () => <HTMLCSSJavascript />,
  WebRequests: () => <WebRequests />,
  WebApi: () => <WebApi />,
  DependencyInjection: () => <DependencyInjection />,
  TFHAsyncAwait: () => <TFHAsyncAwait />,
  React: () => <React />,
  Queues: () => <Queues />,
  CloudStorage: () => <CloudStorage />,
};

export default assignments;
