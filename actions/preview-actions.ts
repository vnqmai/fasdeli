import ACTION_TYPES from "@/constants/action-types";
import { createAction } from "@reduxjs/toolkit";

export const addComponent = createAction(ACTION_TYPES.PREVIEW_ADD_COMPONENT, function prepare(component: any) {
  return {
    payload: component
  }
})

export const updateComponent = createAction(ACTION_TYPES.PREVIEW_UPDATE_COMPONENT, function prepare(component: any) {
  return {
    payload: component
  }
})

export const loadComponentsFromExternal = createAction(ACTION_TYPES.PREVIEW_LOAD_COMPONENTS_FROM_EXTERNAL, function prepare(components: any[]) {
  return {
    payload: components
  }
})