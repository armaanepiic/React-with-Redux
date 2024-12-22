import { Component } from "react";

let Person = (obj) => {
  console.log(obj);

  return (
    <div>
      {/* <p>Number: {Math.random()} </p> */}
      <p>
        Name : {obj.name} Age = {obj.age} years
      </p>
      <p>extra info: {obj.children}</p>

    </div>
  );
}

// class Person extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h3>Name: {this.props.name} and Age: {this.props.age} years old</h3>
//       </div>
//     )
//   }
// }

export default Person;
