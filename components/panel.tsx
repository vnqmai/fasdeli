import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { updateProps } from 'actions/panel-actions';
import { useAppDispatch, useAppSelector } from 'hooks';
import * as React from 'react';
import { editComponentPropsSelector } from 'selectors/panel-selectors';
import { updateComponent } from '../actions/preview-actions';

export interface IPanelProps {
}

export function Panel (props: IPanelProps) {
  const dispatch = useAppDispatch()
  const componentProps = useAppSelector(editComponentPropsSelector)
  
  const handleChange = async (e: Event, propName: string) => {
    let updatedProps = await componentProps.props.map(([key, value]) => {
      if (key===propName && e?.target?.value) {
        return [key, e.target.value]
      }
      return [key, value]
    })
    updatedProps = await Object.fromEntries(updatedProps)
    dispatch(updateProps({props: updatedProps}))
    dispatch(updateComponent({props: updatedProps, id: componentProps.componentId}))
  }
  
  return (
    <Box
      sx={{
        textAlign: 'center',
        paddingTop: '20px',
        borderTop: '1px solid'
      }}
    >
      {
        componentProps?.props?.length>0 &&
        componentProps.props.map(([key, value]) => (
          key!=='handleEdit' &&
          <TextField
            key={key}
            label={key}
            value={value}
            sx={{
              marginRight: '10px'
            }}
            onChange={(e) => handleChange(e, key)}
          />
        ))
      }
    </Box>
  );
}
