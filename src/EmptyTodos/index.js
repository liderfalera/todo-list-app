import React from "react";
import "./EmptyTodos.css";
import { ReactComponent as EmptySVG } from "./empty2.svg";

function EmptyTodos() {
	return (
		<>
			<div className="emptySVG-container">
				<EmptySVG className="empty-svg" />
			</div>
			<p className="empty-text">Ninguna actividad encontrada</p>
		</>
	);
}

export { EmptyTodos };
