import React, { useState } from 'react';

const Skills = () => {
  // Initialize state to manage skills
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  // Function to add a new skill
  const addSkill = () => {
    if (newSkill.trim() === '') return;
    setSkills([...skills, newSkill]);
    setNewSkill('');
  };

  // Function to edit a skill
  const editSkill = (index) => {
    setEditingIndex(index);
    setNewSkill(skills[index]);
  };

  // Function to update a skill
  const updateSkill = () => {
    if (newSkill.trim() === '') return;
    const updatedSkills = [...skills];
    updatedSkills[editingIndex] = newSkill;
    setSkills(updatedSkills);
    setNewSkill('');
    setEditingIndex(-1);
  };

  // Function to delete a skill
  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <div>
      <h2>Skills</h2>

      {/* Add new skill */}
      <div>
        <input
          type="text"
          placeholder="Enter a new skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        {editingIndex === -1 ? (
          <button onClick={addSkill}>Add Skill</button>
        ) : (
          <button onClick={updateSkill}>Update Skill</button>
        )}
      </div>

      {/* List of skills */}
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <button onClick={() => editSkill(index)}>Edit</button>
            <button onClick={() => deleteSkill(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
