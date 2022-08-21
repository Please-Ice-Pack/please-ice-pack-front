import styled from 'styled-components';

export const OrderHeaderStyle = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: bold;

  .packing-btn {
    flex-grow: 1;
    padding: 5px 0;
    text-align: center;
    color: white;
    background-color: ${props => props.theme.color.pip_purple_01};
  }

  .packing-stage-number {
    flex-grow: 3;
  }

  .packing-time {
    flex-grow: 1;
    text-align: right;
  }
`;
