import { Alert } from "react-native";

//custom imports below
import getApiCall from "../../utils/api";
import constants from "../../utils/constants";
import { MoviesList } from "../../utils/modals";
import ActionNames from "../../utils/actionNames";

/**
 * action to update loading param to show and hide loader on screen
 * @param loading 
 */
export const updateLoading = (loading: boolean) => ({
  payload: { loading },
  type: ActionNames.UPDATE_MOVIES_DATA,
})

/**
 * function to dispatch actions to get genres and movies list
 */
export const getMoviesAndGenres = () => {
  return (dispatch: Function) => {
    dispatch(getGenres());
    setTimeout(() => {
      dispatch(getMovies());
    }, 1500);
  }
}

/**
 * function to get movies list
 * @param isLoadMore 
 */
export const getMovies = (isLoadMore: boolean = false) => {
  return (dispatch: Function, getState: Function) => {
    let { page, movies_data }: MoviesList = getState().moviesReducer;
    let endPoint = `discover/movie?api_key=${constants.api_key}&page=${page}`;

    dispatch(updateLoading(true));
    getApiCall(
      endPoint,
      (response: any) => {
        dispatch(updateLoading(false));
        if (response.status) {
          let { data } = response, { results, total_pages } = data;
          if (isLoadMore) {
            results = movies_data.concat(results);
          }
          dispatch({
            type: ActionNames.UPDATE_MOVIES_DATA,
            payload: {
              page: page + 1,
              movies_data: results,
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

/**
 * function to get genres list
 */
export const getGenres = () => {
  return (dispatch: Function) => {
    let endPoint = `genre/movie/list?api_key=${constants.api_key}&language=en-US`;
    getApiCall(
      endPoint,
      (response: any) => {
        if (response.status) {
          let { data } = response, { genres } = data;
          dispatch({
            payload: { genres_list: genres },
            type: ActionNames.UPDATE_MOVIES_DATA,
          });
        } else {
          console.log("Can't get genres right now")
        }
      },
      (error: any) => {
        let { data } = error;
        console.log("Admiral_APP_ERROR", data.message);
      },
    );
  };
};