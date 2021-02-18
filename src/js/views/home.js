import React from "react";
import { Personajes } from "./personajes";
import { Planetas } from "./planetas";
import "../../styles/home.scss";
import logopersonajes from "../../img/logopersonajes.png";
import logoplanetas from "../../img/logoplanetas.png";

export const Home = () => (
	<div className="container">
		<div className="character">
			<img src={logopersonajes} width="90rem" />
			<h1 className="fw-bold text-uppercase mt-4 mb-3">Characters</h1>
		</div>
		<div className="row d-flex">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<Personajes />
			</div>
		</div>
		<div className="planeta">
			<img src={logoplanetas} width="90rem" />
			<h1 className="fw-bold text-uppercase mt-4 mb-3">Planets</h1>
		</div>
		<div className="row d-flex">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<Planetas />
			</div>
		</div>
	</div>
);
