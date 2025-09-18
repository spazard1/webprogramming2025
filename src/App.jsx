import { BrowserRouter, Navigate, Routes, Route } from "react-router";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Schedule from "./Schedule";
import Assignments from "./Assignments/Assignments";
import StretchLevels from "./StretchLevels";
import { HelmetProvider } from "react-helmet-async";
import assignments from "./Assignments/AssignmentsList";
import Home from "./Home";
import TheQuest from "./TheQuest";
import OfficeHours from "./OfficeHours";
import { useState } from "react";
import SignalRConnectionContext from "./signalr/SignalRConnectionContext.jsx";
import SignalRConnectionStatus from "./signalr/SignalRConnectionStatus.jsx";

import "./App.css";

const App = () => {
  const [connection, setConnection] = useState();
  const [connectionId, setConnectionId] = useState();

  return (
    <SignalRConnectionContext.Provider
      value={{ connection, setConnection, connectionId, setConnectionId }}
    >
      <SignalRConnectionStatus />
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
                <Nav.Link href="/officeHours">Office Hours</Nav.Link>
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
            <Route path="/officeHours" element={<OfficeHours />} />
            <Route path="/stretchLevels" element={<StretchLevels />} />
            <Route path="/theQuest" element={<TheQuest />} />

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </SignalRConnectionContext.Provider>
  );
};

export default App;
