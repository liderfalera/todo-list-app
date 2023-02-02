import React from "react";
import { ReactComponent as EmptySearchResultSVG } from "./empty-search-result.svg";
import "./EmptySearchResults.css";

function EmptySearchResults({ searchValue }) {
	return (
		<>
			<div className="emptySearchResultSVG-container">
				<EmptySearchResultSVG className="empty-search-result-svg" />
			</div>
			<p className="empty-search-result-text">
				No hay resultados para <strong>{searchValue}</strong>
			</p>
		</>
	);
}

export { EmptySearchResults };
