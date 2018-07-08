import { combineReducers } from 'redux';
import LibararyReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibararyReducer,
    selectedLibraryId: SelectionReducer
});
