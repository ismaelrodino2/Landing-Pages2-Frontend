import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;
export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
  `}
`;
export const GridElement = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      position: relative;
      left: 5rem;
    }
    ${HeadingContainer}::before {
      counter-increment: counter; /* Increment the value of section counter by 1 */
      content: counter(counter);
      position: absolute;
      font-size: ${theme.fonts.sizes.xhuge};
      top: -2rem;
      left: -5rem;
      transform: rotate(5deg);
    }
  `}
`;
