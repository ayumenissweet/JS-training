import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import General from "./components/General";
import Education from "./components/Education";
import Projects from "./components/Projects";

import "./index.css";
import Form from "./components/Form";

function App() {
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    university: "",
    major: "",
    year: "",
    projects: [{ name: "", visitLink: "", id: crypto.randomUUID() }],
  });

  return (
    <div className="app">
      <Form person={info} setPerson={setInfo}></Form>
      <div className="cv">
        <General person={info}></General>
        <Education person={info}></Education>
        <Projects person={info}></Projects>
      </div>
    </div>
  );
}

export default App;
