import { type } from "@testing-library/user-event/dist/type";
import { dispatch } from "./store";
import { ADD_NEW_MEAL, ADD_NEW_PICTURE, ADD_NEW_PRICE, REMOVE_MEAL } from "./types";

export const addNew = (value, image, price) => {
  dispatch({ type: ADD_NEW_MEAL, payload: value });
  dispatch({ type: ADD_NEW_PICTURE, payload: image });
  dispatch({ type: ADD_NEW_PRICE, payload: price });
};

export const removeTask = (index) =>{

    dispatch({type:REMOVE_MEAL, payload:index});
}