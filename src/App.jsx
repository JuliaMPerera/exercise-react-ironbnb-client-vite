import ironhackersImg from "./assets/ironhackers.avif"
import './App.css';
import { Routes, Route } from "react-router-dom";
import axios from 'axios'; // Continue here

import HomePage from "./pages/HomePage";
import ApartmentsList from "./pages/ApartmentsList";
import CreateApartment from "./pages/CreateApartment";
import ApartmentDetails from "./components/ApartmentDetails";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/apartments' element={<ApartmentsList />} />
        <Route path='/apartments/create' element={<CreateApartment />} />
        <Route path='/apartments/:apartmentId' element={<ApartmentDetails />} />
      </Routes>

    </div>
  );
}

export default App;