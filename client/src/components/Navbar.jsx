import React from "react";
import jobvoyage from "../assets/jobvoyage.jpg";
import Button from "@mui/material/Button";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex ml-8 items-center justify-between">
        <img
          src={jobvoyage}
          alt="logo"
          className="w-[100px] ml-[30px] rounded-4xl"
        />
        {user ? (
          <div className="flex items-center gap-3">
            <Link to="/applications">Applied Jobs</Link>
            <span>|</span>
            <span>Hi, {user.firstName + " " + user.lastName}</span>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: "9999px", px: 3, mr: 2 }}
              size="small"
            >
              Recruiter Login
            </Button>
            <Button
              onClick={() => openSignIn()}
              variant="outlined"
              color="secondary"
              sx={{ borderRadius: "9999px", px: 3 }}
              size="small"
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
