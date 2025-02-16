import { memo } from "react";

const OurAppTitle = () => {
  console.log("OurAppTitle is rendering");

  return (
      <div>
        <h2>Our Simple App</h2>
    </div>
  )
}

export default memo(OurAppTitle);