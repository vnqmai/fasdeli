import ACTION_TYPES from '@/constants/action-types';
import { createAction } from '@reduxjs/toolkit';
export const showProps = createAction(ACTION_TYPES.PANEL_SHOW_PROPS, function prepare(props: any) {
  return {
    payload: props
  }
})

export const updateProps = createAction(ACTION_TYPES.PANEL_UPDATE_PROPS, function prepare(props: any) {
  return {
    payload: props
  }
})