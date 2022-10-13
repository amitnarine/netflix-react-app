import React from "react";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/0a1bb975-77bd-4c7e-8524-7fb05c9dd015/US-en-20221003-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        ></img>

        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:5xl font-bold">My Shows</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
