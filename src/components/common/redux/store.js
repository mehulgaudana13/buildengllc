import {thunk} from "redux-thunk";
import { persistStore } from "redux-persist";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { pageListReducer } from "./reducers/pageList";


const appReducer = combineReducers({
	auth: pageListReducer,
});

const middleware = [thunk];
const persistedReducer = appReducer; // persistReducer(persistConfig, appReducer);

export const store = createStore(persistedReducer, {}, applyMiddleware(...middleware));
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export const RootState = store.getState;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const AppDispatch = store.dispatch;
