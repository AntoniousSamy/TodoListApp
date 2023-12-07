import {
  SET_USER_NAME,
  SET_USER_IMAGE,
  SET_CATEGORIES,
  SET_TOGGLEFILTER,
  SET_NEW_TODO,
  SET_TODO_IMAGE,
} from "./actions";
import colors from "../constants/colors";

const initialState = {
  name: " ",
  todo: [],
  image: null,
  categories: [
    { id: 1, name: "All", icon: "icon-all", color: colors.black },
    { id: 2, name: "Work", icon: "work", color: colors.lightBlue },
    {
      id: 3,
      name: "Personal",
      icon: "emoji-food-beverage",
      color: colors.green,
    },
    { id: 4, name: "Wishlist", icon: "list-alt", color: colors.purple },
    { id: 5, name: "Birthday", icon: "cake", color: colors.lightRed },
  ],
  visible: false,
  selectedCategory: null,
  todoImage: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, name: action.payload };
    case SET_USER_IMAGE:
      return { ...state, image: action.payload };
    case SET_CATEGORIES:
      return {
        ...initialState, 
        categories: action.payload,
      };
    case SET_TODO_IMAGE:
      return { ...state, todoImage: action.payload };
    case SET_TOGGLEFILTER:
      return {
        ...state,
        visible: action.payload.visible,
        selectedCategory: action.payload.selectedCategory,
      };

    case SET_NEW_TODO:
      const filteredTodos =
        state.selectedCategory && state.selectedCategory.name !== "All"
          ? state.todo.filter(
              (todo) => todo.category === state.selectedCategory.name
            )
          : state.todo;

      return { ...state, todo: action.payload || filteredTodos };

    default:
      return state;
  }
};

export default userReducer;


