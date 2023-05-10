import { useState } from "react";
// import { data } from "../";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  const displayPerson = () => {
    // setPerson({ name: "john", age: 28, hobby: "scream at computer" });
    // setPerson("shakeAndBake");
    // setPerson({ name: "susan" });
    setPerson({ ...person, name: "susan" });
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys : {person.hobby}</h4>
      <button type="button" className="btn" onClick={displayPerson}>
        change
      </button>
    </div>
  );
};

export default UseStateObject;
