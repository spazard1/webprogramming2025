import { BrowserRouter, Navigate, Routes, Route } from "react-router";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Home from "./Home";
import Assignments from "./Assignments/Assignments";
import StretchLevels from "./StretchLevels";
import { HelmetProvider } from "react-helmet-async";

import "./App.css";

const assignments = ["HTMLCSSJavascript", "Assignment2", "Assignment3"];

const App = () => {
  return (
    <HelmetProvider>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title={"Assignments"} menuVariant="dark">
              {assignments.map((assignment) => (
                <NavDropdown.Item
                  key={assignment}
                  href={`/assignments/${assignment}`}
                >
                  {assignment}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="/stretchLevels">Stretch Levels</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assignments/:assignment" element={<Assignments />} />
          <Route path="/stretchLevels" element={<StretchLevels />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
