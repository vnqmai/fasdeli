import { Box } from '@mui/system';
import { showProps } from 'actions/panel-actions';
import { loadComponentsFromExternal } from 'actions/preview-actions';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { selectPreviewComponents } from 'selectors/preview-selectors';
import Component from './component';

export interface IPreviewProps {
}

export default function Preview (props: IPreviewProps) {
  const dispatch = useAppDispatch();
  const components = useAppSelector(selectPreviewComponents)

  useEffect(() => {
    const savedPreview = localStorage.getItem('saved_preview')
    if (savedPreview) {
      const preview = JSON.parse(savedPreview)
      dispatch(loadComponentsFromExternal(preview))
    }
  }, [])

  const showEditableProps = (componentProps: any) => {
    dispatch(showProps(componentProps))
  }
  
  return (
    <Droppable 
      droppableId="preview" 
      type='components'
    >
    {
      (provided:any, snapshot) => (
        <Box
          {...provided.droppableProps}
          ref={provided.innerRef}
          sx={{
            width: '100%',
            height: '500px',
            textAlign: 'center'
          }}
        >
          {
            components?.length>0 &&
            components.map((component: any) => (
              // component.component  &&
              // <component.component 
              //   key={component.name}
              //   {
              //     ...component.props
              //   }
              //   handleEdit={() => showEditableProps({props: component.props, componentId: component.id})}
              // >
              //   {/* {component.component.props} */}
              // </component.component> ||
              <Component 
                key={component.name} 
                component={component}
                handleEdit={() => showEditableProps({props: component.props, componentId: component.id})}
              />
            ))
          }
        </Box>
      )
    }
    </Droppable>

  );
}
