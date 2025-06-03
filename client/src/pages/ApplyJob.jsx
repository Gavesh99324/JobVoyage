import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function ApplyJob() {

  const { id } = useParams(); // useParams() is a React Router hook that allows you to access route parameters from the current URL.

  const [JobData, setJobData] = useState(null);

  const { jobs } = useContext(AppContext); // useContext() is a React hook that lets you consume global data from a context provider, without needing to pass it down through props.

  const fetchJob = async () => {
     const data = jobs.filter(job => job._id === id)
     if (data.length !== 0) {
      setJobData(data[0])
      console.log(data[0]); 
     }
  }

  useEffect(() => {
    fetchJob();
  }, [id])


  return (
    <div>

    </div>
  )
}

export default ApplyJob;
