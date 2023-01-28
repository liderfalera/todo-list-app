import React from "react";
import "./TodoHeader.css";

const monthNames = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre",
];

function TodoHeader() {
	const local = new Date();
	const [clock, setClock] = React.useState(local);

	let hours = ("0" + clock.getHours()).slice(-2),
		minutes = ("0" + clock.getMinutes()).slice(-2),
		seconds = ("0" + clock.getSeconds()).slice(-2),
		month = monthNames[clock.getMonth()],
		numDay = ("0" + clock.getDate()).slice(-2),
		year = clock.getFullYear();

	//Lógica para actualizar el setClock e ir sumando segundos
	setInterval(() => {
		setClock(new Date());
	}, 1000);

	return (
		<header>
			<h1>{`${hours}:${minutes}:${seconds}`}</h1>
			<p>{`${month} ${numDay}, ${year}`}</p>
		</header>
	);
}

export { TodoHeader };
