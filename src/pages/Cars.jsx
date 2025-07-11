import {Link} from "react-router-dom"

const CarsPage = () => {
  return (
    <div>
        <Link to="/cars/1">Car1</Link>
        <Link to="/cars/2">Car2</Link>
        <Link to="/cars/3">Car3</Link>
        <Link to="/cars/4">Car4</Link>
    </div>
  )
}

export default CarsPage
