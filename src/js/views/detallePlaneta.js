import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import PlanetCarousel from "../component/PlanetCarousel";

export const DetallePlaneta = (props) => {
  const params = useParams();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch("https://www.swapi.tech/api/planets/" + params.uid)
      .then((res) => res.json())
      .then((data) =>{
        setLoading(false);
        return setData(data);
      })
      .catch((err) => err);
  }, [params.uid]);


  let style1= {
	fontSize: "30px"
  }

  let style2={
	height: "auto",
	width: "400px"
  }

  return (
    <div className="container">
    {data == "" ? (
        "Cargando.. "
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

      {loading ? <div className="">Loading... </div> :
        <div className="col-6">
			<div className="row">
				<h2>{data.result.description}</h2>
			</div>
			<br></br>
			<div className="row">
				<h4>Terrain: {data.result.properties.terrain}</h4>
			</div>
			<br></br>
			<div className="row">
				<h4>Population: {data.result.properties.population}</h4>
			</div>
			<br></br>
			<div className="row">
				<h4>Climate: {data.result.properties.climate}</h4>
			</div>
			<br></br>
			<div className="row">
				<h4>Diameter: {data.result.properties.diameter}</h4>
			</div>
			<br></br>
        </div>
}
        <div className="col-6 justify-content-center">
          {
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
              className="card-img-top"
              style={style2}
              alt="..."
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; 
                currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
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
      <PlanetCarousel />
      </div>

    </div>
  );
};

DetallePlaneta.propTypes = {
  match: PropTypes.object,
};
