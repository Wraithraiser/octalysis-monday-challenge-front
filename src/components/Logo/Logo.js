import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { WEIGHTS } from '../../utils/constants';
import { RouterPath } from '../../utils/router';

const Logo = (props) => {
  return (
    <CustomLink to={RouterPath.challenge}>
      <Image alt="Octalysis Logo" src="/octagon.png"></Image>
      <Title {...props}>Octalysis</Title>
    </CustomLink>
  );
};

const CustomLink = styled(Link)`
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
