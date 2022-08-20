import { css } from 'styled-components';

/**
 * 색 팔레트
 */
const color = {
  pip_purple_01: '#532472',
  pip_purple_02: '#DCD5E1',
  pip_gray_01: '#6B6B6B',
  pip_gray_02: '#EAEAEA',
  pip_blue: 'F3F9FF',
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
