import React from "react";
import { TodoContext } from "../TodoContext";
import "./App.css";

//Components
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";

function AppUI() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
	} = React.useContext(TodoContext);

	return (
		<React.Fragment>
			<TodoHeader />
			<TodoCounter />
			<TodoSearch />

			<TodoList>
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
			</TodoList>
			{/* <TodoContext.Consumer>
				{({ error, loading, searchedTodos, completeTodo, deleteTodo }) => {
					return (
						<TodoList>
							{error && <p>Fatal error!!!</p>}
							{loading && <p>Cargando...</p>}
							{!loading && !searchedTodos.length && <p>Crea tu primer Todo</p>}
							{searchedTodos.map((todo) => (
								<TodoItem
									key={todo.text}
									text={todo.text}
									completed={todo.completed}
									onComplete={() => completeTodo(todo.text)}
									onDelete={() => deleteTodo(todo.text)}
								/>
							))}
						</TodoList>
					);
				}}
			</TodoContext.Consumer> */}
			{openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}

			<CreateTodoButton setOpenModal={setOpenModal} />
		</React.Fragment>
	);
}

export { AppUI };
