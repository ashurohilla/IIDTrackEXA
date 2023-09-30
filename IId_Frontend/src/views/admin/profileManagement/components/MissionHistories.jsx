import React, { useState } from 'react';

const MissionHistories = () => {
  // Initialize state to manage mission history entries
  const [missions, setMissions] = useState([]);
  const [newMission, setNewMission] = useState({
    missionName: '',
    role: '',
    startDate: '',
    endDate: '',
    description: '',
    achievements: '',
  });

  // Function to add a new mission history entry
  const addMission = () => {
    if (
      !newMission.missionName ||
      !newMission.role ||
      !newMission.startDate ||
      !newMission.endDate
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    setMissions([...missions, newMission]);
    setNewMission({
      missionName: '',
      role: '',
      startDate: '',
      endDate: '',
      description: '',
      achievements: '',
    });
  };

  return (
    <div>
      <h2 className="text-lg font-bold" >Mission Histories</h2>

      {/* Form to add a new mission history entry */}
   
        <label>
          Mission Name (required):
          <input
            type="text"
            value={newMission.missionName}
            onChange={(e) =>
              setNewMission({ ...newMission, missionName: e.target.value })
            }
            class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
            required
          />
        </label> <br /> 
        <label>
          Role (required):
          <input
            type="text"
            value={newMission.role}
            onChange={(e) =>
              setNewMission({ ...newMission, role: e.target.value })
            }
            class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
            required
          />
        </label> <br />
        <label>
          Start Date (required):
          <input
            type="date"
            value={newMission.startDate}
            onChange={(e) =>
              setNewMission({ ...newMission, startDate: e.target.value })
            }
            class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
            required
          />
        </label> <br />
        <label>
          End Date (required):
          <input
            type="date"
            value={newMission.endDate}
            onChange={(e) =>
              setNewMission({ ...newMission, endDate: e.target.value })
            }
            class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
            required
          />
        </label> <br />
        <label>
          Description:
          <textarea
            value={newMission.description}
            onChange={(e) =>
              setNewMission({ ...newMission, description: e.target.value })
            }
            class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
          />
        </label> <br />
        <label>
          Achievements: <br />
          <textarea
            value={newMission.achievements}
            onChange={(e) =>
              setNewMission({ ...newMission, achievements: e.target.value })
            }
            class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
          />
        </label> <br />
        <button type="button" onClick={addMission}  className='border border-2 border-white m-2 rounded-[10px] bg-white p-2 text-darkBlue font-bold'  >
          Add Mission 
        </button>

      {/* Display existing mission history entries */}
      <div>
        <h3>Your Mission Histories</h3>
        {missions.length === 0 ? (
          <p>No mission histories added yet.</p>
        ) : (
          <ul>
            {missions.map((mission, index) => (
              <li key={index}>
                <strong>Mission Name:</strong> {mission.missionName}
                <br />
                <strong>Role:</strong> {mission.role}
                <br />
                <strong>Duration:</strong> {mission.startDate} to{' '}
                {mission.endDate}
                <br />
                <strong>Description:</strong> {mission.description}
                <br />
                <strong>Achievements:</strong> {mission.achievements}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MissionHistories;

