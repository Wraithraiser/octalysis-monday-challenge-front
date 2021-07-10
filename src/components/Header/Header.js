import { useState } from 'react';
import styled from 'styled-components/macro';
import VisuallyHidden from '@reach/visually-hidden';

import { QUERIES, WEIGHTS } from '../../constants';
import Icon from '../Icon';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="">Challenges</NavLink>
          <NavLink href="">About</NavLink>
        </DesktopNav>
        <MobileActions>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
    </>
  );
};

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default Header;
