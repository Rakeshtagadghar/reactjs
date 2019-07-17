import React from "react";
import "./Useroutput.css";
const UserOutput = props => {
  return (
    <div className="UserOutput">
      <h1>{props.username}</h1>
      <p> Para 1</p>
      <p>Para 2</p>
    </div>
  );
};

export default UserOutput;
