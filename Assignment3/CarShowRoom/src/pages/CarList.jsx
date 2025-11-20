import CarCard from "../components/CarCard";
import { useNavigate } from "react-router-dom";

const CarList = ({ cars }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2 style={{ margin: 0 }}>Car Showroom</h2>
        <button 
          onClick={() => navigate("/")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold"
          }}
        >
           Add Car
        </button>
      </div>

      <div className="card-grid">
        {cars.length === 0 && <p>No cars added yet.</p>}

        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
