import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[app.js] constructor");
  }
  state = {
    persons: [
      { id: "1", name: "Max", age: "28" },
      { id: "2", name: "Manu", age: "27" },
      { id: "3", name: "Stephanie", age: "26" }
    ],
    showPersons: false,
    cockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[app.js] getDerivedStateFromProps", props);
    return state;
  }
  // componentWillMount() {
  //   console.log("[app.js] componentdidmount");
  // }

  componentDidMount() {
    console.log("[app,js] componentdidmount");
  }

  componentWillUnmount() {
    console.log("[app.js] componentwillunmount");
  }

  componentDidUpdate(prevProps, PrevState, snapshot) {
    console.log("[app.js] componentdidupdate");
    console.log(snapshot);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[app.js] shouldcomponentupdate");
    return true;
  }

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

    this.setState((PrevState, props) => {
      return {
        persons: persons,
        changeCounter: PrevState.changeCounter + 1
      };
    });
  };
  togglepersonhandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };
  render() {
    console.log("[app.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePerson}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={() => this.setState({ cockpit: false })}>
          Remove cockpit
        </button>
        {this.state.cockpit && (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglepersonhandler}
          />
        )}
        {persons}
      </div>
    );
  }
}

export default App;
