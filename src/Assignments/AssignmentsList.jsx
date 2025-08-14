import HTMLCSSJavascript from "./HTMLCSSJavascript";
import WebRequests from "./WebRequests";
import WebApi from "./WebApi";
import DependencyInjection from "./DependencyInjection";
import TFHAsyncAwait from "./TFHAsyncAwait";
import React from "./React";
import Queues from "./Queues";
import CloudStorage from "./CloudStorage";
import IfMatch from "./IfMatch";
import ApiVersioning from "./ApiVersioning";
import JWT from "./JWT";
import MobileResponsiveDesign from "./MobileResponsiveDesign";

const assignments = {
  HTMLCSSJavascript: () => <HTMLCSSJavascript />,
  WebRequests: () => <WebRequests />,
  WebApi: () => <WebApi />,
  DependencyInjection: () => <DependencyInjection />,
  TFHAsyncAwait: () => <TFHAsyncAwait />,
  React: () => <React />,
  Queues: () => <Queues />,
  CloudStorage: () => <CloudStorage />,
  IfMatch: () => <IfMatch />,
  ApiVersioning: () => <ApiVersioning />,
  JWT: () => <JWT />,
  MobileResponsiveDesign: () => <MobileResponsiveDesign />,
};

export default assignments;
