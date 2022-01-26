import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`;
