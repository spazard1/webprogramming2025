import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import BackgroundImagePath from "./backgroundpath.jpg";
import classNames from "classnames";
import step1 from "./step1.jpg";
import step2 from "./step2.jpg";
import step3 from "./step3.png";
import step4 from "./step4.jpg";
import step5 from "./step5.png";
import step6 from "./step6.jpg";
import step7 from "./step7.jpg";
import step8 from "./step8.jpg";
import step10 from "./step10.jpg";
import serverUrl from "./ServerUrl.jsx";
import useSignalRConnection from "./signalr/useSignalRConnection.jsx";
import useSignalR from "./signalr/useSignalR.jsx";

import "./TheQuest.css";

const stepImages = {
  step1: step1,
  step2: step2,
  step3: step3,
  step4: step4,
  step5: step5,
  step6: step6,
  step7: step7,
  step8: step8,
  step10: step10,
};

const TheQuest = () => {
  const [playerStatuses, setPlayerStatuses] = useState([]);
  const getPlayerStatusesInterval = useRef();
  const getPlayerStatusesCount = useRef(0);
  const [paused, setPaused] = useState(false);
  const { queryString, setQueryString } = useSignalRConnection();
  const [name, setName] = useState(localStorage.getItem("name"));
  const [password, setPassword] = useState(localStorage.getItem("password"));

  const getPlayerStatuses = useCallback(() => {
    if (document.visibilityState !== "visible") {
      return;
    }

    if (getPlayerStatusesCount.current > 1000) {
      clearInterval(getPlayerStatusesInterval.current);
      return;
    }

    getPlayerStatusesCount.current++;

    let path = serverUrl + "api/status";
    if (localStorage.getItem("password")) {
      path += "?password=" + localStorage.getItem("password");
    }

    axios.get(path).then((response) => {
      setPlayerStatuses(response.data);
    });
  }, []);

  const pauseAnimations = useCallback(() => {
    if (document.visibilityState === "visible") {
      setPaused(false);
    } else {
      setPaused(true);
    }
  }, []);

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setPassword(localStorage.getItem("password"));
  }, []);

  useEffect(() => {
    if (!name || !password) {
      return;
    }

    setQueryString("name=" + name + "&password=" + password);
  }, [queryString, setQueryString, name, password]);

  const questRequestCallback = useCallback((qr) => {
    document.getElementById(qr.name + "_path").innerHTML = qr.path;
    document.getElementById(qr.name + "_pathTime").innerHTML = new Date(
      qr.pathTime
    ).toLocaleString();
  }, []);

  useSignalR("QuestRequest", questRequestCallback);

  useEffect(() => {
    document.addEventListener("visibilitychange", pauseAnimations);

    return () => {
      document.removeEventListener("visibilitychange", pauseAnimations);
    };
  }, [pauseAnimations]);

  useEffect(() => {
    clearInterval(getPlayerStatusesInterval.current);
    getPlayerStatuses();

    getPlayerStatusesInterval.current = setInterval(getPlayerStatuses, 10000);

    return () => {
      clearInterval(getPlayerStatusesInterval.current);
      getPlayerStatusesCount.current = 0;
    };
  }, [getPlayerStatuses]);

  return (
    <div className="theQuestContainer">
      <style>
        {`
        body {
          background-image: url("${BackgroundImagePath}");
        }
          `}
      </style>
      <div className="transparentBox">
        <div>Want to go on a quest?</div>
        <div>
          <a href="https://webprogrammingthequest.net/" target="_blank">
            https://webprogrammingthequest.net/
          </a>
        </div>
      </div>
      <div className={classNames("players", { paused: paused })}>
        {playerStatuses.map((playerStatus) => (
          <div
            key={playerStatus.name}
            className="player"
            style={{
              "--progressDiv-angle":
                360 / (playerStatus.finishedStepsCount ?? 1) + "deg",
            }}
          >
            <div className="playerName">{playerStatus.name}</div>
            <div className="transparentCircle"></div>
            <div id={playerStatus.name + "_path"} className="playerPath">
              {playerStatus.path}
            </div>
            {playerStatus.pathTime && (
              <div id={playerStatus.name + "_pathTime"} className="playerPath">
                {new Date(playerStatus.pathTime).toLocaleString()}
              </div>
            )}
            <div
              className={classNames("progressElements", {
                step9: playerStatus["step9"],
              })}
            >
              {Object.keys(stepImages).map((keyName, index) => (
                <React.Fragment key={keyName}>
                  {playerStatus[keyName] > 0 && (
                    <>
                      {keyName === "step5" &&
                        playerStatus["customStep5Url"] && (
                          <div
                            className={classNames("progressDiv", keyName)}
                            style={{ "--index": index }}
                          >
                            <img
                              src={playerStatus["customStep5Url"]}
                              alt={keyName}
                            />
                          </div>
                        )}
                      {(keyName !== "step5" ||
                        !playerStatus["customStep5Url"]) && (
                        <div
                          className={classNames("progressDiv", keyName)}
                          style={{ "--index": index }}
                        >
                          <img src={stepImages[keyName]} alt={keyName} />
                        </div>
                      )}
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheQuest;
