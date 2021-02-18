import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar mb-2">
			<Link to="/">
				<img
					// SI QUIEREN PUEDEN CAMBIAR ESTA IMAGEN DE LOGO
					src="http://1.bp.blogspot.com/-cw9nO-NUsuc/VoB0WXzQnwI/AAAAAAAAMCo/t2SewPybFXY/s1600/Star%2BWars.jpg"
					width="230rem"
					className="logo navbar-brand mb-0 h1 text-warning"
				/>
			</Link>
			<div className="dropdown dropleft">
				<button
					className="btn dropdown-toggle text-white"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					{store.favourites.length + ` My favorites`}
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favourites.map((item, index) => {
						return (
							<Link key={index} className="dropdown-item" to="/">
								{item.name}{" "}
								<button
									className="btn"
									onClick={() => {
										actions.removFav(item);
									}}>
									<i className="fas fa-trash-alt" />
								</button>
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
