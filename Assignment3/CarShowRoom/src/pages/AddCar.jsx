import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCar = ({ cars, setCars }) => {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    year: "",
    fuel: "",
    mileage: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCar = {
      id: cars.length + 1,
      ...form
    };

    setCars([...cars, newCar]);

    navigate("/cars");
  };

  return (
    <div className="container">
      <h2>Add New Car</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Car Name" onChange={handleChange} required />
        <input name="brand" placeholder="Brand" onChange={handleChange} required />
        <input name="price" placeholder="Price" onChange={handleChange} required />
        <input name="year" placeholder="Model Year" onChange={handleChange} required />
        <input name="fuel" placeholder="Fuel Type" onChange={handleChange} required />
        <input name="mileage" placeholder="Mileage" onChange={handleChange} required />
        <input name="image" placeholder="Image URL" onChange={handleChange} required />

        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;
