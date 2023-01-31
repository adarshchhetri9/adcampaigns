import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import YourAdCampaign from "./YourAdCampaign";
import { sideBarLinks } from "../constants";

const SideBar = () => {
  return (
    <>
      <div className="bg-[#001738] text-white  h-[100vh] w-[5vw] ">
        <div className="">
          <img src="" alt="" className="mb-[150px]" />
          <ul className="justify-between items-center flex flex-col gap-[50px]">
            {sideBarLinks.map((a, b) => (
              <li key={a.id} className="text-white  ">
                <a href={`#${a.id}`}>{a.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
