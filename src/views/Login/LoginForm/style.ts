import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  padding: 40px 120px;

  .login-button {
    width: 100%;
    height: 48px;
    color: white;
    background: ${props => props.theme.color.pip_gray_01};
    border: 1px solid ${props => props.theme.color.pip_gray_02};

    &:hover {
      background: ${props => props.theme.color.pip_gray_01};
      color: white;
      border: 1px solid ${props => props.theme.color.pip_gray_02};
    }
  }

  .login-input {
    margin-top: 5px;
    border: 1px solid ${props => props.theme.color.pip_gray_01};

    &.active {
      border: 1px solid ${props => props.theme.color.pip_gray_01};
    }
  }
`;
