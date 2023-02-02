import React from "react";
import "./TodoList.css";

function TodoList(props) {
	const renderFunc = props.children || props.render;

	return (
		<section className="todoSection">
			<h4>LISTA DE ACTIVIDADES</h4>
			{props.error && props.onError()}
			{props.loading && props.onLoading()}
			{!props.loading && !props.totalTodos && props.onEmptyTodos()}

			{!!props.totalTodos &&
				!props.searchedTodos.length &&
				!props.loading &&
				props.onEmptySearchResults(props.searchValue)}

			<ul>
				{/* {props.searchedTodos.map((todo) => props.render(todo ))} */}
				{!props.loading && !props.error && props.searchedTodos.map(renderFunc)}
			</ul>
		</section>
	);
}

export { TodoList };
