import styled from 'styled-components';

interface IButtonStyleProps {
  color?: string;
  radius?: number;
}

export const ButtonStyle = styled.div<IButtonStyleProps>`
  & > button {
    width: 100%;
    background-color: ${props =>
      props.color || props.theme.color.pip_purple_01};
    color: white;
    height: 36px;
    padding: 6px 38px;
    border-radius: ${props => props.radius || 20}px;
    border: none;

    &:disabled {
      color: white;
      background-color: ${props => props.theme.color.pip_gray_02};

      &:hover {
        color: white;
        background-color: ${props => props.theme.color.pip_gray_02};
      }
    }

    &:hover {
      background-color: ${props => props.color};
      color: white;
    }

    &.small {
      height: 30px;
      padding: 4px 24px;
    }

    &.middle {
      height: 40px;
      padding: 8px 30px;
    }

    &.large {
      height: 50px;
      padding: 10px 36px;
    }
  }
`;
