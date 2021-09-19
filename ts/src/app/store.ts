import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import qiitaReducer from "../features/qiita/qiitaSlice";

export const store = configureStore({
  reducer: {
    qiita: qiitaReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
