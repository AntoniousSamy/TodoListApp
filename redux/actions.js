export const SET_USER_NAME = "SET_USER_NAME";
export const SET_NEW_TODO = "SET_NEW_TODO";
export const SET_USER_IMAGE = "SET_USER_IMAGE";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_TOGGLEFILTER = "SET_TOGGLEFILTER";
export const SET_TODO_IMAGE = "SET_TODO_IMAGE";

export const setName = (name) => (dispatch) => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};

export const setImage = (imageUri) => (dispatch) => {
  dispatch({
    type: SET_USER_IMAGE,
    payload: imageUri,
  });
};

export const setCategories = (categories) => (dispatch) => {
  dispatch({
    type: SET_CATEGORIES,
    payload: categories,
  });
};

export const setToggleFilter = (visible, selectedCategory) => (dispatch) => {
  dispatch({
    type: SET_TOGGLEFILTER,
    payload: { visible, selectedCategory },
  });
};

export const setTodo = (newTodo) => (dispatch) => {
  dispatch({
    type: SET_NEW_TODO,
    payload: newTodo,
  });
};

export const setTodoImage = (newTodoImage) => (dispatch) => {
  dispatch({
    type: SET_TODO_IMAGE,
    payload: newTodoImage,
  });
};
