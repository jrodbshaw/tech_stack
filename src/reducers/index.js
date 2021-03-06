import { combineReducers } from "redux";
// * import reducers
import LibraryReducer from "./LibraryReducer";
import SelectionReducer from "./SelectionReducer";

export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer,
});
