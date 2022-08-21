import styled from 'styled-components';

export const OrderContainerStyle = styled.article`
  border: 1px solid ${props => props.theme.color.pip_gray_01};
`;

export const OrderContainerTitle = styled.div`
  padding: 5px 0;
  text-align: center;
  color: white;
  background-color: ${props => props.theme.color.pip_gray_01};
`;

export const OrderContainerContent = styled.div`
  padding: 20px 15px;
  background-color: white;
`;
