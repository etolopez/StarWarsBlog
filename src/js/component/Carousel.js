import React, {useContext} from "react";
import Card from "./Card";
import { Context } from "../store/appContext";

const Carousel = () => {
    const {store, action} = useContext(Context);
    
  let style1 = {
    overflowX: "scroll",
    overflowY: "white",
    alignItems: "center",
    backgroundColor: "rgb(224, 224, 224)",
    height: "40rem",
    paddingLeft: "20px",
    paddingRight: "5px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };

  return (
    <div className="container-fluid">
      <div className="d-flex flex-row " style={style1} id="sectionCharacters">
        {store.personajes.map((item, index)=> {
                return(
                  <div className="col-12 col-md-8 col-lg-6 m-0 p-0" key={index}>
                    <Card name={item.name} uid={item.uid} gender={item.gender}/>
                  </div>
                )})}
      </div>
    </div>
  );
};


export default Carousel;
