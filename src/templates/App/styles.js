import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Wrapper = styled.div`
  ${({ background }) => css`
    background-color: ${theme.colors.mainBg};
  `}
`;
