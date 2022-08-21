import styled from 'styled-components';

export const OrderDetailSectionStyle = styled.section`
  width: 65%;

  .packing-stage-number {
    margin-bottom: 20px;
  }

  .order-detail-section {
    & > div {
      &:last-child {
        display: flex;

        .order-detail-left-section,
        .order-detail-right-section {
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
      }
    }
  }

  .compare-order-detail {
    margin-top: 15px;
    display: flex;
    gap: 15px;
  }
`;
