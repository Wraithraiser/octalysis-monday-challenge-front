import styled from 'styled-components/macro';
import VisuallyHidden from '@reach/visually-hidden';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { Link, useLocation } from 'react-router-dom';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import { RouterPath } from '../../utils/router';
import { WEIGHTS } from '../../utils/constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  const { pathname } = useLocation();

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <CustomLink to={RouterPath.challenge} $active={pathname === RouterPath.challenge}>
            Challenges
          </CustomLink>
          <CustomLink to={RouterPath.about} $active={pathname === RouterPath.about}>
            About
          </CustomLink>
        </Nav>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
`;

const CustomLink = styled(Link)`
  color: ${(props) => (props.$active ? 'var(--color-secondary)' : 'var(--color-gray-900)')};
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
`;

export default MobileMenu;
