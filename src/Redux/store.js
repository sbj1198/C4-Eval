import { legacy_createStore, combineReducers } from "redux";
import { authReducer } from "./Auth/reducer";

const rootReducers = combineReducers({
    auth: authReducer
});


export const store = legacy_createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
