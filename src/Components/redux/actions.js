import { dispatch } from "./store";
import {
  ADD_NEW_MEAL,
  ADD_NEW_PICTURE,
  ADD_NEW_PRICE,
  EDIT_TASK,
  REMOVE_MEAL,
} from "./types";

export const addNew = (value, image, price) => {
  dispatch({ type: ADD_NEW_MEAL, payload: value });
  dispatch({ type: ADD_NEW_PICTURE, payload: image });
  dispatch({ type: ADD_NEW_PRICE, payload: price });
};

export const removeTask = (index) => {
  return {
    type: REMOVE_MEAL,
    payload: index,
  };
};

export const editTask = (index, title) => {
  console.log(index, title);
  return {
    type: EDIT_TASK,
    payload: { index, title },
  };
};
