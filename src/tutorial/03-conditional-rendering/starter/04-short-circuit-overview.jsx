import { useState } from "react";

const ShortCircuitOverview = () => {
  //truthy
  const [name, setName] = useState("susan");
  //falsy
  const [value, setValue] = useState("");

  const codeExample = value || "hello world";

  return (
    <div>
      <h4> Falsy OR : {value || "hello world"}</h4>
      <h4> Falsy AND : {value && "hello world"}</h4>
      <h4> Truthy OR : {name || "hello world"}</h4>
      <h4> Truthy AND : {name && "hello world"}</h4>
      {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;
