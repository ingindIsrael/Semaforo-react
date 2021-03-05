import React from "react";
import { useState, useEffect } from "react";

export const Semaforo = props => {
	const [color, setColor] = useState({
		rojo: "negro",
		amarillo: "negro",
		verde: "negro"
	});
	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					id="light"
					className={color.rojo}
					onClick={() =>
						setColor({
							rojo: "red",
							amarillo: "negro",
							verde: "negro"
						})
					}>
					RED
				</div>

				<div
					id="light"
					className={color.amarillo}
					onClick={() =>
						setColor({
							amarillo: "yellow",
							verde: "negro",
							rojo: "negro"
						})
					}>
					YELLOW
				</div>

				<div
					id="light"
					className={color.verde}
					onClick={() =>
						setColor({
							verde: "green",
							amarillo: "negro",
							rojo: "negro"
						})
					}>
					GREEN
				</div>
			</div>
		</div>
	);
};
