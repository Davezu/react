import { useOutletContext } from "react-router-dom"
import { useState } from 'react';

const Home = () => {
  const {test} = useOutletContext()
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1)
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        Count: {count}
        <button onClick={increment}>Click me</button>
      </div>
      
      <p>Welcome to the home page of our application! {test}</p>
    </div>
  )             
}

export default Home
