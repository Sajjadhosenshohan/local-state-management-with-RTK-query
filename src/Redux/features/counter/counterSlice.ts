import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // for increment the state count
    increment: function (state,action) {
      state.count = state.count + action.payload;
    },

    // for increment the state count
    decrement: function (state,action) {
      state.count = state.count - action.payload;
    }
  },
});

// console.log(23, counterSlice.reducer,counterSlice.actions)

export const {increment, decrement} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
