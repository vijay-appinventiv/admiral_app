import { MoviesList } from "../../utils/modals";
import ActionNames from "../../utils/actionNames";

export default function moviesReducer(state: MoviesList = new MoviesList(), action: any) {
  switch (action.type) {
    case ActionNames.UPDATE_MOVIES_DATA:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}