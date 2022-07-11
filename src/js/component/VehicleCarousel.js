import React, {useContext} from "react";
import VehicleCard from "./VehicleCard";
import { Context } from "../store/appContext";

const VehicleCarousel = () => {
  const {store, action} = useContext(Context);  


  let style1 = {
    overflowX: "scroll",
    overflowY: "white",
    alignItems: "center",
    padding: "0.5rem 0.5rem"
  };

  return (
    <div className="container-fluid">
    <div className="d-flex flex-row" style={style1}>
      {store.vehiculos.map((item, index)=> {
              return(
                <div className="col-4" key={index}>
                  <VehicleCard name={item.name} uid={item.uid}/>
                </div>
              )})}
    </div>
  </div>
);
  };

export default VehicleCarousel