import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/cars/${car.id}`)}>
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>Brand: {car.brand}</p>
      <p>Price: ₹{car.price}</p>
      <p>Year: {car.year}</p>
    </div>
  );
};

export default CarCard;
