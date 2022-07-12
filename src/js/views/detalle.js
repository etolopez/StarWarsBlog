import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import Carousel from "../component/Carousel";

export const Detalle = (props) => {
  const params = useParams();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch("https://www.swapi.tech/api/people/" + params.uid)
      .then((res) => res.json())
      .then((data) =>{
        setLoading(false);
        return setData(data);
      })
      .catch((err) => err);
  }, [params.uid]);

  let style1 = {
    fontSize: "30px",
  };

  let style2 = {
    height: "auto",
    width: "400px",
  };

  return (
    <div className="container">
      {data == "" ? (
        <div className="">Cargando... <i className="fa fa-spinner"></i> </div>
      ) : (
        <div className="container=fluid">
          <div className="row">
            <div className="col-4"></div>
            {loading ? "" :
             <div className="col-4" style={style1}>
             <h1>{data.result.properties.name}</h1>
           </div>
          }
           <div className="col-4"></div>
         </div>
         <div className="row"></div>
         <div className="row">
           
          {loading ? <div className="">Cargando info... </div> :
            <div className="col-6">
              <div className="row">
                <h2>{data.result.description}</h2>
              </div>
              <br></br>
              <div className="row">
                <h4>Hair Color: {data.result.properties.hair_color}</h4>
              </div>
              <br></br>
              <div className="row">
                <h4>Eye Color: {data.result.properties.eye_color}</h4>
              </div>
              <br></br>
              <div className="row">
                <h4>Birth Year: {data.result.properties.birth_year}</h4>
              </div>
              <br></br>
              <div className="row">
                <h4>Hair Color: {data.result.properties.hair_color}</h4>
              </div>
              <br></br>
            </div>
      }
            <div className="col-6 justify-content-center">
              {
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
                  className="card-img-top"
                  style={style2}
                  alt="..."
                />
              }
            </div>
            <div className="row">
              <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                  Back home
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="row pt-4"></div>
      <div className="row">
      <Carousel />
      </div>

    </div>
  );
};

Detalle.propTypes = {
  match: PropTypes.object,
};
