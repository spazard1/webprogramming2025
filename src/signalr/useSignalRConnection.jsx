/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import SignalRConnectionContext from "./SignalRConnectionContext";
import serverUrl from "../ServerUrl";

const useSignalRConnection = () => {
  const { setConnection, setConnectionId, connectionId } = useContext(
    SignalRConnectionContext
  );
  const [queryString, setQueryString] = useState();

  useEffect(() => {
    if (!queryString) {
      return;
    }

    var connection = new signalR.HubConnectionBuilder()
      .withUrl(serverUrl + "signalRHub?" + queryString)
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();

    connection.onreconnected((connectionId) => {
      setConnectionId(connectionId);
    });

    connection.start().then(() => {
      setConnection(connection);
      setConnectionId(connection.connectionId);
    });

    setTimeout(() => {
      connection.stop();
    }, 1000 * 60 * 60 * 2);
  }, [queryString]);

  return { queryString, setQueryString, connectionId };
};

export default useSignalRConnection;
