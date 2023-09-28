import React, { useState } from 'react';

const Skills = () => {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  // Function to add a new skill
  const addSkill = () => {
    if (newSkill.trim() === '') return;
    setSkills([...skills, newSkill]);
    setNewSkill('');
  };

  // Function to edit skill
  const editSkill = (index) => {
    setEditingIndex(index);
    setNewSkill(skills[index]);
  };

  // Function to update skill
  const updateSkill = () => {
    if (newSkill.trim() === '') return;
    const updatedSkills = [...skills];
    updatedSkills[editingIndex] = newSkill;
    setSkills(updatedSkills);
    setNewSkill('');
    setEditingIndex(-1);
  };

  // Function to delete skill
  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <div>
      <h2 className="text-lg font-bold" >Skills</h2>

      {/* Add new skill */}
      <div>
        <input
          type="text"
          placeholder="Enter a new skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className='bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2'
        />
        {editingIndex === -1 ? (
          <button onClick={addSkill} className='border border-2 border-white m-2 rounded-[10px] bg-white p-2 text-darkBlue font-bold' >Add Skill</button>
        ) : (
          <button onClick={updateSkill} className='border border-2 border-white m-2 rounded-[10px] bg-white p-2 text-darkBlue font-bold'  >Update Skill</button>
        )}
      </div>

      {/* List of skills */}
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <button onClick={() => editSkill(index)} className='border border-2 border-white m-2 rounded-[10px] bg-white p-2 text-darkBlue font-bold'  >Edit</button>
            <button onClick={() => deleteSkill(index)} className='border border-2 border-white m-2 rounded-[10px] bg-white p-2 text-darkBlue font-bold' >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
