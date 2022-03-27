import { createReducer, current } from "@reduxjs/toolkit";
import undoable from 'redux-undo';
import { addComponent, loadComponentsFromExternal, updateComponent } from './../actions/preview-actions';

type PreviewStates = {
  components: any[]
}

const initState: PreviewStates = {
  components: []
}

const reducer = createReducer(initState, builder => {
  builder
    .addCase(addComponent, (state, action) => {
      const component = {
        id: Date.now(),
        ...action.payload
      }
      state.components.push(component)
    })
    .addCase(updateComponent, (state, action) => {
      let currentComponents = [...current(state.components)]
      let updatedComponents = currentComponents.map(component => {
        if (component.id===action.payload.id) {
          return {
            ...component,
            props: action.payload.props
          }
        }
        return {
          ...component
        }
      })
      
      return {
        ...state,
        components: [...updatedComponents]
      }
    })
    .addCase(loadComponentsFromExternal, (state, action) => {
      return {
        components: action.payload
      }
    })
})

export const previewReducer = undoable(reducer)