import React from "react";
import "./TodoList.css";

function TodoList(props) {
	return (
		<section className="todoSection">
			<h4>LISTA DE ACTIVIDADES</h4>
			<ul>{props.children}</ul>
		</section>
	);
}

export { TodoList };
