import { BrowserRouter, Navigate, Routes, Route } from "react-router";
import Home from "./Home";
import Assignments from "./Assignments/Assignments";
import StretchLevels from "./StretchLevels";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="stretchLevels" element={<StretchLevels />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
