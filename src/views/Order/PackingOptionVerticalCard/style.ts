import styled from 'styled-components';

export const PackingOptionVerticalCardStyle = styled.article`
  border: 1px solid ${props => props.theme.color.pip_gray_01};
`;

export const CardTitleStyle = styled.div`
  padding: 5px 0;
  text-align: center;
  color: white;
  background-color: ${props => props.theme.color.pip_purple_01};
`;

export const CardImageWrapStyle = styled.div`
  background-color: ${props => props.theme.color.pip_purple_02};
  padding: 10px 0;
  text-align: center;
`;

export const CardContentStyle = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;

  .size-option,
  .number-option {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .size-title,
  .number-title {
    font-size: 18px;
    color: ${props => props.theme.color.pip_gray_01};
  }
`;
