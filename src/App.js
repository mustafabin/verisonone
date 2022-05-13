import Navbar from "./components/Navbar.jsx";
import ProjectNav from "./components/ProjectNav.jsx";
import Project from "./components/Project.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Home from "./Home.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Navbar></Navbar>
              <Home></Home>
            </React.Fragment>
          }
        ></Route>
        <Route
          path="/projects"
          element={
            <React.Fragment>
              <ProjectNav></ProjectNav>
              <Project></Project>
            </React.Fragment>
          }
        ></Route>
        <Route
          path="*"
          element={
            <React.Fragment>
              <ProjectNav></ProjectNav>
              <h1>Go back Home</h1>
            </React.Fragment>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
