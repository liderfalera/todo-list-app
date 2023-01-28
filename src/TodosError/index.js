import React from "react";
import "./ErrorTodos.css";
import { ReactComponent as ErrorSVG } from "./error.svg";

function TodosError({ error }) {
	return (
		<>
			<div className="errorSVG-container">
				<ErrorSVG className="error-svg" />
			</div>
			<p className="error-text">{error}</p>
		</>
	);
}

export { TodosError };
