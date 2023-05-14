import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  // const toggleAlert = () => {
  //   if (showAlert) {
  //     setShowAlert(false);
  //     return;
  //   }
  //   setShowAlert(true);
  // };

  return (
    <div>
      <button
        className="btn"
        type="button"
        onClick={() => setShowAlert(!showAlert)}
      >
        Toogle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">Hello world</div>;
};
export default ToggleChallenge;
