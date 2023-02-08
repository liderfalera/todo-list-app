import React from "react";
import { useStorageListener } from "./useStorageListener";
import { ChangeAlertForm } from "./ChangeAlertForm";
import { Modal } from "../Modal";

function ChangeAlert({ sincronize, setOpenModal }) {
	const { show, toggleShow } = useStorageListener(sincronize);

	const onHandleClick = () => {

		toggleShow();
		setOpenModal(false);
	};

	if (show) {
		return (
			<>
				<Modal>
					<ChangeAlertForm onHandleClick={onHandleClick} />
				</Modal>
			</>
		);
	} else {
		return null;
	}
}

export { ChangeAlert };
