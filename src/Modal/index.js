import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children, contentModal }) {
	return ReactDOM.createPortal(
		<div className="ModalBackground">{children}</div>,
		document.getElementById("modal")
	);
}

export { Modal };
