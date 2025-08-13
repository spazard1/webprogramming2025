import { BrowserRouter, Navigate, Routes, Route } from "react-router";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Home from "./Home";
import Assignments from "./Assignments/Assignments";
import StretchLevels from "./StretchLevels";
import { HelmetProvider } from "react-helmet-async";
import assignments from "./Assignments/AssignmentsList";

import "./App.css";

const App = () => {
  return (
    <HelmetProvider>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title={"Assignments"} menuVariant="dark">
              {Object.keys(assignments).map((assignment, index) => (
                <NavDropdown.Item
                  key={assignment}
                  href={`/assignments/${assignment}`}
                >
                  {index + 1}. {assignment}
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
