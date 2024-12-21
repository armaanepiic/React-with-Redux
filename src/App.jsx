import { Component } from 'react'; 
import './App.css'
import Person from './components/Person'

class App extends Component {
  render() {
      return (
        <div className="App">
          <h1>Hello World!</h1>
          <Person name="arman" age="27">I am some info of person</Person>
          <Person name="nusrat" age="25" />
          <Person name="nomi" age="28" />
        </div>
      );
  }
}

export default App
