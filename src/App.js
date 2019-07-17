import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: "28" },
      { id: "2", name: "Manu", age: "27" },
      { id: "3", name: "Stephanie", age: "26" }
    ],
    showPersons: false
  };

  deletePerson = personindex => {
    const persons = this.state.persons.slice();
    persons.splice(personindex, 1);
    this.setState({ persons: persons });
  };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };
  togglepersonhandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };
  render() {
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePerson(index)}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "aqua",
        color: "black"
      };
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1 className={classes.join(" ")}>hi! this is working</h1>
          <button style={style} onClick={this.togglepersonhandler}>
            Switch me
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
