import React from 'react';
import { SyncLoader } from 'react-spinners';
import { LoaderSizeMarginProps } from 'react-spinners/helpers/props';

import theme from '@styles/theme';

const Spinner = ({ size = 30, loading = true }: LoaderSizeMarginProps) => (
  <SyncLoader
    size={size}
    color={theme.color.pip_purple_01}
    margin="12px"
    loading={loading}
  />
);
export default Spinner;
