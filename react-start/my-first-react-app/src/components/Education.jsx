import "../styles/Education.css";

function Education({ person }) {
  return (
    <div className="education-info">
      <h2>{person.university}</h2>
      <div className="study-info">
        <p>{person.major}</p>
        <p>{person.year}</p>
      </div>
    </div>
  );
}

export default Education;
