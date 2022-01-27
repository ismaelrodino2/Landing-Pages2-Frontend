import P from 'prop-types';
import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <Styled.Container href="#" aria-label="Go to Top" title="Go to top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
