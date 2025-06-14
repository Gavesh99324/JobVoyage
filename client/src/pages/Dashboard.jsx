import React from "react";
import { Outlet } from "react-router-dom";
import jobvoyage from "../assets/jobvoyage.jpg";
import { assets } from "../assets/assets";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">
          <img
            className="max-sm:w-32 cursor-pointer w-16 h-16 object-contain"
            src={jobvoyage}
            alt=""
          />
          <div className="flex items-center gap-3">
            <p className="max-sm:hidden">Welcome JobVoyage</p>
            <div className="relative group">
              <img
                className="w-8 border rounded-full"
                src={assets.company_icon}
                alt=""
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul>
                  <li>LogOut</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
