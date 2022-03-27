import { Typography } from '@mui/material';
import PropTypes, { InferProps } from 'prop-types';
import React, { useEffect, useState } from 'react';

export interface IParagraph {
  text: string;
  handleEdit: Function;
}

export function Paragraph (props: InferProps<IParagraph>) {
  const {
    text = Paragraph.defaultProps.text,
    handleEdit = Paragraph.defaultProps.handleEdit
  } = props;

  const [textState, setTextState] = useState('')
  useEffect(() => {
    setTextState(text)
  }, [text])

  const handleClick = () => {
    if (handleEdit) {
      handleEdit()
    }
  }

  return (
    <Typography
      onClick={handleClick}
    >
      {textState}
    </Typography>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string,
  handleEdit: PropTypes.func,
}

Paragraph.defaultProps = {
  text: "Parapraph",
  handleEdit: () => {}
}
