import styled from 'styled-components';

export const OrderOptionSectionStyle = styled.section`
  .result-option-section {
    margin-top: 30px;

    button {
      height: auto;
      padding: 15px 0;
      font-size: 30px;
      line-height: 30px;

      .scan-sub-title,
      .error-sub-title,
      .submit-sub-title {
        font-size: 18px;
      }
    }

    .submit-btn-section {
      margin-top: 10px;
      display: flex;
      gap: 20px;

      & > div {
        flex-grow: 1;
      }
    }
  }
`;

export const VerticalCardSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
