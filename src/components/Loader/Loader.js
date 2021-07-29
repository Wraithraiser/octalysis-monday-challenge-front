import React from 'react';
import styled from 'styled-components/macro';
import VisuallyHidden from '@reach/visually-hidden';
import Icon from '../Icon';

const Loader = () => {
  return (
    <Wrapper>
      <AnimationBreath>
        <Icon id="octagon" size={40} color="var(--color-blue)" />
        <VisuallyHidden>Loading Icon</VisuallyHidden>
      </AnimationBreath>
      Loading...
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 64px;
`;

const AnimationBreath = styled.div`
  animation: breath 1s infinite linear;

  @keyframes breath {
    0% {
      transform: scale(0.9);
    }

    51% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(0.9);
    }
  }
`;

export default Loader;
