import React from "react";
import "./scss/styles.scss";
import Sidebar from "./components/Sidebar";
import DashboardApp from "./components/DashboardApp";

const App = () => {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <DashboardApp />
      </div>
      <div className="shapes__one"></div>
      <div className="shapes__two"></div>
      <div className="shapes__three"></div>
    </>
  );
};

export default App;
