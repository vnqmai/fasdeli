import Component from '@/components/component';
import { Box } from '@mui/material';
import { loadComponentsFromExternal } from 'actions/preview-actions';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect } from 'react';
import { selectPreviewComponents } from 'selectors/preview-selectors';

export interface IConsumerPageProps {
}

export default function ConsumerPage (props: IConsumerPageProps) {
  const dispatch = useAppDispatch()
  const components = useAppSelector(selectPreviewComponents)

  useEffect(() => {
    const savedPreview = localStorage.getItem('saved_preview')
    if (savedPreview) {
      const preview = JSON.parse(savedPreview)
      dispatch(loadComponentsFromExternal(preview))
    }
  }, [])

  return (
    <Box
      sx={{
        width: '100%',
        height: '500px',
        textAlign: 'center'
      }}
    >
      {
        components?.length>0 &&
        components.map((component: any) => (
          <Component 
              key={component.name} 
              component={component}
            />
        ))
      }
    </Box>
  );
}
