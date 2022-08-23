import React from 'react';

import Spinner from '@components/Spinner';
import { LoadingContainer } from './style';

const Loading = () => (
  <LoadingContainer>
    <Spinner />
  </LoadingContainer>
);

export default Loading;
