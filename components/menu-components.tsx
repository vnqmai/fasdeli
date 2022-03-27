import { LIST_COMPONENTS } from '@/constants/index';
import { Box } from '@mui/material';
import { blue } from '@mui/material/colors';
import * as React from 'react';
import { Draggable, Droppable } from "react-beautiful-dnd";

export interface IMenuComponentsProps {
}

export default function MenuComponents (props: IMenuComponentsProps) {
  return (
    <Droppable droppableId="menu" type='components'>
      {
        (provided:any, snapshot) => (
          <Box
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {
              LIST_COMPONENTS.map((item, index) => (
              <Draggable key={item.name} draggableId={item.name} index={index}>
                {(provided: any, snapshot: any) => (
                  <Box 
                    key={item.name}
                    sx={{
                      display: 'block',
                      marginBottom: '10px',
                      width: '100px',
                      height: '100px',
                      backgroundColor: blue[index*100],
                      border: `1px solid ${blue[100]}`,
                      borderRadius: '18px',
                      textAlign: 'center',
                      lineHeight: '100px',
                      cursor: 'pointer',
                      margin: '10px auto'
                    }}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.name}
                  </Box>
                )}
              </Draggable>))
            }
          </Box>
        )
        
      }
    </Droppable>
  );
}
