import React, { useState } from "react";
import Skills from "./components/skills";
import Qualifications from "./components/Qualifications";
import MissionHistories from "./components/MissionHistories";
import { MdExpandMore } from "react-icons/md";

const ProfileManagement = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [userName] = useState(" ");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const toggleProfileManagement = (ProfileManagementNumber) => {
    switch (ProfileManagementNumber) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      case 4:
        setIsOpen4(!isOpen4);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="flex item-center justify-between mt-5">
        <h1 className="text-xl font-bolder">Welcome, Username  {userName} !</h1>
        <button className="border border-2 border-darkBlue rounded-[10px] pt-1 pb-1 pl-2 pr-2 pointer mb-2">
          {" "}
          Save
        </button>
      </div>
      <div className="border border-1 border-darkBlue p-2 rounded-[5px] mb-2">
      <div className="ProfileManagement-item border-b border-1 border-gray-900 p-2 rounded-[5px] mb-2">
        <button
          className="ProfileManagement-button flex items-center text-xl"
          onClick={() => toggleProfileManagement(1)}
        >
          Personal Details <MdExpandMore />
        </button>
        {isOpen1 && (
          <div className="ProfileManagement-content">
            <div class="">
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
            </div>
          </div>
        )}
      </div>
      <div className="ProfileManagement-item border-b border-1 border-gray-900 p-2 rounded-[5px]">
        <button
          className="ProfileManagement-button flex items-center text-xl"
          onClick={() => toggleProfileManagement(2)}
        >
          Qualifications <MdExpandMore />
        </button>

        {isOpen2 && (
          <div className="ProfileManagement-content">
            <div class="col-span-1 bg-darkBlue p-4 text-white rounded-[12px]">
              <Qualifications />
            </div>
          </div>
        )}
      </div>
      <div className="ProfileManagement-item border-b border-1 border-gray-900 p-2 rounded-[5px]">
        <button
          className="ProfileManagement-button items-center flex text-xl"
          onClick={() => toggleProfileManagement(3)}
        >
          Skills <MdExpandMore />
        </button>
        {isOpen3 && (
          <div className="ProfileManagement-content">
            <div class="col-span-1 bg-darkBlue p-4 text-white rounded-[12px]">
              <Skills />{" "}
            </div>
          </div>
        )}
      </div>
      <div className="ProfileManagement-item border-b border-1 border-gray-900 p-2 rounded-[5px]">
        <button
          className="ProfileManagement-button items-center flex text-xl"
          onClick={() => toggleProfileManagement(4)}
        >
          Mission History <MdExpandMore />
        </button>
        {isOpen4 && (
          <div className="ProfileManagement-content ">
            <div class="col-span-1 bg-darkBlue p-4 text-white rounded-[12px]">
              <MissionHistories />
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default ProfileManagement;
