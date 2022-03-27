import {
  Action,
  configureStore, ThunkAction
} from '@reduxjs/toolkit';
import { setAutoFreeze } from 'immer';
import { panelReducer } from './reducers/panel-reducer';
import { previewReducer } from './reducers/preview-reducer';

// Fixes "Cannot assign to read only property" error message
// when modifying objects from Redux state directly.
// https://github.com/reduxjs/redux-toolkit/issues/424
setAutoFreeze(false);

export const store = configureStore({
  reducer: {
    previewReducer,
    panelReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;