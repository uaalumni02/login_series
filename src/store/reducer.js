const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGGEDIN_USER":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
  }
};

export default reducer;
