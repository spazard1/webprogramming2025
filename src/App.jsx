import { BrowserRouter, Navigate, Routes, Route } from "react-router";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Schedule from "./Schedule";
import Assignments from "./Assignments/Assignments";
import StretchLevels from "./StretchLevels";
import { HelmetProvider } from "react-helmet-async";
import assignments from "./Assignments/AssignmentsList";
import Home from "./Home";
import TheQuest from "./TheQuest";

import "./App.css";

const App = () => {
  return (
    <HelmetProvider>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="/">Web Programming</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/schedule">Schedule</Nav.Link>
              <NavDropdown title={"Assignments"} menuVariant="dark">
                {Object.keys(assignments).map((assignment, index) => (
                  <NavDropdown.Item
                    key={assignment}
                    href={`/assignments/${assignment}`}
                  >
                    {index + 1}. {assignments[assignment].title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link href="/stretchLevels">Stretch Levels</Nav.Link>
              <Nav.Link href="/theQuest">The Quest</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/assignments/:assignment" element={<Assignments />} />
          <Route path="/stretchLevels" element={<StretchLevels />} />
          <Route path="/theQuest" element={<TheQuest />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
