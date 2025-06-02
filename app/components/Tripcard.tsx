import { Link } from "react-router"

const Tripcard = ({id,name,location,imageUrl,tags,price}:
  TripCardProps ) => {
  return (
    <Link to={`/trips/${id}`} className="trip-card bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">{name}</h2> 
    <img src={imageUrl} alt={name}  />
    </Link>
  )
}

export default Tripcard