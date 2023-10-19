
const initialState = {
    // user: null,   
    users: [],  // store users in array
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_USER':
        return {
          ...state,
          user: [... state.users, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default userReducer;