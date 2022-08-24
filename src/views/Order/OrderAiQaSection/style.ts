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
    & tr {
      & > td {
        border-bottom: 1px solid ${props => props.theme.color.pip_gray_01};
      }
    }
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: none !important;
  }

  .matched {
    background-color: ${props => props.theme.color.pip_green_01};
  }

  .unmatched {
    background-color: ${props => props.theme.color.pip_red};
  }
`;

export const OrderQaListTableStyle = styled(Table)`
  background-color: white;
`;
