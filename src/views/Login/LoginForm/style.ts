import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  padding: 40px 80px;

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

  .login-input-section {
    display: flex;
    flex-basis: 100%;
    align-items: baseline;

    .ant-form-item {
      &:first-child {
        display: flex;
        align-items: baseline;

        &:after {
          content: '@';
          margin: 0 2px;
        }
      }

      .ant-row {
        max-width: 160px;
      }

      .login-input {
        margin-top: 5px;
        border: 1px solid ${props => props.theme.color.pip_gray_01};

        &.active {
          border: 1px solid ${props => props.theme.color.pip_gray_01};
        }
      }
    }
  }
`;
