import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import YourAdCampaign from "./components/YourAdCampaign";
import Login from "./pages/login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
