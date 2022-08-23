import React, { Suspense } from 'react';

import { HomeStyle } from '@pages/Home/style';
import Loading from '@components/Loading';
import OrderContent from '@views/Order/OrderContent';

const Home = () => (
  <Suspense fallback={<Loading />}>
    <HomeStyle>
      <OrderContent />
    </HomeStyle>
  </Suspense>
);

export default Home;
