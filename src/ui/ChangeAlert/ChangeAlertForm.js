import React from "react";

import { ReactComponent as SyncSVG } from "./syncSVG.svg";
import "./ChangeAlertForm.css";

function ChangeAlertForm({ onHandleClick }) {
	return (
		<div className="syncModal-container">
			<div className="syncModalHeader">
				<div className="syncSVG-container">
					<SyncSVG className="sync-svg" />
				</div>
				<p className="sync-text">¡Cambios detectados!</p>
			</div>
			<p className="syncModalBody-text">
				Realizaste cambios en alguna otra pestaña o ventana del navegador.
				<br />
				<br />
				<strong>Sincronice la información</strong>
			</p>
			<button
				className="sync-button"
				onClick={onHandleClick}>
				Sincronizar
			</button>
		</div>
	);
}

export { ChangeAlertForm };
