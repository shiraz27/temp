import { legacy_createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import reducers from "../reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["AuthReducer"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const AppStore = legacy_createStore(
  persistedReducer,
  {},
  applyMiddleware(ReduxThunk)
);
export default AppStore;
