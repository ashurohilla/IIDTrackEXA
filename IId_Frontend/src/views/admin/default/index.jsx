import React, { useState } from 'react';
import Skills from './components/skills';
import Qualifications from './components/Qualifications';
import MissionHistories from './components/MissionHistories';

const Dashboard = () => {
  // Define state variables for personal details
  const [userName] = useState('Nisha Gera');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to send the data to a backend server or update the state as needed.
    // For now, let's log the data to the console.
    
    console.log('Full Name:', fullName);
    console.log('Gender:', gender);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Address:', address);
  };

  return (
    <div>
<form onSubmit={handleSubmit}></form>
<div className="mt-5">
<h1>Welcome, {userName}!</h1>

</div>
<div class="grid grid-cols-2 gap-4">
{/* <!-- First row, first column --> */}
<div class="col-span-1 bg-blue-200 p-4">
<h2>Personal Details</h2>
     
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label> <br />
        <label>
          Gender:
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </label> <br />
        <label>
          Date of Birth:
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </label> <br />
        <label>
          Contact Information:
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /> </label>
           <br />
           <label>
        Email:
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label> <br />
        <label>
          Address: <br />
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label> <br />
       

</div>

{/* <!-- First row, second column --> */}
<div class="col-span-1 bg-green-200 p-4"><Skills/></div>

{/* <!-- Second row, first column --> */}
{/* <div class="col-span-1 row-span-2 bg-yellow-200 p-4">Column 1, Row 2</div> */}

{/* <!-- second row, first column --> */}
<div class="col-span-1 bg-yellow-200 p-4"> <Qualifications/></div>

{/* <!-- second row, second column --> */}
<div class="col-span-1 bg-yellow-200 p-4"><MissionHistories/></div>

</div>
<form/>
</div>
 
  );
};

export default Dashboard;
