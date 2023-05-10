import { useState } from "react";
// import { data } from "../";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(28);
  const [hobby, setHobby] = useState("cooking");

  const displayPerson = () => {
    setName("john");
    setAge("24");
    setHobby("read books");
  };
  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys : {hobby}</h4>
      <button type="button" className="btn" onClick={displayPerson}>
        change
      </button>
    </div>
  );
};

export default UseStateObject;
