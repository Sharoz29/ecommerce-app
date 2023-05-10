import { rootReducer } from "./rootReducer";
import { legacy_createStore as createStore } from "redux";

export const store = createStore(rootReducer);
