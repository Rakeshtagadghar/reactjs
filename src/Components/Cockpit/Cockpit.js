import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";
const Cockpit = props => {
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
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
