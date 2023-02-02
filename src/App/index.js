import React from "react";

import { useTodos } from "./useTodos";

//Components
import { TodoHeader } from "../TodoHeader";
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
import { TodoDate } from "../TodoDate";
import { EmptySearchResults } from "../EmptySearchResults";
import { ChangeAlert } from "../ChangeAlert";

function App() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
		totalTodos,
		completedTodos,
		searchValue,
		setSearchValue,
		addTodo,
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
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
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

			{openModal && (
				<Modal>
					<TodoForm
						addTodo={addTodo}
						setOpenModal={setOpenModal}
					/>
				</Modal>
			)}

			<CreateTodoButton setOpenModal={setOpenModal} />
			<ChangeAlert
				sincronize={sincronizedTodos}
				setOpenModal={setOpenModal}
			/>
		</React.Fragment>
	);
}

export default App;
