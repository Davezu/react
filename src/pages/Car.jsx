import { useParams } from "react-router-dom";

const CarPage = () => {
    const {id} = useParams()
  return (
    <div>
        this is about Carpage {id}
    </div>
  )
}

export default CarPage
