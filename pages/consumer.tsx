import Component from '@/components/component';
import { Box } from '@mui/material';
import { useAppSelector } from 'hooks';
import * as React from 'react';
import { selectPreviewComponents } from 'selectors/preview-selectors';

export interface IConsumerPageProps {
}

export default function ConsumerPage (props: IConsumerPageProps) {
  const components = useAppSelector(selectPreviewComponents)
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
