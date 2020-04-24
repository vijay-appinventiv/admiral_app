import { Alert } from "react-native";

//custom imports below
import getApiCall from "../../utils/api";
import constants from "../../utils/constants";
import ActionNames from "../../utils/actionNames";

export const updateLoading = (loading: boolean) => ({
  payload: { loading },
  type: ActionNames.UPDATE_MOVIES_DATA,
})

export const getMovies = (isLoadMore: boolean = false) => {
  return (dispatch: Function, getState: Function) => {
    let { page, movies } = getState().moviesReducer;
    let endPoint = `discover/movie?api_key=${constants.api_key}&page=${page}`;

    dispatch(updateLoading(true));
    getApiCall(
      endPoint,
      (response: any) => {
        dispatch(updateLoading(false));
        console.warn("response", response)
        if (response.status) {
          let { data } = response, { results, total_pages } = data;
          if (isLoadMore) {
            results = movies.concat(results);
          }
          dispatch({
            type: ActionNames.UPDATE_MOVIES_DATA,
            payload: {
              page: page + 1,
              movies: results,
              total_pages: total_pages,
            }
          });
        } else {
          Alert.alert("Admiral_APP_ERROR", "Some Error in API please try again!");
        }
      },
      (error: any) => {
        let { data } = error;
        dispatch(updateLoading(false));
        Alert.alert("Admiral_APP_ERROR", data.message);
      },
    );
  };
};