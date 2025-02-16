import { memo } from "react";

const Button = ({ clickHandler }) => {
  console.log("Button is rendering");

  return (
    <div>
      <button onClick={clickHandler}>Increase by 1</button>
    </div>
  );
};

export default memo(Button);
