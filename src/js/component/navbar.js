import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  let style1 = {
    width: "10rem",
    paddingLeft: "5px",
  };

  let style2 = {
    paddingRight: "5px",
  };

  let style3 = {
    background: "rgb(196, 196, 196)",
  };

  let style4 = {
    backgroundImage: "linear-gradient(indigo, blue)",
    color: "white"
  }

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light mb-3" style={style3}>
        <Link to="/">
          <img
            className="navbar-brand mb-0"
            style={style1}
            src="https://s1.qwant.com/thumbr/700x0/9/2/5b95dbdc43ebee40a1b7862160fd424ff107b8ca8a1a7466426b32449f011e/Star_Wars_logo_logotype.png?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FStar_Wars_logo_logotype.png&q=0&b=1&p=0&a=0"
            alt="..."
          />
        </Link>

       <div className="btn-group">
       {store.favoritos.length == 0 ? <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Favorites {store.favoritos.length}</button>
       : <button className="btn dropdown-toggle" style={style4} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Favorites {store.favoritos.length}</button>}
        
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {store.favoritos.map((item, index)=>{
            return <div className="row dropdown-item" key={index} onClick={()=>{actions.removeOneFavorite()}}>
             {item.name} - {item.type}   <i className="fa fa-trash float-right "></i>
              </div>
              })}
          <li><hr className="dropdown-divider"></hr></li>
          {store.favoritos.length == 0 ? <li><div className="dropdown-item">No items on the list</div> </li> 
          : store.favoritos.length == 1 ? <li><div className="dropdown-item">1 item on the list</div></li> 
          : <li><div className="dropdown-item">{store.favoritos.length} items on the list <button className="btn btn-danger fa fa-trash" onClick={()=>{actions.removeAllFavoritos()}}></button></div></li> }

        </div>
       </div>

      
      </nav>
    </div>
  );
};
