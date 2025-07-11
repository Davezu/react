import Header from "../Partials/Header"
import Footer from "../Partials/Footer"
import {Link, Outlet} from "react-router-dom";
const RootLayout = ({  }) => {
  return (
    <div className='root-main'>
      <Link to="/"> Home</Link>
      <Link to="/About"> About</Link>
      <Link to="/Cars"> Cars</Link>
      <Link to="/CarsPage"> CarPage</Link>

      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout
