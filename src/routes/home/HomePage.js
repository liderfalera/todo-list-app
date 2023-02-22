import React from "react";

import { useTodos } from "../useTodos";
import { useNavigate } from "react-router-dom";

//Components
import { TodoHeader } from "../../ui/TodoHeader";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { Modal } from "../../ui/Modal";
import { TodoForm } from "../../ui/TodoForm";
import { TodosError } from "../../ui/TodosError";
import { TodosLoading } from "../../ui/TodosLoading";
import { EmptyTodos } from "../../ui/EmptyTodos";
import { TodoDate } from "../../ui/TodoDate";
import { EmptySearchResults } from "../../ui/EmptySearchResults";
import { ChangeAlert } from "../../ui/ChangeAlert";

function HomePage() {
	const navigate = useNavigate();

	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		// openModal,
		// setOpenModal,
		totalTodos,
		completedTodos,
		searchValue,
		setSearchValue,
		// addTodo,
		sincronizedTodos,
	} = useTodos();

	return (
		<React.Fragment>
			<TodoHeader loading={loading}>
				<TodoDate />
				<TodoCounter
					totalTodos={totalTodos}
					completedTodos={completedTodos}
					// loading={loading}
				/>
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					// loading={loading}
				/>
			</TodoHeader>
			<TodoList
				error={error}
				loading={loading}
				totalTodos={totalTodos}
				searchedTodos={searchedTodos}
				searchValue={searchValue}
				onError={() => <TodosError />}
				onLoading={() => <TodosLoading />}
				onEmptyTodos={() => <EmptyTodos />}
				onEmptySearchResults={(searchText) => (
					<EmptySearchResults searchValue={searchText} />
				)}
				// render={(todo) => (
				// 	<TodoItem
				// 		key={todo.text}
				// 		text={todo.text}
				// 		completed={todo.completed}
				// 		onComplete={() => completeTodo(todo.text)}
				// 		onDelete={() => deleteTodo(todo.text)}
				// 	/>
				// )}
			>
				{(todo) => (
					<TodoItem
						key={todo.id}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.id)}
						onDelete={() => deleteTodo(todo.id)}
						onEdit={() => navigate("/edit/" + todo.id, { state: { todo } })}
					/>
				)}
			</TodoList>

			{/* <TodoList>
				{error && <TodosError error={error} />}
				{loading && <TodosLoading />}
				{!loading && !searchedTodos.length && <EmptyTodos />}
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList> */}

			{/* {openModal && (
				<Modal>
					<TodoForm
						addTodo={addTodo}
						setOpenModal={setOpenModal}
					/>
				</Modal>
			)} */}

			<CreateTodoButton
				onClick={() => navigate("/new")}
				// setOpenModal={setOpenModal}
			/>
			<ChangeAlert
				sincronize={sincronizedTodos}
				// setOpenModal={setOpenModal}
			/>
		</React.Fragment>
	);
}

export { HomePage };
