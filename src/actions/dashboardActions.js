import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  NEXT_DATE,
  PREV_DATE,
} from "../constants/dashboardConstants";
import axios from "../api/axios";

export const fetchData = (date) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_DATA_REQUEST });

    //check if data already exists in the database
    const { data: existingData } = await axios.get(`/data/${date}`);
    console.log(existingData)

    // If data does not exist, make the API call
    if (existingData.message === "No data for this date") {
      await axios.post("/data");
      // Wait for 2 second
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("if no data function accessed")

      // Fetch today's data
      const { data: newData } = await axios.get(`/data/${date}`);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: newData });
    } else {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: existingData });
    }
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const nextDateState = () => (dispatch) => {
  dispatch({ type: NEXT_DATE });
};

export const prevDateState = () => (dispatch) => {
  dispatch({ type: PREV_DATE });
};
