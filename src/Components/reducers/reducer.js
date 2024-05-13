import {
  ADD_NEW_MEAL,
  ADD_NEW_PICTURE,
  ADD_NEW_PRICE,
  EDIT_TASK,
  REMOVE_MEAL,
} from "../redux/types";

const initialState = {
  meals: [{ title: "Osh", have: false }],
};

const reducer = (state = initialState, action) => {
  console.log(action);
  let meals
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
    // Reducer
    case REMOVE_MEAL:
      const updatedMeals = state.meals.filter(
        (_, mealIndex) => mealIndex !== action.payload
      );
      return {
        ...state,
        meals: updatedMeals,
      };

    case EDIT_TASK:
      meals = [...state.meals];
      meals = [action.payload.index].title = action.payload.title;
      return { ...state, meals };

    default:
      return state;
  }
};
export default reducer;
