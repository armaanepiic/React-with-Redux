import './App.css'
import Biodata from './components/Biodata';

function App() {
  return (
    <div className="biodata">
      <Biodata
        name="Arman Hossain"
        age={28}
        mobile="01874015451"
        occupation="Software Engineer"
        skills={["C++", "JS", "Python"]}
        interests={["Swimming", "Cycling", "Travelling"]}
      />
      <hr />
      <Biodata
        name="Nusratun Nabi"
        age={25}
        occupation="UI UX Designer"
        skills={["Figma", "Adobe", "Canva"]}
        interests={["Shopping", "Reading", "Travelling"]}
      />
    </div>
  );
}

export default App;
