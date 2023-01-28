import React from "react";

import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
// const defaultTodos = [
// 	{ text: "Cortar cebolla", completed: true },
// 	{ text: "Tomar el curso React", completed: true },
// 	{ text: "Llorar con la llorona", completed: false },
// 	{ text: "Cenar y dormir", completed: false },
// ];

function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
