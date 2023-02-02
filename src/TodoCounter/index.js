import React from "react";
import "./TodoCounter.css";

// const estilos = {
// 	color: "red",
// 	backgroundColor: "yellow",
// };

function TodoCounter({ totalTodos, completedTodos, loading }) {
	return (
		<h2 className="TodoCounter">
			{loading && "Cargando actividades."}
			{!loading &&
				(totalTodos - completedTodos === 0
					? `Ninguna actividad pendiente.`
					: totalTodos - completedTodos === 1
					? `Hey! Tienes ${totalTodos - completedTodos} actividad pendiente. `
					: `Hey! Tienes ${
							totalTodos - completedTodos
					  } actividades pendientes.`)}
			<br />
			<small style={{ opacity: 0.5, marginTop: "75px" }}>
				{loading && "Espere..."}
				{!loading && `${totalTodos} EN TOTAL`}
			</small>
		</h2>
	);
}

export { TodoCounter };
