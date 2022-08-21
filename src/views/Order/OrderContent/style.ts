import styled from 'styled-components';

export const OrderContentStyle = styled.div`
  display: flex;
  gap: 20px;

  & > section {
    &:first-child,
    &:last-child {
      flex-grow: 1;
    }

    &:nth-child(2) {
      flex-grow: 3;
    }
  }
`;
