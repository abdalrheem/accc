import React from "react";
import { BrowserRouter as Route, Router } from "react-router-dom";
import Services from "./components/ProjectsSection";
import Home from "./components/Home";
import ColorModeSwitch from "./components/ColorModeSwitch";

const App = () => {
  return (
    <>
      <Home />
      <ColorModeSwitch />
    </>
  );
};

export default App;
