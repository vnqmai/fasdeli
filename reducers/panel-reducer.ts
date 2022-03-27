import { createReducer } from '@reduxjs/toolkit';
import { showProps, updateProps } from './../actions/panel-actions';

type PanelStates = {
  props: any[],
  componentId: number
}

const initState: PanelStates = {
  props: [],
  componentId: -1
}

export const panelReducer = createReducer(initState, builder => {
  builder
    .addCase(showProps, (state, action) => {
      return {
        ...state,
        props: Object.entries(action.payload.props),
        componentId: action.payload.componentId
      }
    })
    .addCase(updateProps, (state, action) => {
      return {
        ...state,
        props: Object.entries(action.payload.props),
      }
    })
})