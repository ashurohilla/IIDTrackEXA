import React, { useState } from "react";

const QualificationForm = () => {
  // Initialize state for qualifications
  const [schoolQualification, setSchoolQualification] = useState("");
  const [schoolGrade, setSchoolGrade] = useState("");
  const [graduationQualification, setGraduationQualification] = useState("");
  const [graduationGrade, setGraduationGrade] = useState("");
  const [postGraduationQualification, setPostGraduationQualification] =
    useState("");
  const [postGraduationGrade, setPostGraduationGrade] = useState("");
   
  return (
    <div className="">
      <h2 className="text-lg font-bold">Qualification Form</h2>

      {/* School Qualification */}
      <div className="m-2">
        <label htmlFor="schoolQualification">School Qualification:</label>
        <input
          type="text"
          id="schoolQualification"
          value={schoolQualification}
          onChange={(e) => setSchoolQualification(e.target.value)}
          class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
          required
        />
      </div>
      <div className="m-2">
        <label htmlFor="schoolGrade">Grade:</label>
        <input
          type="text"
          id="schoolGrade"
          value={schoolGrade}
          onChange={(e) => setSchoolGrade(e.target.value)}
          class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
          required
        />
      </div>

      {/* Graduation Qualification */}
      <div className="m-2">
        <label htmlFor="graduationQualification">
          Graduation Qualification:
        </label>
        <input
          type="text"
          id="graduationQualification"
          value={graduationQualification}
          onChange={(e) => setGraduationQualification(e.target.value)}
          class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
          required
        />
      </div>
      <div className="m-2">
        <label htmlFor="graduationGrade">Grade:</label>
        <input
          type="text"
          id="graduationGrade"
          value={graduationGrade}
          onChange={(e) => setGraduationGrade(e.target.value)}
          class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
          required
        />
      </div>

      {/* Post Graduation Qualification */}
      <div className="m-2">
        <label htmlFor="postGraduationQualification">
          Post Graduation Qualification:
        </label>
        <input
          type="text"
          id="postGraduationQualification"
          value={postGraduationQualification}
          onChange={(e) => setPostGraduationQualification(e.target.value)}
          class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
          required
        />
      </div>
      <div className="m-2">
        <label htmlFor="postGraduationGrade">Grade:</label>
        <input
          type="text"
          id="postGraduationGrade"
          value={postGraduationGrade}
          onChange={(e) => setPostGraduationGrade(e.target.value)}
          class="bg-darkBlue w-full ml-2 border border-2 border-white rounded-md p-2"
          required
        />
      </div>
    </div>
  );
};

export default QualificationForm;
