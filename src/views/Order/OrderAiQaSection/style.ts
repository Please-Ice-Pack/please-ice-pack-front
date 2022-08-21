import Table from '@components/Table';
import styled from 'styled-components';

export const OrderAiQaSectionStyle = styled.section`
  width: 20%;

  .packing-btn {
    padding: 5px 0;
    text-align: center;
    color: white;
    background-color: ${props => props.theme.color.pip_purple_01};
    margin-bottom: 20px;
  }
`;

export const OrderQaListTableStyle = styled(Table)``;
