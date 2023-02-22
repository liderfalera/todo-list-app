import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos(props) {
	//Initializing the custom hook.
	const {
		item: todos,
		saveItem: saveTodos,
		sincronizeItem: sincronizedTodos,
		loading,
		error,
	} = useLocalStorage("TODOS_V2", []);

	const [searchValue, setSearchValue] = React.useState("");
	const [openModal, setOpenModal] = React.useState(false);

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter((todo) => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();

			return todoText.includes(searchText);
		});
	}

	const getTodo = (id) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id);
		return todos[todoIndex];
	};

	const completeTodo = (id) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id);

		// todos[todoIndex] = {
		// 	text: todos[todoIndex].text,
		// 	completed:true,
		// };
		const newTodos = [...todos];
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};

	const editTodo = (id, newText) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id);

		// todos[todoIndex] = {
		// 	text: todos[todoIndex].text,
		// 	completed:true,
		// };
		const newTodos = [...todos];
		newTodos[todoIndex].text = newText;
		saveTodos(newTodos);
	};

	const deleteTodo = (id) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id);

		// todos[todoIndex] = {
		// 	text: todos[todoIndex].text,
		// 	completed:true,
		// };
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	const addTodo = (text) => {
		const id = newTodoId(todos);
		const newTodos = [...todos];

		newTodos.push({
			completed: false,
			text,
			id,
		});

		saveTodos(newTodos);
	};

	return {
		loading,
		error,
		totalTodos,
		completedTodos,
		searchValue,
		setSearchValue,
		searchedTodos,
		completeTodo,
		deleteTodo,
		addTodo,
		openModal,
		setOpenModal,
		sincronizedTodos,
		editTodo,
		getTodo,
	};
}

function newTodoId(todolist) {
	if (!todolist.length) {
		return 1;
	}

	const idList = todolist.map((todo) => todo.id);
	const maxId = Math.max(...idList);

	return maxId + 1;
}

export { useTodos };
