import { memo } from "react";

const Title = ({ value }) => {
  console.log("Title is rendering");

  return <div>The value of Counter is {value}</div>;
};

export default memo(Title);
