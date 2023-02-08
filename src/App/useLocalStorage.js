import React from "react";

function useLocalStorage(itemName, initialValue) {
	// ? Changing with useReducer.
	const [state, dispatch] = React.useReducer(
		reducer,
		initialState({ initialValue })
	);

	const { syncronizedItem, error, loading, item } = state;

	// const [sincronizedItem, setSincronizedItem] = React.useState(true);
	// const [error, setError] = React.useState(false);
	// const [loading, setLoading] = React.useState(true);
	// const [item, setItem] = React.useState(initialValue);
	//!ACTION CREATORS
	const onError = (error) => {
		dispatch({ type: actionTypes.error, payload: error });
	};

	const onSuccess = (parsedItem) => {
		dispatch({ type: actionTypes.success, payload: parsedItem });
	};

	const onSave = (newItem) => {
		dispatch({ type: actionTypes.save, payload: newItem });
	};

	const onSync = () => {
		dispatch({ type: actionTypes.sync });
	};

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);

				let parsedItem;

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = [];
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}

				onSuccess(parsedItem);
				// setItem(parsedItem);
				// setLoading(false);
				// setSincronizedItem(true);
			} catch (error) {
				// setLoading(false);
				// setError(error);
				onError();
			}
		}, 2500);
	}, [syncronizedItem]);

	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);
			// setItem(newItem);
			onSave(newItem);
		} catch (error) {
			// setError(error);
			onError(error);
		}
	};

	const sincronizeItem = () => {
		// setLoading(true);
		// setSincronizedItem(false);
		onSync();
	};

	return { item, saveItem, loading, error, sincronizeItem };
}

// ! Creating the reducer
const initialState = ({ initialValue }) => ({
	syncronizedItem: true,
	error: false,
	loading: true,
	item: initialValue,
});

const actionTypes = {
	error: "ERROR",
	success: "SUCCESS",
	save: "SAVE",
	sync: "SYNCHRONIZE",
};

const reducerObject = (state, payload) => ({
	[actionTypes.error]: {
		...state,
		error: true,
		loading: false,
	},
	[actionTypes.success]: {
		...state,
		error: false,
		loading: false,
		syncronizedItem: true,
		item: payload,
	},
	[actionTypes.save]: {
		...state,
		item: payload,
	},
	[actionTypes.sync]: {
		...state,
		syncronizedItem: false,
		loading: true,
	},
});

const reducer = (state, action) => {
	return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
