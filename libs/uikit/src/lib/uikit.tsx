import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UikitProps {}

const StyledUikit = styled.div`
  color: pink;
`;

export function Uikit(props: UikitProps) {
  return (
    <StyledUikit>
      <h1>Welcome to Uikit!</h1>
    </StyledUikit>
  );
}

export default Uikit;
