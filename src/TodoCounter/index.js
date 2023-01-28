import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";
// const estilos = {
// 	color: "red",
// 	backgroundColor: "yellow",
// };

function TodoCounter() {
	const { totalTodos, completedTodos } = React.useContext(TodoContext);

	return (
		<h2 className="TodoCounter">
			{totalTodos - completedTodos === 0
				? `Ninguna actividad pendiente.`
				: totalTodos - completedTodos === 1
				? `Hey! Tienes ${totalTodos - completedTodos} actividad pendiente. `
				: `Hey! Tienes ${totalTodos - completedTodos} actividades pendientes.`}
			<br />
			<small style={{ opacity: 0.5, marginTop: "75px" }}>
				{totalTodos} EN TOTAL
			</small>
		</h2>
	);
}

export { TodoCounter };
