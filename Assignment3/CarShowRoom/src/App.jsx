import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AddCar from "./pages/AddCar";
import CarList from "./pages/CarList";
import CarDetails from "./pages/CarDetails";

function App() {
  const [cars, setCars] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddCar cars={cars} setCars={setCars} />} />
        <Route path="/cars" element={<CarList cars={cars} />} />
        <Route path="/cars/:id" element={<CarDetails cars={cars} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
