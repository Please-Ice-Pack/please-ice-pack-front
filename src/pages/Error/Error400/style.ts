import styled from 'styled-components';

export const Error400Container = styled.div`
  width: 100%;
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
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .error-message {
      font-size: 20px;
    }

    .error-desc {
      margin-top: 15px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: ${props => props.theme.color.pip_gray_02};
      margin-bottom: 20px;
    }
  }
`;
