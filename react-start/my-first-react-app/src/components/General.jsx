import "../styles/General.css";

function General({ person }) {
  return (
    <div className="general-info">
      <h1>{person.fullName}</h1>
      <div className="personal-info">
        <p>{person.email}</p>
        <p>{person.phone}</p>
        <p>{person.country}</p>
      </div>
    </div>
  );
}

export default General;
