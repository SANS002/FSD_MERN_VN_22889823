import { useParams, useNavigate } from "react-router-dom";

const CarDetails = ({ cars }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = cars.find((c) => c.id === Number(id));

  if (!car) return <h2>Car not found</h2>;

  return (
    <div className="container details">
      <div style={{ marginBottom: "20px" }}>
        <button 
          onClick={() => navigate("/cars")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold"
          }}
        >
          Back
        </button>
      </div>

      <img src={car.image} alt={car.name} className="detail-img" />

      <h2>{car.name}</h2>
      <p><strong>Brand:</strong> {car.brand}</p>
      <p><strong>Price:</strong> ₹{car.price}</p>
      <p><strong>Year:</strong> {car.year}</p>
      <p><strong>Fuel Type:</strong> {car.fuel}</p>
      <p><strong>Mileage:</strong> {car.mileage} km/l</p>
    </div>
  );
};

export default CarDetails;
