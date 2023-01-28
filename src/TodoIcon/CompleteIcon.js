import React from "react";
import { TodoIcon } from "./index";

function CompleteIcon({ completed, onComplete }) {
	return (
		<TodoIcon
			type="check"
			color={completed ? "#0669F7" : "#AFBDE3"}
			onClick={onComplete}
		/>
	);
}

export { CompleteIcon };
