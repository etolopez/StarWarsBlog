import React, {useContext} from "react";
import "../../styles/home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Carousel from "../component/Carousel";
import PlanetCarousel from "../component/PlanetCarousel";
import VehicleCarousel from "../component/VehicleCarousel";

export const Home = () => {

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="text-center mt-5">
          <div className="row">
            <div className="col-4">
              <h1>Characters</h1>
            </div>
          </div>
          <Carousel />
          <div className="row">
            <div className="col-4">
              <h1>Planets</h1>
            </div>
          </div>
          <PlanetCarousel />
          <div className="row">
            <div className="col-4">
              <h1>Vehicles</h1>
            </div>
          </div>
          <VehicleCarousel />
        </div>
      </div>
    </div>
  );
};
