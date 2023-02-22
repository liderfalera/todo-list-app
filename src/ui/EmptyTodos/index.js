import React from "react";
import "./EmptyTodos.css";
import { ReactComponent as EmptySVG } from "./empty.svg";

function EmptyTodos() {
	return (
		<>
			<div className="emptySVG-container">
				<EmptySVG className="empty-svg" />
			</div>
			<p className="empty-text">¡Lista vacía! crea tu primera actividad.</p>
		</>
	);
}

export { EmptyTodos };
