import React from "react";
import { useState, useEffect } from "react";

export const Semaforo = props => {
	const [color, setColor] = useState("");
	const [rojo, setRojo] = useState("negro");
	const [amarillo, setAmarillo] = useState("negro");
	const [verde, setVerde] = useState("negro");

	useEffect(() => {
		if (color === "red") {
			setAmarillo("negro");
			setVerde("negro");
			setRojo(color);
		} else if (color === "yellow") {
			setRojo("negro");
			setAmarillo(color);
			setVerde("negro");
		} else if (color === "green") {
			setRojo("negro");
			setAmarillo("negro");
			setVerde(color);
		}
	}, [color]);
	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					id="light"
					className={rojo}
					onClick={() => setColor("red")}>
					RED
				</div>

				<div
					id="light"
					className={amarillo}
					onClick={() => setColor("yellow")}>
					YELLOW
				</div>

				<div
					id="light"
					className={verde}
					onClick={() => setColor("green")}>
					GREEN
				</div>
			</div>
		</div>
	);
};
