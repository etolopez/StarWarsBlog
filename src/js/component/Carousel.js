import React, {useContext} from "react";
import Card from "./Card";
import { Context } from "../store/appContext";

const Carousel = () => {
    const {store, action} = useContext(Context);
    
  let style1 = {
    overflowX: "scroll",
    overflowY: "white",
    alignItems: "center",
  };

  return (
    <div className="container-fluid">
      <div className="d-flex flex-row" style={style1}>
        {store.personajes.map((item, index)=> {
                return(
                  <div className="col-4" key={index}>
                    <Card name={item.name} uid={item.uid} gender={item.gender}/>
                  </div>
                )})}
      </div>
    </div>
  );
};


export default Carousel;
