import styled from 'styled-components';

export const LoginContainerStyle = styled.div`
  min-width: 1325px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main-logo-box {
    margin-bottom: -90px;
  }

  .login-option-box {
    margin-top: 30px;
    border: 1px solid ${props => props.theme.color.pip_gray_03};
    width: 500px;
  }

  .comment-box {
    border-top: 1px solid ${props => props.theme.color.pip_gray_03};
    padding: 10px 0;
    color: ${props => props.theme.color.pip_gray_02};
    text-align: center;
  }
`;
