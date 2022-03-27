import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './../store';
export const selectEditComponentProps = (state: RootState) => state.panelReducer;

export const editComponentPropsSelector = createSelector(selectEditComponentProps, state => state);