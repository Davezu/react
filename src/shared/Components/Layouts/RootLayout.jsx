import Header from "../../../shared/Components/Partials/Header"
import Footer from "../../../shared/Components/Partials/Footer"
import {Link, Outlet} from "react-router-dom";
const RootLayout = ({}) => {
  return (
    <div className='root-main'>
      <Link to="/"> Home</Link>
      <Link to="/About"> About</Link>
      <Link to="/Cars"> Cars</Link>
      <Link to="/CarsPage"> CarPage</Link>
      <Link to="/aboutHeader"> About Header</Link>

      <Header />
      <Outlet context={{test: `Test 1`}} />
      <Footer />
    </div>
  )
}

export default RootLayout
