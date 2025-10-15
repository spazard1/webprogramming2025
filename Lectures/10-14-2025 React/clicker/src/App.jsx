import ClickCounter from "./components/ClickCounter";
import { useCallback, useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const [teamScores, setTeamScores] = useState({ "Team 1": 0, "Team 2": 0 });

  const onScoreChange = useCallback(
    (teamName, score) => {
      setTeamScores({ ...teamScores, [teamName]: score });
    },
    [teamScores]
  );

  const updateDocumentTitle = useCallback(() => {
    let newTitle = "";
    Object.keys(teamScores).map((teamName) => {
      newTitle += teamName + ":" + teamScores[teamName] + " ";
    });
    document.title = newTitle;
  }, [teamScores]);

  useEffect(() => {
    updateDocumentTitle();
  }, [teamScores, updateDocumentTitle]);

  return (
    <div className={"appContainer"}>
      {Object.keys(teamScores).map((teamName) => (
        <ClickCounter
          key={teamName}
          teamName={teamName}
          scoreValue={teamScores[teamName] ?? 0}
          onScoreChange={onScoreChange}
        ></ClickCounter>
      ))}
    </div>
  );
};

export default App;
