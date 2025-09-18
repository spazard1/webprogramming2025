import { useContext, useEffect } from "react";
import SignalRConnectionContext from "./SignalRConnectionContext";

const useSignalR = (eventName, callback) => {
  const { connection, connectionId } = useContext(SignalRConnectionContext);

  useEffect(() => {
    if (!connection || !eventName || !callback) {
      return;
    }

    connection.on(eventName, callback);

    return () => {
      connection.off(eventName, callback);
    };
  }, [connection, eventName, callback]);

  return connectionId;
};

export default useSignalR;
