import React, { useState } from 'react';

const QualificationForm = () => {
  // Initialize state for qualifications
  const [schoolQualification, setSchoolQualification] = useState('');
  const [schoolGrade, setSchoolGrade] = useState('');
  const [graduationQualification, setGraduationQualification] = useState('');
  const [graduationGrade, setGraduationGrade] = useState('');
  const [postGraduationQualification, setPostGraduationQualification] = useState('');
  const [postGraduationGrade, setPostGraduationGrade] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process the submitted data here, e.g., send it to a server.
    // For this example, we'll just log the data.
    console.log('School Qualification:', schoolQualification, 'Grade:', schoolGrade);
    console.log('Graduation Qualification:', graduationQualification, 'Grade:', graduationGrade);
    console.log('Post Graduation Qualification:', postGraduationQualification, 'Grade:', postGraduationGrade);
  };

  return (
    <div>
      <h2>Qualification Form</h2>
      <form onSubmit={handleSubmit}>
        {/* School Qualification */}
        <div>
          <label htmlFor="schoolQualification">School Qualification:</label>
          <input
            type="text"
            id="schoolQualification"
            value={schoolQualification}
            onChange={(e) => setSchoolQualification(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="schoolGrade">Grade:</label>
          <input
            type="text"
            id="schoolGrade"
            value={schoolGrade}
            onChange={(e) => setSchoolGrade(e.target.value)}
            required
          />
        </div>

        {/* Graduation Qualification */}
        <div>
          <label htmlFor="graduationQualification">Graduation Qualification:</label>
          <input
            type="text"
            id="graduationQualification"
            value={graduationQualification}
            onChange={(e) => setGraduationQualification(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="graduationGrade">Grade:</label>
          <input
            type="text"
            id="graduationGrade"
            value={graduationGrade}
            onChange={(e) => setGraduationGrade(e.target.value)}
            required
          />
        </div>

        {/* Post Graduation Qualification */}
        <div>
          <label htmlFor="postGraduationQualification">Post Graduation Qualification:</label>
          <input
            type="text"
            id="postGraduationQualification"
            value={postGraduationQualification}
            onChange={(e) => setPostGraduationQualification(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="postGraduationGrade">Grade:</label>
          <input
            type="text"
            id="postGraduationGrade"
            value={postGraduationGrade}
            onChange={(e) => setPostGraduationGrade(e.target.value)}
            required
          />
        </div>

      </form>
    </div>
  );
};

export default QualificationForm;
