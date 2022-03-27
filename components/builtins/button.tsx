import { Button as MUIButton } from '@mui/material';
import PropTypes, { InferProps } from 'prop-types';
import React, { useEffect, useState } from 'react';

export interface IButtonProps {
  text: string;
  message: string;
  style: object;
  handleEdit: Function
}

export function Button (props: InferProps<IButtonProps>) {
  const {
    text = Button.defaultProps.text,
    message = Button.defaultProps.message,
    handleEdit = Button.defaultProps.handleEdit
  } = props

  const [textState, setTextState] = useState('')
  const [messageState, setMessageState] = useState('')

  useEffect(() => {
    setTextState(text)
  }, [text])

  useEffect(() => {
    setMessageState(message)
  }, [message])

  const handleClick = () => {
    if (handleEdit) {
      handleEdit()
    }
    else {
      alert(messageState)
    }
  }

  return (
    <MUIButton
      sx={{
        height: '40px'
      }}
      onClick={handleClick}
    >
      {textState}
    </MUIButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  message: PropTypes.string,
  style: PropTypes.object,
  handleEdit: PropTypes.func,
}

Button.defaultProps = {
  text: 'Button',
  message: 'You clicked me',
  handleEdit: null
}
