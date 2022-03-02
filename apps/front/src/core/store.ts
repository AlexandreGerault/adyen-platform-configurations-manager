import { configureStore } from "@reduxjs/toolkit";
import { configurationsSlice } from "./configurationsSlice";

const store = configureStore({
  reducer: {
    [configurationsSlice.name]: configurationsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export { store };
