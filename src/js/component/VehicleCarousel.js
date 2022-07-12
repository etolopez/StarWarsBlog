import React, {useContext} from "react";
import VehicleCard from "./VehicleCard";
import { Context } from "../store/appContext";

const VehicleCarousel = () => {
  const {store, action} = useContext(Context);  


  let style1 = {
    overflowX: "scroll",
    overflowY: "white",
    alignItems: "center",
    backgroundColor: "rgb(224, 224, 224)",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    height: "28rem",
    paddingLeft: "20px",
    paddingRight: "5px",
    borderRadius: "5px"
  };

  return (
    <div className="container-fluid">
    <div className="d-flex flex-row" style={style1} id="sectionCharacters">
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