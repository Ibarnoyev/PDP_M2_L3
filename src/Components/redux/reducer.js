import {
  ADD_NEW_MEAL,
  ADD_NEW_PICTURE,
  ADD_NEW_PRICE,
  REMOVE_MEAL,
} from "./types";

const initialState = {
  meals: [{ title: "Osh", have: false }],
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_NEW_MEAL:
      return {
        ...state,
        meals: [...state.meals, { title: action.payload, have: true }],
      };
    case ADD_NEW_PICTURE:
      return {
        ...state,
        meals: [...state.meals, { title: action.payload, have: true }],
      };
    case ADD_NEW_PRICE:
      return {
        ...state,
        meals: [...state.meals, { title: action.payload, have: true }],
      };
    case REMOVE_MEAL:
      const meals = [...state.meals];
      meals.splice(action.payload, 1);
      return { ...state, meals };
    default:
      return state;
  }

  return state;
};
export default reducer;
