import React from 'react';
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

const Logo = (props) => {
  return (
    <Link href="/">
      <Image alt="Octalysis Logo" src="/octagon.png"></Image>
      <Title {...props}>Octalysis</Title>
    </Link>
  );
};

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: ${WEIGHTS.bold};
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
`;

export default Logo;
