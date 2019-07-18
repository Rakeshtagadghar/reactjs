import React, { PureComponent } from "react";
import Person from "./Person/Person";
class Persons extends PureComponent {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("[Persons.js] getDerivedStateFromProps", props);
  //     return state;
  //   }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("[persons.js] shouldcomponentupdate");
  //     if (nextProps.persons !== this.props.persons) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  componentWillUnmount() {
    console.log("[persons.js] componentwillunmount");
  }

  getSnapshotBeforeUpdate(prevProps, PrevState) {
    console.log("[persons.js] getsnapshotbeforeupdate");
    return { message: "snapshot" };
  }

  componentDidUpdate(prevProps, PrevState, snapshot) {
    console.log("[persons.js] componentdidupdate");
    console.log(snapshot);
  }

  render() {
    console.log("[persons.js] is rendering....");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
          isAuthenticated={this.props.isAuthenticated}
        />
      );
    });
  }
}

export default Persons;
