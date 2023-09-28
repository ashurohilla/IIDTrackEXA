import React, { useState } from "react";
import Skills from "./components/skills";
import Qualifications from "./components/Qualifications";
import MissionHistories from "./components/MissionHistories";

const Dashboard = () => {
  // Define state variables for personal details
  const [userName] = useState(" ");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-xl font-bolder">Welcome, {userName}!</h1>
      </div>
      <div class="grid grid-cols-2 gap-4">
        {/* <!-- First row, first column --> */}
        <div className="col-span-1 bg-darkBlue p-4 text-white rounded-[12px]">
          <h2 className="text-lg font-bold">Personal Details</h2>

          <div className="m-2">
            <label className="">Full Name: </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
            />
            <br />
          </div>
          <div className="m-2">
            <label>Gender: </label>
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
            />
            <br />
          </div>
          <div className="m-2">
            <label>Date of Birth: </label>
            <input
              type="date"
              value={dateOfBirth}
              className="bg-none"
              onChange={(e) => setDateOfBirth(e.target.value)}
              class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
            />{" "}
            <br />
          </div>
          <div className="m-2">
            <label>Contact Information:</label>
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
            />
            <br />
          </div>
          <div className="m-2">
            <label>Email: </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
            />
            <br />
          </div>
          <div className="m-2">
            <label>Address: </label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
            />
            <br />
          </div>
        </div>

        {/* <!-- First row, second column --> */}
        <div class="col-span-1 bg-darkBlue p-4 text-white rounded-[12px]">
          {" "}
          <Qualifications />
        </div>

        {/* <!-- Second row, first column --> */}
        {/* <div class="col-span-1 row-span-2 bg-yellow-200 p-4">Column 1, Row 2</div> */}

        {/* <!-- second row, first column --> */}
        <div class="col-span-1 bg-darkBlue p-4 text-white rounded-[12px]">
          <Skills />
        </div>

        {/* <!-- second row, second column --> */}
        <div class="col-span-1 bg-darkBlue p-4 text-white rounded-[12px]">
          <MissionHistories />
        </div>
      </div>
      <form />
    </div>
  );
};

export default Dashboard;
