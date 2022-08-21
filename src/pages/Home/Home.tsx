import React from 'react';

import { HomeStyle } from '@pages/Home/style';
import OrderHeader from '@views/Order/OrderHeader';

const Home = () => (
  <HomeStyle>
    <OrderHeader />
    <section>AI 검수결과 테이블 영역</section>
    <section>주문 비교 테이블 영역</section>
    <section>권장 패킹 옵션 영역</section>
  </HomeStyle>
);

export default Home;
