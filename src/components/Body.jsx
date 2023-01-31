import React from "react";
import Table from "./Table";

const Body = () => {
  return (
    <>
      <div>
        <div className="ml-[80px] flex justify-center ">
          <div className="w-full h-[65vh] bg-slate-50  rounded-lg my-[5vw] mx-[5vw]">
            <Table/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
