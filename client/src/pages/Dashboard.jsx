import React from 'react'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      db
      <Outlet />
    </div>
  )
}

export default Dashboard;
