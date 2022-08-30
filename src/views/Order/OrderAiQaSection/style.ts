import styled from 'styled-components';

import Table from '@components/Table';

export const OrderAiQaSectionStyle = styled.section`
  width: 20%;

  .packing-btn {
    padding: 5px 0;
    text-align: center;
    color: white;
    background-color: ${props => props.theme.color.pip_purple_01};
    margin-bottom: 20px;
  }

  .ant-table-tbody {
    font-weight: bold;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: none !important;
  }

  .checked {
    background-color: ${props => props.theme.color.pip_green_02};
  }

  .unchecked {
    background-color: ${props => props.theme.color.pip_pink};
  }
`;

export const OrderQaListTableStyle = styled(Table)`
  background-color: white;
`;
