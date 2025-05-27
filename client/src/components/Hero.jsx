import React from "react";
import { assets } from "../assets/assets";


function Hero() {
  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-green-800 to-purple-900 text-white py-16 text-center mx-2 rounded-xl">
        <h2>Over 10,000+ jobs to apply</h2>
        <p>
          Your Next Big Move Starts Right Here - Explore The Best Job
          Opportunities <br /> And Take The First Step Towards Your Dream Career
        </p>
        <div>
          <div>
            <img src={assets.search_icon} alt="" />
            <input
              type="text"
              placeholder="Search for job"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
            />
          </div>
          <div>
            <img src={assets.location_icon} alt="" />
            <input
              type="text"
              placeholder="Location"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
            />
          </div>
          <button>Search</button>
        </div>

      </div>
    </div>
  );
}

export default Hero;
