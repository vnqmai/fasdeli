import PropTypes, { InferProps } from 'prop-types';
import * as React from 'react';
import { LIST_COMPONENTS } from '../constants';

export interface IComponent {
  component: object;
  handleEdit: Function
}

export default function Component (props: InferProps<IComponent>) {
  const {
    component,
    handleEdit
  } = props
  const MyComponent = LIST_COMPONENTS.find(item => item.name===component.name)
  return (
    MyComponent &&
    <MyComponent.component
      {...component.props}
      handleEdit={handleEdit}
    /> ||
    <></>
  );
}

Component.propTypes = {
  component: PropTypes.object,
  handleEdit: PropTypes.func,
}

Component.defaultProps = {
  component: {
    name: '',
    props: {}
  },
  handleEdit: null
}

