import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import NavBar from "../components/Navbar";
import { assets } from "../assets/assets";

function ApplyJob() {
  const { id } = useParams(); // useParams() is a React Router hook that allows you to access route parameters from the current URL.

  const [JobData, setJobData] = useState(null); // useState() is a React hook that lets you add state to a functional component.

  const { jobs } = useContext(AppContext); // useContext() is a React hook that lets you consume global data from a context provider, without needing to pass it down through props.

  const fetchJob = async () => {
    const data = jobs.filter((job) => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  return JobData ? (
     <>
      <NavBar />
      <div>
        <div>
          <div>
            <div>
              <img src={JobData.companyId.image} alt="" />
              <div>
                <h1>{JobData.title}</h1>
                <div>
                  <span>
                    <img src={assets.suitcase_icon} alt="" />
                    {JobData.companyId.name}
                  </span>
                  <span>
                    <img src={assets.location_icon} alt="" />
                    {JobData.location}
                  </span>
                  <span>
                    <img src={assets.person_icon} alt="" />
                    {JobData.level}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </>
   ) : ( 
     <Loading />
   )
}

export default ApplyJob;
