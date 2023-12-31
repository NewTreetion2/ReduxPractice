import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
