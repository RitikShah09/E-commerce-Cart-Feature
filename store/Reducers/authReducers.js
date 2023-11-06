import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: false,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
     state.loggedInUser = action.payload;
    },
  },
});


export const {createUser} = userReducer.actions;

export default userReducer.reducer;
