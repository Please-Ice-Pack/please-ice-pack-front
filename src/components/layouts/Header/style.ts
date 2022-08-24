import styled from 'styled-components';
import Button from '@components/Button';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: ${props => props.theme.zIndex.header};
  height: 120px;
  padding: 15px 64px;
  box-shadow: rgb(237 237 237) 0px 1px 0px 0px;
  background-color: white;
`;

export const LeftSideHeaderStyle = styled.div``;

export const HeaderTitle = styled.div`
  color: ${props => props.theme.color.pip_purple_01};
  font-size: 30px;
  font-weight: bold;

  &:hover {
    color: ${props => props.theme.color.pip_purple_01};
  }

  &:after {
    display: block;
    content: 'Kurly Smart Packing System';
    font-size: 15px;
  }
`;

export const RightSideHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const WorkGuideButtonStyle = styled(Button)``;

export const LogOutButtonStyle = styled(Button)``;
