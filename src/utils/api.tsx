import constants from "./constants";

/**
 * 
 * @param endPoint api end point
 * @param successCallback function for handle success response 
 * @param errorCallback function for handle error response
 */
const getApiCall = (endPoint: string, successCallback: Function, errorCallback: Function) => {

  constants.axios.get(endPoint, {}).then((response: any) => {
    successCallback(response);
  }).catch((error: any) => {
    if (error.code === "ECONNABORTED") {
      let payload = {
        data: {
          status: 408
        }
      }
      errorCallback(payload);
    }
    else if (error.response) {
      errorCallback(error.response)
    }
    else if (!error.response) {
      let payload = {
        data: {
          status: ""
        }
      }
      errorCallback(payload);
    }
  })
}

export default getApiCall;


