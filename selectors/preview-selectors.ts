import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './../store';
export const selectPreviewComponents = (state: RootState) => state.previewReducer.present.components;
export const selectPreviewComponentsPast = (state: RootState) => state.previewReducer.past;
export const selectPreviewComponentsFuture = (state: RootState) => state.previewReducer.future;

export const previewComponentsSelector = createSelector(selectPreviewComponents, state => state);