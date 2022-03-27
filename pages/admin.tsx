import { Panel } from '@/components/index';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { loadComponentsFromExternal } from 'actions/preview-actions';
import { useAppDispatch, useAppSelector } from 'hooks';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { previewComponentsSelector } from 'selectors/preview-selectors';

export interface AdminPageProps {
}

const DNDAreaWithNoSSR = dynamic(
  () => import('@/components/dnd-area'),
  {
    ssr: false
  }
)

export default function AdminPage (props: AdminPageProps) {
  const dispatch = useAppDispatch()
  const previewData = useAppSelector(previewComponentsSelector)
  const {
    past,
    future
  } = previewData
  const onUndo = () => dispatch(UndoActionCreators.undo())
  const onRedo = () => dispatch(UndoActionCreators.redo())
  const onSave = () => {
    if (previewData) {
      const json = JSON.stringify(previewData)
      localStorage.setItem('saved_preview', json)
    }
  }
  const onExport = () => {
    if (previewData) {
      const json = JSON.stringify(previewData)
      const element = document.createElement("a");
      const textFile = new Blob([json], {type: 'text/plain'});
      element.href = URL.createObjectURL(textFile);
      element.download = "component.json";
      document.body.appendChild(element); 
      element.click();
    }
  }
  const onImport = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      if (e?.target?.result) {
        const jsonState = JSON.parse(e.target.result)
        if (jsonState) {
          dispatch(loadComponentsFromExternal(jsonState))
        }
      }
    };
  }

  const {
    push
  } = useRouter()

  const buttonList = [
    {
      title: 'Save',
      handleClick: onSave
    },
    {
      title: 'Undo',
      disabled: past?.length<=0,
      handleClick: onUndo
    },
    {
      title: 'Redo',
      disabled: future?.length<=0,
      handleClick: onRedo
    },
    {
      title: 'Export',
      handleClick: onExport
    },
    {
      title: 'Import',
      isUpload: true,
      handleClick: onImport
    },
    {
      title: 'View',
      handleClick: () => {
        push('/consumer')
      }
    },
  ]
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '30px',
          borderBottom: '1px solid'
        }}
      >
        {
          buttonList.map((button) => (
                button.isUpload &&
                <>
                  <label 
                    key={button.title}
                    htmlFor={"contained-button-file"}
                  >
                    <input 
                      id="contained-button-file" 
                      type="file" 
                      style={{display: 'none'}}
                      onChange={button.handleClick}
                    />
                    <Button
                      variant='contained'
                      component='span'
                      disabled={button.disabled}
                    >
                      {button.title}
                    </Button>
                  </label>
                </> ||
                <Button
                  variant='contained'
                  component='span'
                  onClick={button.handleClick}
                  disabled={button.disabled}
                >
                  {button.title}
                </Button>
            
              
          ))
        }
      </Box>
      <DNDAreaWithNoSSR/>
      <Box>
        <Panel/>
      </Box>
    </Box>
  );
}
