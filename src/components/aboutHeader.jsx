import React, { useCallback, useState } from "react";

const AboutHeader = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(current => current + 1);
  }, []);

  return (
    <div className='about-header'>
      <p>Click me to increment count: {count}</p>
      <Compute onClick={handleClick} />
    </div>
  );
};

const Compute = React.memo(({ onClick }) => {
  console.log("Compute rendered");
  return (
    <button onClick={onClick}>Click Me</button>
  );
});

export default AboutHeader;
