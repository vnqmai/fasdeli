import { Grid } from '@mui/material';
import { addComponent } from 'actions/preview-actions';
import { useAppDispatch } from 'hooks';
import dynamic from 'next/dynamic';
import * as React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { LIST_COMPONENTS } from '../constants';

export interface IDNDAreaProps {
}

export default function DNDArea (props: IDNDAreaProps) {
  const dispatch = useAppDispatch();
  function onDragEnd(result: any) {
    if (result?.destination?.droppableId==='preview' && result?.source) {
      const component = LIST_COMPONENTS[result.source.index]
      dispatch(addComponent(component))
    }
  }
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid
        container
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid 
          xs={3}
          sx={{
            borderRight: '1px solid'
          }}
        >
          <MenuComponentsNoSSR/>
        </Grid>
        <Grid xs={9}>
          <PreviewNoSSR/>
        </Grid>
      </Grid>

    </DragDropContext>
  );
}

const MenuComponentsNoSSR = dynamic(
  () => import('@/components/menu-components'),
  {
    ssr: false
  }
)

const PreviewNoSSR = dynamic(
  () => import('@/components/preview'),
  {
    ssr: false
  }
)