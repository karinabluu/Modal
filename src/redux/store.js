import { createStore } from "redux";
import { combineReducers } from "redux";
import rooms from "./modules/rooms";

const rootReducer = combineReducers({
  rooms,
});
const store = createStore(rootReducer);

export default store;
