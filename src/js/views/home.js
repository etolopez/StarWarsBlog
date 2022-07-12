import React from "react";
import "../../styles/home.css";
import "../../styles/index.css"


import Carousel from "../component/Carousel";
import PlanetCarousel from "../component/PlanetCarousel";
import VehicleCarousel from "../component/VehicleCarousel";


export const Home = () => {

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="text-center mt-5">
          <div className="row">
            <div className="col">
              <h1>Characters</h1>
              <br></br>
            </div>
          </div>
          <Carousel />
          <hr></hr>
          <div className="row">
            <div className="col">
              <h1>Planets</h1>
              <br></br>
            </div>
          </div>
          <PlanetCarousel />
          <hr></hr>
          <div className="row">
            <div className="col">
              <h1>Vehicles</h1>
              <br></br>
            </div>
          </div>
          <VehicleCarousel />
        </div>
      </div>
    </div>
  );
};
