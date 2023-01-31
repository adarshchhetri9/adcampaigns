import React from "react";
import { Body, SideBar, Table } from "../components";

const Dashboard = () => {
  return (
    <div>
      <div></div>
      <div
        className="flex
          bg-gray-500"
      >
        <div>
          <SideBar />
        </div>
        <div>
          <div>
            <div className="bg-white h-[5vh] w-[95vw] "></div>
            <div className="flex justify-around">
              <div>
                <h1>Your Campaigns</h1>
                <span>Check the list of campigns you created </span>
              </div>
              <div>
                <button>Create new campaign</button>
              </div>
            </div>
          </div>
          <div>
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
