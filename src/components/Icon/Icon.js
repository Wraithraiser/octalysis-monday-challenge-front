import React from 'react';
import styled from 'styled-components/macro';
import { Menu, X } from 'react-feather';

const icons = {
  menu: Menu,
  close: X,
};

const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(props) => (props.strokeWidth !== undefined ? props.strokeWidth + 'px' : undefined)};
  }
`;

export default Icon;
