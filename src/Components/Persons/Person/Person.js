import React, { Component } from "react";
import classes from "./Person.module.css";
import Aux from "../../../HOC/Auxilliary";
import WithClass from "../../../HOC/WithClass";
import PropTypes from "prop-types";
class Person extends Component {
  render() {
    console.log("[person.js] rendering...");
    return (
      <Aux>
        <div className={classes.Person}>
          <p onClick={this.props.click}>
            i am {this.props.name} and i am {this.props.age} years old
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </Aux>
    );
  }
}

export default WithClass(Person, classes.App);
