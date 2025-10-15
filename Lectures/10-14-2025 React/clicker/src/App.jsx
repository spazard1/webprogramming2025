import ClickCounter from "./components/ClickCounter";

import "./App.css";

const App = () => {
  return (
    <div className={"appContainer"}>
      <ClickCounter teamName="Team 1"></ClickCounter>
      <ClickCounter teamName="Team 2"></ClickCounter>
      <ClickCounter teamName="Team 3" startingScore={5}></ClickCounter>
    </div>
  );
};

export default App;
