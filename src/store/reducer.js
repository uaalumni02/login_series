const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGGEDIN_USER":
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payload,
      };
  }
};

export default reducer;
