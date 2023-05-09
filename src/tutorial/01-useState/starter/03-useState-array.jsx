import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <div>
      {people.map((person) => {
        console.log(person);
        return <h4>item</h4>;
      })}
    </div>
  );
};

export default UseStateArray;
