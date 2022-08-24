import { css } from 'styled-components';

/**
 * 색 팔레트
 */
const color = {
  pip_purple_01: '#532472',
  pip_purple_02: '#DCD5E1',
  pip_gray_01: '#353535',
  pip_gray_02: '#9A9A9A',
  pip_gray_03: '#D9D9D9',
  pip_red: '#FF000F',
  pip_blue_01: '#F3F9FF',
  pip_green_01: '#029723',
  pip_green_02: '#D7EADB',
  pip_orange: '#FF9900',
  pip_pink: '#F6CFCC',
} as const;

/**
 * 말줄임표 설명 스타일
 */
const ellipsis = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

/**
 * z-index
 */
const zIndex = {
  viewWrap: 1,
  opacity: 1,
  header: 90,
  loadingSpinner: 1000,
  notifyToast: 1000,
} as const;

const theme = {
  color,
  ellipsis,
  zIndex,
};

export default theme;
