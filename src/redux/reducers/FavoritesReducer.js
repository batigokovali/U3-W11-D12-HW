import { ADD_TO_FAVORITES } from "../actions";
import { REMOVE_FROM_FAVORITES } from "../actions";

const initialState = {
  content: [],
};

const FavoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        content: state.content.filter((el) => el._id !== action.payload),
      };

    default:
      return state;
  }
};

export default FavoritesReducer;
