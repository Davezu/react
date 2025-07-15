import { useOutletContext } from "react-router-dom"
import { useState, useEffect } from 'react';

const Home = () => {
  const {test} = useOutletContext();
  const [count, setCount] = useState(0);
  const [count2, setCount2]= useState(0);

  const increment = () => setCount(count + 1);
  const increment2 = () => setCount2(count2 + 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`run once ${count}`);
    }, 2000)
    return () => clearTimeout(timer);
  },[count])
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        Count: {count}
        Count2: {count2}
        <button onClick={increment}>Click me</button>
        <button onClick={increment2}>Click me2</button>
      </div>
      
      <p>Welcome to the home page of our application! {test}</p>
    </div>
  )             
}

export default Home
