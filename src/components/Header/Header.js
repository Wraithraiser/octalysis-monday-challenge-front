import { useState } from 'react';
import styled from 'styled-components/macro';
import VisuallyHidden from '@reach/visually-hidden';
import { Link, useLocation } from 'react-router-dom';

import Icon from '../Icon';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import { RouterPath } from '../../utils/router';
import { QUERIES, WEIGHTS } from '../../utils/constants';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <CustomLink to={RouterPath.challenge} $active={pathname === RouterPath.challenge}>
            Challenges
          </CustomLink>
          <CustomLink to={RouterPath.about} $active={pathname === RouterPath.about}>
            About
          </CustomLink>
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
  padding: 16px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  position: sticky;
  top: 0;
  backdrop-filter: blur(20px);

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

const CustomLink = styled(Link)`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => (props.$active ? 'var(--color-secondary)' : 'var(--color-gray-900)')};
  font-weight: ${WEIGHTS.medium};
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
