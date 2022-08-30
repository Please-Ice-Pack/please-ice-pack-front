import React from 'react';

import { Error404Container } from '@pages/Error/Error404/style';

const Error404 = () => (
  <Error404Container>
    <div className="error-box">
      <div className="error-status">404</div>
      <div className="error-title">찾으시는 페이지가 없습니다.</div>
      <p className="error-desc">
        현재 요청하신 페이지를 찾을 수 없거나 오류가 발생하였습니다.
        <br />
        몇 분 후 다시 시도하시거나
        <br />
        페이지를 표시할 수 없는 이유에 대해 관리자에게 문의 바랍니다.
      </p>
    </div>
  </Error404Container>
);

export default Error404;
