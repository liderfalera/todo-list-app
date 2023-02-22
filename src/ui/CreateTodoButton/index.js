import React from "react";
import "./CreateTodoButton.css";
import { TodoForm } from "../TodoForm";

function CreateTodoButton(props) {
	// const onClickButton = () => {
	// 	props.setOpenModal((prevState) => !prevState);
	// };

	return (
		<button
			className="CreateTodoButton"
			onClick={props.onClick}>
			+
		</button>
	);
}

export { CreateTodoButton };
