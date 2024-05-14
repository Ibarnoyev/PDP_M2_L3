import { applyMiddleware, createStore } from "redux";
import reducer from "../reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const dispatch = store.dispatch;
export { dispatch };
export default store;
