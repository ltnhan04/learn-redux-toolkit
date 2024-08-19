import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./pages/blogs/components/blog.reducer";
export const store = configureStore({
  reducer: { blog: blogReducer },
});
//take RootState and AppDispatch from store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
