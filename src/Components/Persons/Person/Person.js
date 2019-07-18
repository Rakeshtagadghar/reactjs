import React, { Component } from "react";
import classes from "./Person.module.css";
import Aux from "../../../HOC/Auxilliary";
import WithClass from "../../../HOC/WithClass";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auh-context";
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  static contextType = AuthContext;
  componentDidMount() {
    this.inputElement.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[person.js] rendering...");
    return (
      <Aux>
        <div className={classes.Person}>
          {this.context.authenticated ? (
            <p>Authenticated!</p>
          ) : (
            <p>Please Login!</p>
          )}

          <p onClick={this.props.click}>
            i am {this.props.name} and i am {this.props.age} years old
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            ref={this.inputElement}
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default WithClass(Person, classes.App);
