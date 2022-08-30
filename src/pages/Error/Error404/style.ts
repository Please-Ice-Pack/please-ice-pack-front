import styled from 'styled-components';

export const Error404Container = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;

  .error-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .error-status {
      font-weight: bold;
      font-size: 100px;
      line-height: 100px;
    }

    .error-title {
      margin-top: 5px;
      font-size: 28px;
      font-weight: bold;
    }

    .error-desc {
      margin-top: 15px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: ${props => props.theme.color.pip_gray_02};
    }
  }
`;
