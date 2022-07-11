import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
			<div className="container">
				<div className="">{store.demo[params.theid].title}</div>
			<div className="row">
				<div className="col-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
				printer took a galley of type and scrambled it to make a type specimen book. It has survived 
				not only five centuries, but also the leap into electronic typesetting, remaining essentially 
				unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
				Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
				versions of Lorem Ipsum.</div>
				<div className="col-6"><img
        src="https://s1.qwant.com/thumbr/0x380/0/8/1baa44821a1035e2c2f86f1ffc26ff9a02d2db4a6ff9be26a4e0e49a4ce862/Wallpaper-Luke-Skywalker-2.jpg?u=https%3A%2F%2Fwww.kolpaper.com%2Fwp-content%2Fuploads%2F2020%2F12%2FWallpaper-Luke-Skywalker-2.jpg&q=0&b=1&p=0&a=0"
        className="card-img-top"
        alt="..."
      />
				</div>
			<div className="row">

			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
