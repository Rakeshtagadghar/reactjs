import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auh-context";
const Cockpit = props => {
  const toggleBtn = useRef(null);
  const contextType = useContext(AuthContext);
  console.log(contextType.authenticated, "cockpit");
  useEffect(() => {
    toggleBtn.current.click();
  }, []);

  useEffect(() => {
    console.log("[cockpit.js] useeffect");
    const timer = setTimeout(() => {
      alert("updated");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[cockpit.js] cleanup work ");
    };
  }, []);
  let assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.red);
  }
  return (
    <div className={classes.Cockpit}>
      <h1 className={assignedClasses}>{props.title}</h1>
      <button className={btnClass} ref={toggleBtn} onClick={props.clicked}>
        Toggle Persons
      </button>
      {contextType.authenticated ? (
        <button onClick={contextType.logout}>Logout</button>
      ) : (
        <button onClick={contextType.login}>Login</button>
      )}
    </div>
  );
};

export default React.memo(Cockpit);
