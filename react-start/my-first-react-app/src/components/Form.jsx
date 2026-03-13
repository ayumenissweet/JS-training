import { useState } from "react";
import "../styles/Form.css";

function Form({ person, setPerson }) {
  function handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;

    setPerson((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function addProject() {
    setPerson((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        { projectName: "", visitLink: "", id: crypto.randomUUID() },
      ],
    }));
  }

  function handleProjectChange(e, index) {
    const field = e.target.name;
    const value = e.target.value;

    setPerson((prev) => {
      const updatedProjects = prev.projects.map((project, i) => {
        if (i === index) {
          return {
            ...project,
            [field]: value,
          };
        }

        return project;
      });

      return {
        ...prev,
        projects: updatedProjects,
      };
    });
  }

  return (
    <div className="form-info">
      <div className="default-form">
        <label>
          <p>Full Name:</p>
          <input
            name="fullName"
            value={person.fullName}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <p>Email:</p>
          <input
            name="email"
            value={person.email}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <p>Phone Number:</p>
          <input
            name="phone"
            value={person.phone}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <p>Country:</p>
          <input
            name="country"
            value={person.country}
            onChange={handleChange}
          ></input>
        </label>
      </div>

      <div className="default-form">
        <label>
          <p>University:</p>
          <input
            name="university"
            value={person.university}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <p>Major:</p>
          <input
            name="major"
            value={person.major}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <p>University Year:</p>
          <input
            name="year"
            value={person.year}
            onChange={handleChange}
          ></input>
        </label>
      </div>

      <div className="project-form">
        {person.projects.map((project, index) => (
          <div key={project.id}>
            <input
              name="projectName"
              value={project.projectName || ""}
              onChange={(e) => handleProjectChange(e, index)}
            />

            <input
              name="visitLink"
              value={project.visitLink || ""}
              onChange={(e) => handleProjectChange(e, index)}
            />
          </div>
        ))}
      </div>

      <button onClick={addProject}>Add Project</button>
    </div>
  );
}

export default Form;
