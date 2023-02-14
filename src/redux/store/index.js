import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FavoritesReducer from "../reducers/FavoritesReducer";
import jobReducer from "../reducers/JobReducer";

const store = configureStore({
  reducer: combineReducers({
    favorites: FavoritesReducer,
    jobs: jobReducer,
  })
});

export default store;