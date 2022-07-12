import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";

const VehicleCard = (props) => {

  const { store, actions } = useContext(Context);
    
  let favStore = () =>{
		let index = store.favoritos.findIndex((elm)=> elm.name == props.name);
    if (index == -1){
      return false
    } return true
  };

  let style1 = {
    width: "20rem",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    border: "none"
  };

  let style2 = {
    color: "white"
  }


  return (
    <div className="card" style={style1}>
    {<img
      src={`https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`}
      className="card-img-top"
      alt="..."
    />}
    <div className="card-body">
        <h3>{props.name}</h3>
        <br></br>
      <div className="row">
        <a href='' className="col-7 btn btn-primary">
          <Link to={"/vehicle/" + props.uid}>
              <span style={style2}>Vehicle Details</span>
            </Link>
        </a>
        <a href= '' className="col-3 "></a>
        
        {favStore() ? <button className="col-2 btn btn-success fa fa-heart" onClick={()=>{actions.changeFav(props.name)}}></button> : 
          <button className="col-2 btn btn-warning far fa-heart" onClick={()=>{actions.ponerComoFavorito({"name": props.name, "ID": props.uid, "type": "Vehicle"})} }></button>}
          
        
        </div>
  </div>
  </div>
  )
}

export default VehicleCard