import styled from 'styled-components';

export const OrderDetailSectionStyle = styled.section`
  width: 65%;

  .order-detail-section {
    & > div {
      &:last-child {
        display: flex;

        .order-detail-left-section,
        .order-detail-right-section {
          font-weight: bold;
          flex-grow: 1;

          & > div {
            width: 80%;
            border: 1px solid ${props => props.theme.color.pip_gray_02};
            padding: 15px 19px;

            &:first-child {
              margin-bottom: 6px;
            }
          }
        }

        .order-detail-title {
          color: ${props => props.theme.color.pip_gray_02};
          margin-right: 10px;
          font-weight: 600;
        }
      }
    }
  }

  .compare-order-detail {
    margin-top: 15px;
    display: flex;
    gap: 15px;
  }
`;
