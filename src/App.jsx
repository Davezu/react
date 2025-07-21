import RootLayout from "./shared/Components/Layouts/RootLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CarsPage from "./pages/Cars";
import CarPage from "./pages/Car";
import NotFound from "./pages/NotFound";
import AboutHeader from "./components/aboutHeader";
const App = () => {
  return (
      <Routes>
        <Route element={<RootLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Cars" element={<CarsPage/>} />
          <Route path="/CarsPage" element={<CarPage/>} />
          <Route path="/Cars/:id" element={<CarPage/>} />
          <Route path="/AboutHeader" element={<AboutHeader/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default App
