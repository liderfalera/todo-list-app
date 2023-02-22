import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {
	const { addTodo } = useTodos();

	return (
		<TodoForm
			label="Agrega tu nueva actividad"
			submitText="Añadir"
			submitEvent={(text) => addTodo(text)}
		/>
	);
}

export { NewTodoPage };
