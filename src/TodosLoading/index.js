import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
	return (
		<>
			<div className="LoadingTodo-container">
				{new Array(4).fill(1).map((a, i) => (
					<div
						className="LoadingTodo-item"
						key={i}></div>
				))}
			</div>
		</>
	);
}

export { TodosLoading };
