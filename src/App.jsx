
import { useState, useCallback } from "react";
import OurAppTitle from "./components/OurAppTitle";
import Button from "./components/Button";
import Title from "./components/Title";

export default function App() {

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(10);
  
  const increaseHandler1 = useCallback(() => {
    setCounter1((prev) => prev + 1);
  }, []);
  
  const increaseHandler2 = useCallback(() => {
    setCounter2((prev) => prev + 5);
  },[]);

  console.log("App is rendering");
  
  return (
    <div className="App">
      <OurAppTitle />
      <hr />
      <div className="counter-app-1">
        <Title value={counter1} />
        <Button clickHandler={increaseHandler1} />
      </div>
      <hr />
      <div className="counter-app-1">
        <Title value={counter2} />
        <Button clickHandler={increaseHandler2} />
      </div>
    </div>
  );
}
